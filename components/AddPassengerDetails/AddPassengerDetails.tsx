import {useState} from 'react';
import Box from '@mui/material/Box';
import styles from './AddPassengerDetails.module.css';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Switch from '@mui/material/Switch';
import PassengerSavedNames from './PassengerSavedNames';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector } from "../../redux/hooks";
import AccordionInput from './AccordionInput';



const Heading = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  padding: 16px 24px;
  margin-bottom:-7px;
`
const SubHeading = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  padding : 8px 10px;
  margin-bottom: 0;
`
const SubInnerHeading = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 0 ;
`
const ParagraphContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color :#666666;
`
const CountryCodeField = styled.select`
  width : 100px;
  height : 48px;
  background: #FFFFFF;
  border: 1px solid #E1E1DF;
  box-sizing: border-box;
  border-radius: 8px 0px 8px 8px;

`
const Division = styled.div`
    padding: 14px 0px 0px 0px;
  `
  const ParagraphFlightPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  padding : 14px 19px 13px 16px
  `

const AddPassengerDetails = () => {
  const origin = useAppSelector((state) => state.bookingData.origin);
  const destination = useAppSelector((state) => state.bookingData.destination);
  const passenger=useAppSelector((state)=>state.bookingData.passenger);


  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [date, setDate] = useState(null);

  const [adtGender, setGender] = useState([]);
  const [snGender, setSnGender] = useState([]);
  const [childGender, setChildGender] = useState([]);


  const [ countryCode, setCountryCode] = useState('');

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };


  const Label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  let adult=[];
  let child=[];
  let sc=[];
  for(let i=1;i<=passenger.adult;i++){
    adult=[...adult,{id:i}]
  }
  for(let i=1;i<=passenger.seniorcitizen;i++){
    sc.push(i)
  }
  for(let i=1;i<=passenger.child;i++){
    child.push(i)
  }

  /* const adultHandleGender = (event,id) => {
    adult.map((itm) => {
      if (itm.id === id) {
       adtGender.map((ev)=>{
         if(ev.id!=itm.id){
          setGender([...adtGender,{value:event.target.value,id:id}]);
         }
       })
      }
    });

  };
  const ChildHandleGender = (event,id) => {
    adult.map((itm) => {
      if (itm.id === id) {
       childGender.map((ev)=>{
         if(ev.id!=itm.id){
          setChildGender([...childGender,{value:event.target.value,id:id}]);
         }
       })
      }
    });

  };
  const scHandleGender = (event,id) => {
    adult.map((itm) => {
      if (itm.id === id) {
       snGender.map((ev)=>{
         if(ev.id!=itm.id){
          setSnGender([...snGender,{value:event.target.value,id:id}]);
         }
       })
      }
    });

  }; */
  
  return (
    <>
    {/* ====================================================== step =============================================== */}
    {/* <Box sx={{ width: '100%' ,backgroundColor:'#FFFFFF', marginTop:'8px' ,padding:'8px 0px' ,}}>
      <Stepper  alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box> */}
     {/* ====================================================== step =============================================== */}

    <Box>
    <Box sx={{backgroundColor:"#FFFFFF" , marginTop:'8px' , marginBottom:'-7px' }}>
          <Heading>
             Who is Travelling ?
          </Heading>
    </Box>

    {/* ======================================================= Passengers ========================================= */}

   

   {adult.map((data,index)=>{
return(
  <AccordionInput adultNo={index+1} key={index} category="Adult"/>
)
   })}
   {child.map((data,index)=>{
return(
<AccordionInput adultNo={index+1} key={index} category="Child"/>
)
   })}
   {sc.map((data,index)=>{
return(
  <AccordionInput adultNo={index+1} key={index} category="Senior Citizen"/>
)
   })}
     

    {/* ======================================================= passengers ========================================= */}
    {/* ======================================================= Primary contact details ============================ */}

        <Box sx={{backgroundColor:"#FFFFFF" , marginTop:'8px' , marginBottom:'-7px' }}>
              <SubInnerHeading className={styles.ContactHeading}>
              Primary contact details
              </SubInnerHeading>
              <ParagraphContent className={styles.contactParagraph}>
                All booking related info will be sent here
              </ParagraphContent>
              <Box className={styles.ContactDetails}>
                  <Box  className={styles.CountryCodeField}>
                    <form>
                      <CountryCodeField 
                          id="countryCode" 
                          onChange={handleChange}
                          value={countryCode}
                          >
                        <option value="+91">+91</option>
                        <option value="+971">+971</option>
                        <option value="+974">+974</option>
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                      </CountryCodeField>
                    </form>
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { height:'48px', width: '261px' , borderRadius: '8px 0px 8px 8px' , margin : '16px 0 24px 0 ' }
                    }}
                    noValidate
                    autoComplete="off"
                  >
                     <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { height:'48px', width: '261px' , borderRadius: '8px 0px 8px 8px' , margin : '16px 0 24px 0 ' }
                    }}
                    noValidate
                    autoComplete="off"
                  >
                     <TextField id="outlined-basic" label="Email Id" variant="outlined" />
                  </Box>
              </Box>
        </Box>

    {/* ======================================================= Primary contact details ============================ */}

    {/* ======================================================= GST ================================================ */}

          <Box sx={{backgroundColor:"#FFFFFF" , marginTop:'17px' , marginBottom:'-7px' , display:'flex' , flexDirection:'row' , justifyContent:'space-between' , padding: ' 24px 18px 24px 24px' }}>
                <SubInnerHeading>
                  Add GST Details <InfoOutlinedIcon fontSize="small" style={{color : '#485B60' , position:'relative' , top : '-1px'}}/>
                </SubInnerHeading>
                <Box><ArrowForwardIosIcon fontSize="small" style={{color : '#485B60'}} /></Box>
              
          </Box>

    {/* ======================================================= GST ================================================ */}

          {/* ======================================================= GST ================================================ */}

          <Box sx={{backgroundColor:"#FFFFFF" , marginTop:'17px' , marginBottom:'-7px' , display:'flex' , flexDirection:'row' , justifyContent:'space-between' , padding: ' 24px 29px 24px 24px' }}>
                <Box>
                <SubInnerHeading>
                  Is this a business trip? 
                </SubInnerHeading>
                  <ParagraphContent>
                    Set up a business account to recieve a copy of your booking related info to an official account
                  </ParagraphContent>
                </Box>
                <Box className={styles.FlightDetails} sx={{margin:'0 -6px 0 0'}}>
                  Set up now     
                </Box>
              
          </Box>

    {/* ======================================================= GST ================================================ */}
    </Box>

    <style>
    {`
    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
      color : #FF6300;
    }
    .css-o4b71y-MuiAccordionSummary-content{
      margin : 0 !important;
    }

    .css-1elwnq4-MuiPaper-root-MuiAccordion-root.Mui-expanded {
      margin : 0 !important;
    }
    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
      min-height : max-content ;
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
      height :48px !important;
      border-radius: 8px 0px 8px 8px;
    }
    .css-jsexje-MuiSwitch-thumb{
      background-color:#FF6300;
    }

    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
      width: 252px;
      height: 48px;
      border-radius: 8px 0 8px 8px;
      }

      .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
        width: 252px;
        height: 48px;
        border-radius: 8px 0 8px 8px;
      }
    
    `} 
    </style>
    </>
  )
}

export default AddPassengerDetails