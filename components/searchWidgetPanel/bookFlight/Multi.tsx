import { Container , Popper } from "@material-ui/core";
import  { useEffect, useState } from "react";
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
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import style from './Booking.module.css';
import LowFarePricingCalender from "../../common/PricingCalender";
import Toggle from "./Toggle";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

import Image from 'next/image'
import swapIcon from '../../../public/svg/swapIcon.svg'
import calendarIcon from '../../../public/svg/calendarIcon.svg'


const currencies = [
  { value: "INR", label: "Indian Rupees" },
  { value: "USD", label: "US Dollars" },
  { value: "EUR", label: "Euro" },
  { value: "AED", label: "UAE Dirham" },
];

const AirportWrap = styled.div`
display:flex
`

const MultiCityTrip = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [selectedOptionOrg, setSelectedOptionOrg] = useState(null);
  const [selectedOptionDest, setSelectedOptionDest] = useState(null);
  const [currecncy, setCurrency] = useState(null);


  const [dateValue,SetDateValue]=useState(new Date())

  const handleDateChange =(newValue:any)=>{
    SetDateValue(newValue)
  }



  const options = mockData.data;
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",

      padding: 0,
      alignText: "left",
    }),
  };




  // ================Add Flights Button======================================

  const [inputList, setInputList] = useState([1,2]);

  const [showAddFlight,setShowAddFlight] = useState(true)

  const [removeButton, setRemoveButton] =useState(false);

  


 
  // handle click event of the Remove button
  const handleRemoveClick = (index:any) => {

    if(inputList.length == 2 ){
      setRemoveButton(true)
      setShowAddFlight(true)
     
    }
    
    else{
      const list = [...inputList];
      list.splice(index, 1);
      setShowAddFlight(true)
      setInputList(list);
    }
 
   
  };
 


  // handle click event of the Add button
  const handleAddClick = () => {
      if(inputList.length <= 4)
      {
        setRemoveButton(false)
        setShowAddFlight(true)
      }
      else{
        setShowAddFlight(false)
      }
    setInputList([...inputList, 2]);
  };


  // ================End Add Flights Button======================================



  
  const myPopper = (props:any) => {
    return ( 
      <Popper {...props} style={{maxWidth:"300px",transform:"translateX(10px)" }}/>
    )
  }

  return (
    <>
      <form>
        
{/* ======================First Fields================================================================================================================ */}

    <Container >
         
         

{/* ===============Add Flight Mapping Start=============================================================================== */}
          


  {inputList.map((x, i) => {
        return (
          <div key={i}>
       
            <Box className="fieldHeight" display='flex' flexDirection='row' sx={{marginTop:3}} >
              
          <Box className="fieldHeight" >
            <Stack
              spacing={2}
              sx={{ width: 260, height: 40 , marginInline:1 }}
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
                      label="From"
                      // onKeyDown={handleKeyDown}
                    />
                  )}
                />
            </Stack>
          </Box>





          <Box sx={{padding:'10px 0px 0px 0px'}}>
          <Image src={swapIcon} alt="icon" height="20" width="40" />
          
          </Box>
          {/* 
          <SwapHorizIcon style={{color:'#5C0FD9'}}/>
          <Box className="fieldHeight" style={{marginTop:8}} >
            <span
              className="pointer" style={{marginInline:2}}
            >
              <AiOutlineSwap />
            </span>





          </Box> */}
          <Box className="fieldHeight" >
            <Stack
              spacing={2}
              sx={{ width: 260, height: 40 ,marginInline:1}}
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
                      <div style={{display:"block" , marginBottom:'13px' }}>
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


          {/* <Box sx={{marginInline:1}} >
          <div  className={style.dateSection}>
                <LowFarePricingCalender />
          </div>
          </Box>   */}
             
          <Box sx={{marginInline:1}} >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Departure Date"
                    value={dateValue}
                    onChange={handleDateChange}
                    
                    renderInput={(params) => <TextField {...params}/>}
                />
    </LocalizationProvider>
          {/* <div  className={style.dateSection}>
                <LowFarePricingCalender />
          </div> */}

          </Box>

          <Box className="fieldHeight" >
          {removeButton ? "" : inputList.length !== 0 && 
            <Stack
              spacing={2}
              sx={{ width: 150, height: 40 , marginInline:1, fontSize:'16px', fontWeight:600,padding:' 10px 0px 0px 0px', color:'#5C0FD9',cursor:'pointer'}}
              onClick={() => handleRemoveClick(i)}>
                Remove
            </Stack>
          }
          </Box>   
      </Box>

        

     

{/* ======================Add Icon ================================================================================================= */}

          <Box sx={{mx:2 , textTransform:'none'}}  >
            
              
          {showAddFlight ? inputList.length - 1 === i && 
            <Button variant="outlined" style={{color:"#000000" , border:'1px solid #000000' , borderRadius: '8px 0px 8px 8px', textTransform:'none'}} 
            onClick={handleAddClick}>
             Add Flights
            </Button> : ""
          }
          </Box>
        </div>
          );
    })}








          <Box className="" display='flex' flexDirection='row' sx={{marginTop : 3}}>
                  
          <Box className="fieldHeight" sx={{marginInline:2}}>
            <Passengers />
          </Box>
          <Box sx={{width:207 , marginInline:'26px'}} className="fieldHeight"> 
            <TextField
              id="outlined-basic"
              label="Promo Code"
              variant="outlined"
            />
          </Box>
          </Box>
    </Container>





{/* ====================Add Flight Mapping End========================================================================== */}




        <Box  >
          <Box >
            <Box className="text-start">
              <label htmlFor="" style={{ color: "#777777", fontWeight: "400" }}>
                Special fares{" "}
                <span style={{ color: "#485B60" }}>
                  {" "}
                  <InfoOutlinedIcon fontSize="small" />{" "}
                </span>
              </label>
            </Box>
            <div style={{marginTop:'18.5px'}}>
              <Toggle />
            </div>
          </Box>
        </Box>
        <Box display='flex' flexDirection='row-reverse'  >
        <Link href="/SearchFlight">
            <Button variant="contained" style={{color:"white" , backgroundColor: "#FF6300", borderRadius: '8px 0px 8px 8px', width:'208px' , height:'48px' , textTransform:"none", padding:' 12px 16px' }} >
            Search Flights
            </Button>
            </Link>   
       </Box>
      </form>



      <style>
        {
          `
          .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
            width:310px;
       
          }
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
          }
        
          .donate-now label {
            padding:5px 10px;
            // border: 1px solid #CCC;
            border-radius: 10%;
            cursor: pointer;
            background: #F0F3F5;
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

export default MultiCityTrip;
