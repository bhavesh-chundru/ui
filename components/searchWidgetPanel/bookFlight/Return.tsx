import DateRangePicker from '@mui/lab/DateRangePicker';
import { Container , Popper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import * as mockData from "../../../mock/destinations";
// import { AiOutlineSwap } from "react-icons/ai";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Modal from "react-modal";
import { Stack } from "@mui/material";
import Passengers from "../../common/Passengers";
import Link from 'next/link';
import Button from "@mui/material/Button";
import styled from 'styled-components';
import DateRangeIcon from '@mui/icons-material/DateRange';
import style from './Booking.module.css';
import Toggle from "./Toggle";
import Image from  'next/image';
import SwapArrow from '../../../public/svg/swapArrow.svg'

const currencies = [
  { value: "INR", label: "Indian Rupees" },
  { value: "USD", label: "US Dollars" },
  { value: "EUR", label: "Euro" },
  { value: "AED", label: "UAE Dirham" },
];

const AirportWrap = styled.div`
display:flex
`

const ReturnTrip = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, setValue] = useState<any>([null, null]);
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

  const myPopper = (props:any) => {
    return ( 
      <Popper {...props} style={{maxWidth:"300px",transform:"translateX(10px)" }}/>
    )
  }

  return (
    <>
      <form>
        <Container >
          <Box className="fieldHeight" display='flex' flexDirection='row' justifyContent='space-evenly'  style={{width:"106%" , marginInline:"-3%", display:'flex', flexWrap:'wrap' ,justifyContent:'start' }} >
          <Box className="fieldHeight" >
            <Stack
              spacing={2}
              sx={{ width: 240, height: 40 ,marginRight:'7px' }}
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
                       <Box boxShadow={3} className={style.dropDownIataCode} >
                        <b>{option.IATA_code}</b>
                      </Box>
                      <div>&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; </div>
                      
                      <div >
                       </div>
                    
                      </div>
                      <div>
                      <div style={{display:"block"  , marginBottom:'13px' }}>
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
          <Box className="fieldHeight" style={{marginTop:8 ,marginRight:'7px'}} >
            <span
              className="pointer" 
            >
              <Image src={SwapArrow} alt='swaping icon' />
            </span>
          </Box>
          <Box className="fieldHeight">
            <Stack
              spacing={2}
              sx={{ width: 240, height: 40 , marginRight:'16px' }}
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
                       <Box boxShadow={3} className={style.dropDownIataCode} >
                        <b>{option.IATA_code}</b>
                      </Box>
                      <div>&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; </div>
                      
                      <div >
                       </div>
                    
                      </div>
                      <div>
                      <div style={{display:"block" , marginBottom:'13px'}}>
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
          <Box sx={{width:'max-content'}} className="fieldHeight">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Departure Date"
        endText="Departure Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} style={{marginRight:"17px" , width:'253px'}}/>
           
            <TextField {...endProps} style={{width:'253px'}} />
          </React.Fragment>
        )}
      /> 
    </LocalizationProvider>
          </Box>
          <Box className="fieldHeight" style={{marginRight:"16px"}}>
            <Passengers />
          </Box>
          <Box sx={{width:207}} className="fieldHeight"> 
            <TextField
              id="outlined-basic"
              label="Promo Code"
              variant="outlined"
              style={{width:'261px'}}
            />
          </Box>
          </Box>
        </Container>
        <div className="row" style={{ marginBottom: "-5%" }}>
          <div className="col">
            <div className="text-start">
              <label htmlFor="" style={{ color: "#777777", fontWeight: "400" }}>
                Special fares{" "}
                <span style={{ color: "#485B60" }}>
                  {" "}
                  <InfoOutlinedIcon fontSize="small" />{" "}
                </span>
              </label>
            </div>
            <div style={{marginTop:'18.5px'}}>
              <Toggle />
            </div>
          </div>
        </div>
        <Box display='flex' flexDirection='row-reverse'  >
        <Link href="/RoundTripAvailableFlight">
            <Button variant="contained" style={{color:"white" , backgroundColor: "#FF6300", borderRadius: '8px 0px 8px 8px', width:'208px' , height:'48px' , textTransform:"none", padding:' 12px 16px' }} >
            Search Flights
            </Button>
            </Link>   
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

export default ReturnTrip;
