import React, { useState, useEffect, MouseEventHandler } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Revenue.scss';

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

  const handleRevenueInputChange = (event) => {
    setRevenueValue(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (revenueValue.trim() === '' || description.trim() === '' || selectedMonth.trim() === '') {
      setIsInputInvalid(true);
      return;
    }


      setInputValues((prevInputValues) => [
      ...prevInputValues,
      { currency, revenue: revenueValue, description, selectedMonth },
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
              <FormControl sx={{m:1, minWidth: 120, paddingTop: '10px'}} variant="standard">
                  <InputLabel id="month-input" sx={{color:'#8AEDBA', paddingTop: '10px'}}>
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
                  {inputValue.selectedMonth} : {inputValue.revenue}
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

export default Revenue;
