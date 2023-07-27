import React, { useState, useEffect, MouseEventHandler } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Revenue.scss';


interface BasicSelectProps {
  currency: string;
  handleChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}


const BasicSelect: React.FC<BasicSelectProps> = ({ currency, handleChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 90 }} variant="standard">
      <InputLabel id="currency-input" sx={{ color: '#8AEDBA' }}>
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

interface ContainedButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ContainedButton: React.FC<ContainedButtonProps> =({handleClick}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#8AEDBA',
          color: 'black',
          fontFamily: 'Poppins',
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

// interface RevenueProps {

// }
const Revenue = ({ setInputValues, inputValues }) => {
  const [currency, setCurrency] = useState('');
  const [revenueValue, setRevenueValue] = useState('');
  const [description, setDescription] = useState('');
  const [displayData, setDisplayData] = useState(false);
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleRevenueInputChange = (event) => {
    setRevenueValue(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (revenueValue.trim() === '' || description.trim() === '') {
      setIsInputInvalid(true);
      return;
    }

    setInputValues((prevInputValues) => [
      ...prevInputValues,
      { currency, revenue: revenueValue, description },
    ]);

    setRevenueValue('');
    setDescription('');
    setIsInputInvalid(false);
    setDisplayData(true);
  };

  useEffect(() => {
    // Remove this useEffect block to prevent resetting displayData after data is shown
    // setDisplayData(false);
  }, [inputValues]);

  return (
    <div className="revenue-content">
      <p className="body-heading">Revenue</p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="input-container">
            <BasicSelect currency={currency} handleChange={handleChange} />
            <input
              type="number"
              className={`revenue-input ${isInputInvalid ? 'error' : ''}`}
              placeholder="Your last month's revenue"
              value={revenueValue}
              onChange={handleRevenueInputChange}
              onKeyPress={(event) => {
                if(event.key == 'Enter') {
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
        <div className="revenue-display">
          {inputValues.map((inputValue, index) => (
            <div key={index}>
              <p>
                {inputValue.currency} {inputValue.revenue} : {inputValue.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Revenue;
