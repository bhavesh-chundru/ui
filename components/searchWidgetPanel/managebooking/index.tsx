// import * as React from 'react';
// import { styled } from '@mui/system';
// import TabsUnstyled from '@mui/base/TabsUnstyled';
// import TabsListUnstyled from '@mui/base/TabsListUnstyled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
// import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
// import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
// import ManageBooking from './ManageBooking';
// import Withoutpnr from './Withoutpnr';




// const blue = {
//   50: '#F0F7FF',
//   100: '#C2E0FF',
//   200: '#80BFFF',
//   300: '#66B2FF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
//   800: '#004C99',
//   900: '#003A75',
// };

// const Tab = styled(TabUnstyled)`
//   font-family: Poppins;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px;
//   letter-spacing: 0em;
//   text-align: center;
//   color: #908BA6;
//   cursor: pointer;
//   background-color: transparent;
//   margin: 6px 6px;
//   border: 1px solid #908BA6;
//   display: flex;
//   justify-content: center;
//   height: 32px;
//   width: 113px;
//   left: 170px;
//   top: 594px;
//   border-radius: 45px;
//   padding: 12px, 20px, 12px, 20px;



//   &:focus {
//     color: #908BA6;
//     border-radius: 45px;
//     outline: 2px solid #908BA6;
//     outline-offset: 2px;
//   }

//   &.${tabUnstyledClasses.selected} {
//     background: #000000;
//     color: #F2F2F2;
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const TabPanel = styled(TabPanelUnstyled)`
//   width: 100%;
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
// `;

// const TabsList = styled(TabsListUnstyled)`
//   min-width: 400px;
//   border-radius: 8px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: start;
//   align-content: space-between;
//   gap:16px;
// `;

// export default function Bookingtab() {
//   return (
//     <>
//     <TabsUnstyled defaultValue={0}>
//       <TabsList>
//         <Tab>With PNR</Tab>
//         <Tab>Without PNR</Tab>
        
//       </TabsList>
      
//       <TabPanel value={0}><ManageBooking/></TabPanel>
//       <TabPanel value={1}><Withoutpnr/></TabPanel>

//     </TabsUnstyled>
//     </>
//   );
// }

// import React,{useState} from 'react';
// import { styled } from '@mui/system';
// import TabsUnstyled from '@mui/base/TabsUnstyled';
// import TabsListUnstyled from '@mui/base/TabsListUnstyled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
// import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
// import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

// import Radio from '@mui/material/Radio';
// import ManageBooking from './ManageBooking';
// import Withoutpnr from './Withoutpnr';



// const blue = {
//   50: '#F0F7FF',
//   100: '#C2E0FF',
//   200: '#80BFFF',
//   300: '#66B2FF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
//   800: '#004C99',
//   900: '#003A75',
// };

// const Tab = styled(TabUnstyled)`
//   // font-family: Poppins; 
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 24px;
//   letter-spacing: 0em;
//   text-align: center;
//   color: #595959;;
//   cursor: pointer;
//   background-color: transparent;
//   margin: 6px 6px;
//   border:transparent;
//   justify-content: center;
//   // padding: 12px, 20px, 12px, 20px;


//   &:focus {
//     color: #FF6300;
//     // border-radius: 45px;
//     // outline: 2px solid #908BA6;
//     // outline-offset: 2px;
//   }

//   &.${tabUnstyledClasses.selected} {
//     // background: #000000;
//     color: #FF6300;
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const TabPanel = styled(TabPanelUnstyled)`
//   width: 100%;
//   // font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
// `;

// const TabsList = styled(TabsListUnstyled)`
//   min-width: 320px;
//   border-radius: 8px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: start;
//   align-content: space-between;
//   gap:16px;
// `;

// export default function BookingSearchWidget() {

//   const [selectedValue, setSelectedValue] = useState('oneway');

//   const handleChange = (event:any) => {
//     setSelectedValue(event.target.value);
//   };
//   const controlProps = (item:any) => ({
//     checked: selectedValue === item,
//     onChange: handleChange,
//     value: item,
//     name: 'color-radio-button-demo',
//     inputProps: { 'aria-label': item },
//   });

//   return (
//     <>
//     <TabsUnstyled defaultValue={0}>
//       <TabsList>
//         <Tab><span  ><Radio {...controlProps('oneway')} sx={{'&.Mui-checked': {color: "#FF6300"},}} id="oneway" /> <label htmlFor="oneway" className="Pointer" >Retrieve with a PNR</label></span></Tab>
//         <Tab><span ><Radio {...controlProps('roundtrip')}  sx={{'&.Mui-checked': {color: "#FF6300"},}} id="roundtrip" /> <label htmlFor="roundtrip" className="Pointer" >Retrieve without a PNR</label></span></Tab>
 
//       </TabsList>
//       <TabPanel value={0}><ManageBooking/></TabPanel>
//       <TabPanel value={1}><Withoutpnr/></TabPanel>

//     </TabsUnstyled>
//     <style>
//       {

//         `
//       .Pointer{
//         cursor:pointer;
//       }
        
//         `
//       }
//     </style>
//     </>
//   );
// }
import { makeStyles, StylesContext } from "@material-ui/styles";
import { Button, TextField, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useState } from "react";
import styles from "./ManageBooking.module.css";
import Link from 'next/link';


const useStyles = makeStyles({
  btn:{
    backgroundColor:'#FF6300',
    padding:'1rem 3.625rem 1rem 3.625rem',
    color:'#FFFFFF',
    fontSize:'16px',
    lineHeight:'16px',
    borderRadius:'8px 0px 8px 8px',
    '&:hover':{
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      backgroundColor:'#FF6300',
    }
  }
})

function BookingSearchWidget(){
const classes= useStyles()
  
  return(
    <>
      <Box>
        <Typography className={styles.text}>
          Retrieve your booking using PNR
        </Typography>
        <Box className={styles.box1Flex}>
          <TextField className={styles.textf} label="PNR/Booking Ref" variant="outlined"/>
          <TextField className={styles.textf} label="Email/Last Name" variant="outlined"/>
         <Link href="/manageBookingFlowPage">
         <Button className={classes.btn}>
            Search
          </Button>
         </Link>
        </Box>
        <Typography className={styles.bottom} >
          Retrieve without a PNR
        </Typography>
      </Box>
      <style>
        {
          `
          .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
            border-radius:8px 0 8px 8px;
          }
          MuiOutlinedInput-notchedOutline{
            border-radius:8px 0 8px 8px;
          }
          `
        }
      </style>
    </>
  )
}
export default BookingSearchWidget;