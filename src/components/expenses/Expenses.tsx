import React, { useState, useEffect, MouseEventHandler, ChangeEvent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Expenses.scss';
import { addDoc, auth, collection, db, doc, getDocs, query, updateDoc, where } from '../../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { getDoc } from 'firebase/firestore';

interface ExpenseItem {
  currency: string;
  expense: string;
  description: string;
  selectedMonth: string;
}

interface ContainedButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({ handleClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FFCCCB',
          color: 'black',
          fontFamily: 'PP mori',
          fontWeight: 'bold',
          marginBottom: '15px',
          marginTop: '10px',
        }}
        onClick={handleClick}
      >
        Submit
      </Button>
    </Stack>
  );
};

const Expense: React.FC = () => {
  const [user] = useAuthState(auth);

  const [currency] = useState<string>('');
  const [expenseValue, setExpenseValue] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [displayData, setDisplayData] = useState<boolean>(false);
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [inputValues, setInputValues] = useState<ExpenseItem[]>([]);

  const handleMonthChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedMonth(event.target.value as string);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handlExpenseInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpenseValue(event.target.value);
  };

  const handleDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = async(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (expenseValue.trim() === '' || description.trim() === '' || selectedMonth.trim() === '') {
      setIsInputInvalid(true);
      return;
    }

    setInputValues((prevInputValues) => [
      ...prevInputValues,
      { currency, expense: expenseValue, description, selectedMonth },
    ]);

    if (user) {
      const q = await query(collection(db, "expenses"), where("email", "==", user.email));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "expenses"), {
          uid: user.uid,
          email: user.email,
          expenses: [
            ...inputValues,
            { currency, expense: expenseValue, description, selectedMonth },
          ],
        });
      } else {
       
        await updateDoc(doc(db, "expenses", docs.docs[0].id), {
          expenses: [
            ...inputValues,
            { currency, expense: expenseValue, description, selectedMonth },
          ],
        });
      }

    }
    setExpenseValue('');
    setDescription('');
    setIsInputInvalid(false);
    setDisplayData(true);
  };

  const getData = async () => {
    if (user) {
    try {
      const q = query(collection(db, "expenses"), where("email", "==", user.email));
      const docs = await getDocs(q);
      if (docs.docs.length !== 0) {
      const docRef = doc(db, "expenses", docs.docs[0].id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().expenses);
      setDisplayData(true);

  setInputValues(docSnap.data().expenses)
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}}
      return 0;
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }
  };

  useEffect(()=>{
    getData();
  }, [user])

  return (
    <div className="expenses-content">
      <p className="body-heading">Expenses</p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="input-container">
            <FormControl sx={{ m: 1, minWidth: 120, paddingTop: '10px' }} variant="standard">
              <InputLabel id="month-input" sx={{ color: '#ffcccb', paddingTop: '10px' }}>
                Month
              </InputLabel>
              <Select
                labelId="month-select-label"
                id="month-select-field"
                value={selectedMonth}
                label="Month"
                onChange={handleMonthChange}
                sx={{
                  color: 'white',
                }}
              >
                <MenuItem value={'January'}>January</MenuItem>
                <MenuItem value={'February'}>February</MenuItem>
                <MenuItem value={'March'}>March</MenuItem>
                <MenuItem value={'April'}>April</MenuItem>
                <MenuItem value={'May'}>May</MenuItem>
                <MenuItem value={'June'}>June</MenuItem>
                <MenuItem value={'July'}>July</MenuItem>
                <MenuItem value={'August'}>August</MenuItem>
                <MenuItem value={'September'}>September</MenuItem>
                <MenuItem value={'October'}>October</MenuItem>
                <MenuItem value={'November'}>November</MenuItem>
                <MenuItem value={'December'}>December</MenuItem>
              </Select>
            </FormControl>

            <input
              type="number"
              className={`expenses-input ${isInputInvalid ? 'error' : ''}`}
              placeholder="Your last month's expenses"
              value={expenseValue}
              onChange={handlExpenseInputChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleButtonClick(event);
                }
              }}
            />
            <input
              type="text"
              className={`expenses-description ${isInputInvalid ? 'error' : ''}`}
              placeholder="Description"
              value={description}
              onChange={handleDescriptionInputChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleButtonClick(event);
                }
              }}
            />
            <ContainedButton handleClick={async()=>{
              await handleButtonClick(event);

           }} />
          </div>
        </div>
      </form>

      {displayData && (
        <div className="expenses-display">
          {inputValues.map((inputValue, index) => (
            <div key={index}>
              <p>
                {inputValue.selectedMonth} : {inputValue.expense}
              </p>
              <p>
                {inputValue.description}
                <hr />
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Expense;
