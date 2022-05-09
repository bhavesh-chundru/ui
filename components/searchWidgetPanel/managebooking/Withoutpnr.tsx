



import { Container , Popper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import * as mockData from "../../../mock/destinations";
import { AiOutlineSwap } from "react-icons/ai";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Modal from "react-modal";
import { Stack } from "@mui/material";
import Passengers from "../../common/Passengers";
import Link from 'next/link';
import Button from "@mui/material/Button";
import styled from 'styled-components';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Toggle from '../bookFlight/Toggle';
import MuiPhoneNumber from 'material-ui-phone-number';

const currencies = [
  { value: "INR", label: "Indian Rupees" },
  { value: "USD", label: "US Dollars" },
  { value: "EUR", label: "Euro" },
  { value: "AED", label: "UAE Dirham" },
];

const AirportWrap = styled.div`
display:flex
`

const Withoutpnr = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, setValue] = useState([null, null]);
  const [selectedOptionOrg, setSelectedOptionOrg] = useState(null);
  const [selectedOptionDest, setSelectedOptionDest] = useState(null);
  const [currecncy, setCurrency] = useState(null);
  const options = mockData.data;
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",

      padding: 0,
      alignText: "left",
    }),
  };
       const [dateValue,SetDateValue]=useState(new Date())
    const handleDateChange =(newValue:any)=>{
        SetDateValue(newValue)
      }
  const myPopper = (props:any) => {
    return ( 
      <Popper {...props} style={{maxWidth:"300px",transform:"translateX(10px)" }}/>
    )
  }

  return (
    <>
      <form>
        <Container >
          <Box className="fieldHeight" display='flex' flexDirection='row' justifyContent='space-evenly'  style={{width:"106%" , marginInline:"-3%"}} >
          <TextField
                id="outlined-basic"
                label="PhoneNumber"
                type="text"
                name="email"
             
                variant="outlined"
              />
                 <Box sx={{width:250}} className="fieldHeight">
               


          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
                    label="Departure Date"
                    value={dateValue}
                    onChange={handleDateChange}
                    disabled
                    renderInput={(params) => <TextField {...params}/>}
                />

      
    </LocalizationProvider>
          </Box>
          <Box className="fieldHeight" >
            <Stack
              spacing={2}
              sx={{ width: 187, height: 40 }}
            >
             <Autocomplete
                  id="size-small-standard"
                  size="small"
                  noOptionsText="No Destinations Found"
                  // inputValue={selectedOptionOrg}
                  // disableClearable
                  PopperComponent={myPopper}
                  // disableCloseOnSelect={true}
                  // onChange={handleInputChangeOrg}
                  options={mockData.data}
                  // getOptionLabel={(option) =>
                  //   option.IATA_code 
                  // }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                    >
                      <AirportWrap>
                      <div>
                       <div >
                        <b>{option.IATA_code}</b>
                      </div>
                      <div>&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; </div>
                      
                      <div >
                       </div>
                    
                      </div>
                      <div>
                      <div style={{display:"block"}}>
                          {option.city_name} 
                        </div>
                      <div className="text-muted" style={{fontSize:"10px",whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                          ({option.airport_name})
                        </div>
                      </div>
                      </AirportWrap>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="From"
                      // onKeyDown={handleKeyDown}
                    />
                  )}
                />
            </Stack>
          </Box>
          {/* <Box className="fieldHeight" style={{marginTop:8}} >
            <span
              className="pointer" 
            >
              <AiOutlineSwap />
            </span>
          </Box> */}
          <Box className="fieldHeight">
            <Stack
              spacing={2}
              sx={{ width: 187, height: 40 }}
            >
              <Autocomplete
                  id="size-small-standard"
                  size="small"
                  noOptionsText="No Destinations Found"
                  // inputValue={selectedOptionOrg}
                  // disableClearable
                  PopperComponent={myPopper}
                  // disableCloseOnSelect={true}
                  // onChange={handleInputChangeOrg}
                  options={mockData.data}
                  // getOptionLabel={(option) =>
                  //   option.IATA_code 
                  // }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                    >
                      <AirportWrap>
                      <div>
                       <div >
                        <b>{option.IATA_code}</b>
                      </div>
                      <div>&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; </div>
                      
                      <div >
                       </div>
                    
                      </div>
                      <div>
                      <div style={{display:"block"}}>
                          {option.city_name} 
                        </div>
                      <div className="text-muted" style={{fontSize:"10px",whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                          ({option.airport_name})
                        </div>
                      </div>
                      </AirportWrap>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="To"
                      // onKeyDown={handleKeyDown}
                    />
                  )}
                />
            </Stack>
          </Box>
          {/* <Box sx={{width:250}} className="fieldHeight">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Depart"
        endText="Return"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} style={{marginRight:"17px"}}/>
           
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
          </Box> */}
         
         
          </Box>
        </Container>
      
        <Box display='flex' flexDirection='row-reverse'  >

            <Button variant="contained" style={{color:"white" , backgroundColor: "#FF6300", borderRadius: '8px 0px 8px 8px', width:'208px' , height:'48px' , textTransform:"none", padding:' 12px 16px' }} >
            Submit
            </Button>
         
       </Box>
      </form>
      <style>
        {
          `
          .MuiAutocomplete-inputRoot {
            font-weight:900;
          }
          .donate-now {
            list-style-type: none;
            margin: 10px 0 0 0;
            padding: 0;
          }
        
          .donate-now li {
            float: left;
            margin: 0 5px 5px 0;
            width: 11%;
            height: 30px;
            position: relative;
            text-align: center;
            align-items:center;
            
          }
        
          .donate-now label,
          .donate-now input {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        
          .donate-now input[type="radio"] {
            opacity: 0.01;
          }
        
          .donate-now input[type="radio"]:checked+label,
          .Checked+label {
            border: 1px solid #CCC;
            background: transparent;
            color: #485B60;
            font-weight: 500
          }
        
          .donate-now label {
            padding:5px 10px;
            // border: 1px solid #CCC;
            border-radius: 10%;
            cursor: pointer;
            background: #F0F3F5;
            color: #485B60;
            font-weight: 500
          }
          
          .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
            border-radius:8px 0px 8px 8px;
            height:50px;
          }
          `
        }
      </style>
    </>
  );
};

export default Withoutpnr;
