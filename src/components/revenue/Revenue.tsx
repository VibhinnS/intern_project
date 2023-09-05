import React, { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { addDoc, auth, collection, db, doc, getDocs, query, updateDoc, where } from '../../firebase';
import './Revenue.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDoc } from 'firebase/firestore';

interface ContainedButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

interface InputValue {
  currency: string;
  revenue: string;
  description: string;
  selectedMonth: string;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({ handleClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#8AEDBA',
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

const Revenue: React.FC<{ setInputValues: React.Dispatch<React.SetStateAction<InputValue[]>>, inputValues: InputValue[] }> = ({ setInputValues, inputValues }) => {
  const [user] = useAuthState(auth);
  const [currency] = useState('');
  const [revenueValue, setRevenueValue] = useState('');
  const [description, setDescription] = useState('');
  const [displayData, setDisplayData] = useState(false);
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedMonth(event.target.value as string);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleRevenueInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRevenueValue(event.target.value);
  };

  const handleDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (revenueValue.trim() === '' || description.trim() === '' || selectedMonth.trim() === '') {
      setIsInputInvalid(true);
      return;
    }

    setInputValues((prevInputValues) => [
      ...prevInputValues,
      { currency, revenue: revenueValue, description, selectedMonth },
    ]);
    if (user) {
      const q = await query(collection(db, "revenue"), where("email", "==", user.email));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "revenue"), {
          uid: user.uid,
          email: user.email,
          revenue: [
            ...inputValues,
            { currency, revenue: revenueValue, description, selectedMonth },
          ],
        });
      } else {
       
        await updateDoc(doc(db, "revenue", docs.docs[0].id), {
          revenue: [
            ...inputValues,
            { currency, revenue: revenueValue, description, selectedMonth },
          ],
        });
      }

    }
    setRevenueValue('');
    setDescription('');
    setIsInputInvalid(false);
    setDisplayData(true);
  };
  const setData = async()=>{
    if (user) {
      const q = await query(collection(db, "revenue"), where("email", "==", user.email));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "revenue"), {
          uid: user.uid,
          email: user.email,
          revenue: inputValues,
        });
      } else {
       
        await updateDoc(doc(db, "revenue", docs.docs[0].id), {
          revenue: inputValues,
        });
      }
      return docs.docs;
    }
  }

  const addToFirebaseCart = async () => {
    if(user){
    try {
      const q = query(collection(db, "revenue"), where("email", "==", user.email));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "revenue"), {
          uid: user.uid,
          email: user.email,
          revenue: inputValues,

        });
      } else {
        await updateDoc(doc(db, "revenue", docs.docs[0].id), {
          revenue: inputValues,
        });
      }
      // return docs.docs;


    if (docs.docs.length !== 0) {
      docs.forEach((doc) => {
        // previousCart.push(doc.data());
        // setInputValues(doc.data().revenue);
console.log(doc.data());
      });
      // return previousCart[0].cart;
    }

    } catch (err) {
      console.error(err);
      alert(err.message);
    }}
  };


const getData = async () => {
    if (user) {
    try {
      const q = query(collection(db, "revenue"), where("email", "==", user.email));
      const docs = await getDocs(q);
      // const previousCart = [];
      // if (docs.docs.length !== 0) {
      //   docs.forEach((doc) => {
      //     // previousCart.push(doc.data());
      //     setInputValues(doc.data().revenue);
      //     console.log(doc.data().revenue);
      //   });
      //   // return previousCart[0].cart;
      // }
      const docRef = doc(db, "revenue", docs.docs[0].id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().revenue);
      setDisplayData(true);

  setInputValues(docSnap.data().revenue)
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
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
    <div className="revenue-content">
      <p className="body-heading">Revenue</p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="input-container">
            <FormControl sx={{ m: 1, minWidth: 120, paddingTop: '10px' }} variant="standard" className="month-dropdown">
              <InputLabel id="month-input" sx={{ color: '#8AEDBA', paddingLeft: '10px' }}>
                Month
              </InputLabel>
              <Select
                labelId="month-select-label"
                id="month-select-field"
                value={selectedMonth}
                label="Month"
                onChange={handleMonthChange}
                className={`month-selection ${isInputInvalid ? 'error' : ''}`}
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
              className={`revenue-input ${isInputInvalid ? 'error' : ''}`}
              placeholder="Your last month's revenue"
              value={revenueValue}
              onChange={handleRevenueInputChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleButtonClick(event);
                }
              }}
            />
            <input
              type="text"
              className={`revenue-description ${isInputInvalid ? 'error' : ''}`}
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
              // await setData();
// const trial = addToFirebaseCart();
              // console.log(trial);
              // console.log(setData);
           }} />
          </div>
        </div>
      </form>

      {displayData && (
        <div className="revenue-display">
          {inputValues.map((inputValue, index) => (
            <div key={index}>
              <p>
                {inputValue.selectedMonth} : {inputValue.revenue}
              </p>
              <p>
                {inputValue.description}
                <br />
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Revenue;
