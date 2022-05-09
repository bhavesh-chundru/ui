import { useState } from 'react';
import Box from '@mui/material/Box';
import styles from './AddPassengerDetails.module.css';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import PassengerSavedNames from './PassengerSavedNames';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Checkbox from '@mui/material/Checkbox';
import { useAppSelector } from "../../redux/hooks";

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
const AccordionInput = (props) => {
    const [gender, setGender] = useState('');

    const [passengersData,setPassengersData]=useState([
        {
            category:null,
            firstName:null,
            lastName:null,
            gender:null,
            DOB:null
        }
    ])

    const [date, setDate] = useState(null);

    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const [countryCode, setCountryCode] = useState('');

    const handleChange = (event) => {
        setCountryCode(event.target.value);
    };


    const Label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{ backgroundColor: "#F5F5F5", display: 'flex' }}
            >
                <Typography>
                    <SubHeading>
                         {props.category} {props.adultNo}
                    </SubHeading>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box>
                        <SubInnerHeading style={{ margin: '16px 0 0 10px' }}>
                            Saved Travellers
                        </SubInnerHeading>
                        <Box sx={{ margin: '12px 0 0 10px' }}>
                            <PassengerSavedNames />
                        </Box>
                    </Box>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px', margin: '16px 24px 0 10px' }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { height: '48px', width: '252px', borderRadius: '8px 0px 8px 8px' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { height: '48px', width: '252px', borderRadius: '8px 0px 8px 8px' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    </Box>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleGender}
                            >
                                <MenuItem style={{ display: 'block', padding: '3px 0' }} value={1}>Male</MenuItem>
                                <MenuItem style={{ display: 'block', padding: '3px 0' }} value={2}>Female</MenuItem>
                                <MenuItem style={{ display: 'block', padding: '3px 0' }} value={3}>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date Of Birth (Optional)"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>
                <Box>
                    {/* <Box  className={styles.SpeacialAssistance}> 
                  <ParagraphFlightPrice> <Division >Require special assistance  </Division></ParagraphFlightPrice>   <Switch {...label} color="default" />  
              </Box>            */}
                </Box>

                <hr />
                <Box sx={{ margin: ' 19px 0 0 -2px' }}>
                    <div>
                        <Checkbox
                            {...Label}
                            sx={{
                                color: '#FF6300',
                                '&.Mui-checked': {
                                    color: '#FF6300',
                                },
                            }}
                        /> Save to profile
                    </div>

                </Box>
            </AccordionDetails>
        </Accordion>

    )
}

export default AccordionInput