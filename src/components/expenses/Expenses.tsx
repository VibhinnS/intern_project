import React, { useState, useEffect, MouseEventHandler } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Expenses.scss";

interface ContainedButtonProps {
    handleClick: MouseEventHandler<HTMLButtonElement>;
}
const ContainedButton: React.FC<ContainedButtonProps> =({handleClick}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FFCCCB',
          color: 'black',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          marginBottom: '15px',
          marginTop: '10px'
        }}
        onClick={handleClick}
      >
        Submit
      </Button>
    </Stack>
  );
};

const Expense = ({ setInputValues, inputValues }) => {
  const [currency, setCurrency] = useState('');
  const [expenseValue, setExpenseValue] = useState('');
  const [description, setDescription] = useState('');
  const [displayData, setDisplayData] = useState(false);
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');


    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

    const handlExpenseInputChange = (event) => {
        setExpenseValue(event.target.value);
    };
  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

    const handleButtonClick = (event) => {
        event.preventDefault();
        if (expenseValue.trim() === '' || description.trim() === '' || selectedMonth.trim() === '') {
            setIsInputInvalid(true);
            return;
        }

     setInputValues((prevInputValues) => [
        ...prevInputValues,
        { currency, expense: expenseValue, description, selectedMonth },
     ]);

        setExpenseValue('');
        setDescription('');
        setIsInputInvalid(false);
        setDisplayData(true);

    };

    useEffect(() => {

    }, [inputValues]);

  return (
<div className="expenses-content">
    <p className="body-heading">Expenses</p>
    <form onSubmit={handleFormSubmit}>
      <div className="form-container">
        <div className="input-container">
            <FormControl sx={{m:1, minWidth: 120, paddingTop: '10px'}} variant="standard">
                <InputLabel id="month-input" sx={{color:'#ffcccb', paddingTop: '10px'}}>
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
                if(event.key == 'Enter') {
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
                if(event.key == 'Enter') {
                    handleButtonClick(event);
                }
            }}
          />
          <ContainedButton handleClick={handleButtonClick} />
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

