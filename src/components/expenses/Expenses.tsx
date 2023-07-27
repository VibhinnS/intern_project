import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Expenses.scss";

const BasicSelect = () => {
  const [currency, setCurrency] = useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 90 }} variant="standard">
      <InputLabel id="currency-input" sx={{ color: '#FFCCCB' }}>
        Currency
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="currency-input-field"
        value={currency}
        label="Currency"
        onChange={handleChange}
        sx={{
          color: 'white',
        }}
      >
        <MenuItem value={'USD'}>USD</MenuItem>
        <MenuItem value={'EUR'}>EUR</MenuItem>
        <MenuItem value={'GBP'}>GBP</MenuItem>
      </Select>
    </FormControl>
  );
};

const ContainedButton = ({ handleClick }) => {
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

const Expenses = () => {
  const [expensesValue, setexpensesValue] = useState('');
  const [description, setDescription] = useState('');
  const [displayData, setDisplayData] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const handleexpensesInputChange = (event) => {
    setexpensesValue(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = () => {
    if (expensesValue.trim() === '' || description.trim() === '') {
      setIsInputInvalid(true);
      return; // Stop execution if fields are empty
    }

    console.log('expenses value:', expensesValue);
    console.log('Description:', description);

    setDisplayData(true);
    setInputValues((prevInputValues) => [
      ...prevInputValues,
      { expenses: expensesValue, description: description }
    ]);

    setexpensesValue('');
    setDescription('');
    setIsInputInvalid(false);
  };

  return (
    <div className="expenses-content">
      <p className="body-heading">Expenses</p>
      <div className="form-container">
        <div className="input-container">
          <BasicSelect />
          <input
            type="number"
            className={`expenses-input ${isInputInvalid ? 'error' : ''}`}
            placeholder="Your last month's expenses"
            value={expensesValue}
            onChange={handleexpensesInputChange}
          />
          <input
            type="text"
            className={`expenses-description ${isInputInvalid ? 'error' : ''}`}
            placeholder="Description"
            value={description}
            onChange={handleDescriptionInputChange}
          />
          <ContainedButton handleClick={handleButtonClick} />
        </div>
      </div>

      {displayData && (
        <div className="expenses-display">
          {inputValues.map((inputValue, index) => (
            <div key={index}>
              <p>{inputValue.expenses}  :  {inputValue.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Expenses;

