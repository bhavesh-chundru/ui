import {useState} from 'react';
import { Container } from "@material-ui/core";
import  Box  from "@mui/material/Box";
import  styled  from 'styled-components';
// import {makeStyles} from '@material-ui/core';
import { BiRupee, BiPlusCircle } from "react-icons/bi";
import * as mock from '../../mock/listofFlights';
import Image from 'next/image';
import flightStatusBarColor from '../../public/svg/flightStatusBarColor.svg';
import flightStatusBar from '../../public/svg/flightStatusBar.svg';
import roundTripFlightLogo from '../../public/svg/roundTripFlightLogo.svg';
import AkasaGreyLogo from '../../public/svg/AkasaGreyLogo.svg';
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CheckinBaggage from '../../public/svg/CheckinBaggage.svg';
import CO2 from '../../public/svg/co2.svg';
import HandBaggage from '../../public/svg/HandBaggage.svg';
import Streaming from '../../public/svg/Streaming.svg';
import PlugPoint from '../../public/svg/PlugPoint.svg';
import styles from './listofFlights.module.css';
import FareBrand from './FareBrand'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import RightArrow from '../../public/svg/RightArrow.svg';



const Paragraph = styled.p`
    color : #666666;
`
const BoldParagraph = styled.h5`

`
const InlineElement = styled.span`

`
const Para = styled.p`
`
const InstructionPara =  styled.p``
const Icon = styled.span`
    position: relative !important;
    right:-11px !important;
`
const Trip = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 24px;
position:relative;
left: 24px;
`
const Facilities = styled.div`
width: 33%;
display: flex;
gap: 8%;
`

const RoundTripListofFlights = (props) => {


const [expanded, setExpanded] = useState();

const handleChange = (flight) => (event, isExpanded) => {
  setExpanded(isExpanded ? flight : false);
};


// const obj = Object.values(mock.data[0].list_off_flights[0])

// const getFare = (...flightdetail:any) => () => {
//     setflightfare(flightdetail)
   
//   };

//   const [id,dtime, atime, flightno, hours, price, earn_points] = flightfare

  return (
    <>
      <Trip>
        {props.origin} <Image src={RightArrow} alt='Right Arrow' /> {props.destination}
      </Trip>
      <Container className={styles.FlightsListContainer} style={{display:"flex" , flexDirection:'column' , gap:'12px' }} >
      <Accordion expanded={expanded === 'flight1'} onChange={handleChange('flight1')}>
        <AccordionSummary
        >
          <Typography component={'span'} >
        <Box  className={styles.root}>
          <Box className={styles.LowFare}>
              <Box className={styles.lowfareLogo} ><TrendingDownIcon fontSize='small' /> Lowest Fare</Box>
          </Box>
          <Box className={styles.subRoot} >
            <Box >
            <BoldParagraph  className={styles.TimePrice} >
            12:30 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'start' , position:'relative' , left:'6px' }} className={styles.ODTerminal} >
                    BLR-T1
                </Paragraph>
            </Box>
            <Box>
                <Paragraph className={styles.DurationStops} >
                    4h 40min
                </Paragraph>
                <Box className={styles.flightStatusSection} >
                    <InlineElement>
                      <Image src={flightStatusBarColor} width='61px' />
                    </InlineElement>
                    <InlineElement className={styles.FlightlogoPosition} >
                      <Image src={roundTripFlightLogo} />
                    </InlineElement>
                    <InlineElement>
                      <Image src={flightStatusBar} width='61px' />
                    </InlineElement>
                </Box>
                <Paragraph className={styles.DurationStops} >
                    3 Stops
                </Paragraph>
            </Box>
            <Box>
                <BoldParagraph className={styles.TimePrice} >
                    02:55 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'end' }} className={styles.ODTerminal} >
                    DEL-T1
                </Paragraph>
            </Box>
            <Box>
            <BoldParagraph className={styles.TimePrice} >
                   &#8377;2,200
                </BoldParagraph>
                <Paragraph className={styles.AlignLeft} style={{position:'relative' , right:'2px'}} >
                    <s>&#8377;2,500</s>
                </Paragraph>
            </Box>
          </Box>
          <Box className={styles.subRoot} style={{alignItems: 'baseline',position: 'relative',top: '-8px'}} >
            <Box>
                <Paragraph className={styles.MakeInline}  >
                 <Image src={AkasaGreyLogo} /> Ak3947<b > • </b>98% On Time <InlineElement className={styles.changeColor} ><b > • </b>1 seat left</InlineElement>
                </Paragraph>
            </Box>
            <Box >
                <InlineElement className={styles.changeColor} style={{marginInline:'8px'}} >
                    Earn 150 Pts
                </InlineElement>
                <InlineElement>
                <Button variant="contained" type="submit" className={styles.SelectBtn} >
            Select
            </Button>
                </InlineElement>
            </Box>
          </Box>
          <Box className={styles.offerMessage} >
            <Para className={styles.offerMessagePara} >
              {props.offerMessage}
            </Para>
        </Box>
        </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Box className={styles.GreyRectangle}>
              <Facilities>
                <Icon>
                <Image src={HandBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Hand Baggage 7kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CheckinBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Checking Baggage 15kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={PlugPoint} className={styles.facilities} />  
                </Icon>
                <InlineElement>Plug Point</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={Streaming} className={styles.facilities} />  
                </Icon>
                <InlineElement>In-Flight Streaming</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CO2} className={styles.facilities} /> 
                </Icon>
                <InlineElement>193 Kg</InlineElement> 
                </Facilities>
            </Box>
            <Box>
                <FareBrand />
            </Box>
          </Typography>
        </AccordionDetails>
        </Accordion>
    
        <Accordion expanded={expanded === 'flight2'} onChange={handleChange('flight2')}>
        <AccordionSummary
        >
          <Typography component={'span'} >
        <Box  className={styles.root}>
    
          <Box className={styles.subRoot} >
            <Box >
            <BoldParagraph  className={styles.TimePrice} >
            12:30 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'start' , position:'relative' , left:'6px' }} className={styles.ODTerminal} >
                    BLR-T1
                </Paragraph>
            </Box>
            <Box>
                <Paragraph className={styles.DurationStops} >
                    4h 40min
                </Paragraph>
                <Box className={styles.flightStatusSection} >
                    <InlineElement>
                      <Image src={flightStatusBarColor} width='61px' />
                    </InlineElement>
                    <InlineElement className={styles.FlightlogoPosition} >
                      <Image src={roundTripFlightLogo} />
                    </InlineElement>
                    <InlineElement>
                      <Image src={flightStatusBar} width='61px' />
                    </InlineElement>
                </Box>
                <Paragraph className={styles.DurationStops} >
                    3 Stops
                </Paragraph>
            </Box>
            <Box>
                <BoldParagraph className={styles.TimePrice} >
                    02:55 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'end' }} className={styles.ODTerminal} >
                    DEL-T1
                </Paragraph>
            </Box>
            <Box>
            <BoldParagraph className={styles.TimePrice} >
                   &#8377;2,200
                </BoldParagraph>
                <Paragraph className={styles.AlignLeft} style={{position:'relative' , right:'2px'}} >
                    <s>&#8377;2,500</s>
                </Paragraph>
            </Box>
          </Box>
          <Box className={styles.subRoot} style={{alignItems: 'baseline',position: 'relative',top: '-8px'}} >
            <Box>
                <Paragraph className={styles.MakeInline}  >
                 <Image src={AkasaGreyLogo} /> Ak3947<b > • </b>98% On Time <InlineElement className={styles.changeColor} ><b > • </b>1 seat left</InlineElement>
                </Paragraph>
            </Box>
            <Box >
                <InlineElement className={styles.changeColor} style={{marginInline:'8px'}} >
                    Earn 150 Pts
                </InlineElement>
                <InlineElement>
                <Button variant="contained" type="submit" className={styles.SelectBtn} >
            Select
            </Button>
                </InlineElement>
            </Box>
          </Box>
        </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
          <Box className={styles.GreyRectangle}>
              <Facilities>
                <Icon>
                <Image src={HandBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Hand Baggage 7kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CheckinBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Checking Baggage 15kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={PlugPoint} className={styles.facilities} />  
                </Icon>
                <InlineElement>Plug Point</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={Streaming} className={styles.facilities} />  
                </Icon>
                <InlineElement>In-Flight Streaming</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CO2} className={styles.facilities} /> 
                </Icon>
                <InlineElement>193 Kg</InlineElement> 
                </Facilities>
            </Box>
            <Box>
                <FareBrand />
            </Box>
          </Typography>
        </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'flight3'} onChange={handleChange('flight3')}>
        <AccordionSummary
        >
          <Typography component={'span'} >
        <Box  className={styles.root}>
    
          <Box className={styles.subRoot} >
            <Box >
            <BoldParagraph  className={styles.TimePrice} >
            12:30 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'start' , position:'relative' , left:'6px' }} className={styles.ODTerminal} >
                    BLR-T1
                </Paragraph>
            </Box>
            <Box>
                <Paragraph className={styles.DurationStops} >
                    4h 40min
                </Paragraph>
                <Box className={styles.flightStatusSection} >
                    <InlineElement>
                      <Image src={flightStatusBarColor} width='61px' />
                    </InlineElement>
                    <InlineElement className={styles.FlightlogoPosition} >
                      <Image src={roundTripFlightLogo} />
                    </InlineElement>
                    <InlineElement>
                      <Image src={flightStatusBar} width='61px' />
                    </InlineElement>
                </Box>
                <Paragraph className={styles.DurationStops} >
                    3 Stops
                </Paragraph>
            </Box>
            <Box>
                <BoldParagraph className={styles.TimePrice} >
                    02:55 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'end' }} className={styles.ODTerminal} >
                    DEL-T1
                </Paragraph>
            </Box>
            <Box>
            <BoldParagraph className={styles.TimePrice} >
                   &#8377;2,200
                </BoldParagraph>
                <Paragraph className={styles.AlignLeft} style={{position:'relative' , right:'2px'}} >
                    <s>&#8377;2,500</s>
                </Paragraph>
            </Box>
          </Box>
          <Box className={styles.subRoot} style={{alignItems: 'baseline',position: 'relative',top: '-8px'}} >
            <Box>
                <Paragraph className={styles.MakeInline}  >
                 <Image src={AkasaGreyLogo} /> Ak3947<b > • </b>98% On Time <InlineElement className={styles.changeColor} ><b > • </b>1 seat left</InlineElement>
                </Paragraph>
            </Box>
            <Box >
                <InlineElement className={styles.changeColor} style={{marginInline:'8px'}} >
                    Earn 150 Pts
                </InlineElement>
                <InlineElement>
                <Button variant="contained" type="submit" className={styles.SelectBtn} >
            Select
            </Button>
                </InlineElement>
            </Box>
          </Box>
        </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
          <Box className={styles.GreyRectangle}>
              <Facilities>
                <Icon>
                <Image src={HandBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Hand Baggage 7kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CheckinBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Checking Baggage 15kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={PlugPoint} className={styles.facilities} />  
                </Icon>
                <InlineElement>Plug Point</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={Streaming} className={styles.facilities} />  
                </Icon>
                <InlineElement>In-Flight Streaming</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CO2} className={styles.facilities} /> 
                </Icon>
                <InlineElement>193 Kg</InlineElement> 
                </Facilities>
            </Box>
            <Box>
                <FareBrand/>
            </Box>
          </Typography>
        </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'flight4'} onChange={handleChange('flight4')}>
        <AccordionSummary
        >
           <Typography component={'span'} >
        <Box  className={styles.root}>
    
          <Box className={styles.subRoot} >
            <Box >
            <BoldParagraph  className={styles.TimePrice} >
            12:30 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'start' , position:'relative' , left:'6px' }} className={styles.ODTerminal} >
                    BLR-T1
                </Paragraph>
            </Box>
            <Box>
                <Paragraph className={styles.DurationStops} >
                    4h 40min
                </Paragraph>
                <Box className={styles.flightStatusSection} >
                    <InlineElement>
                      <Image src={flightStatusBarColor} width='61px' />
                    </InlineElement>
                    <InlineElement className={styles.FlightlogoPosition} >
                      <Image src={roundTripFlightLogo} />
                    </InlineElement>
                    <InlineElement>
                      <Image src={flightStatusBar} width='61px' />
                    </InlineElement>
                </Box>
                <Paragraph className={styles.DurationStops} >
                    3 Stops
                </Paragraph>
            </Box>
            <Box>
                <BoldParagraph className={styles.TimePrice} >
                    02:55 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'end' }} className={styles.ODTerminal} >
                    DEL-T1
                </Paragraph>
            </Box>
            <Box>
            <BoldParagraph className={styles.TimePrice} >
                   &#8377;2,200
                </BoldParagraph>
                <Paragraph className={styles.AlignLeft} style={{position:'relative' , right:'2px'}} >
                    <s>&#8377;2,500</s>
                </Paragraph>
            </Box>
          </Box>
          <Box className={styles.subRoot} style={{alignItems: 'baseline',position: 'relative',top: '-8px'}} >
            <Box>
                <Paragraph className={styles.MakeInline}  >
                 <Image src={AkasaGreyLogo} /> Ak3947<b > • </b>98% On Time <InlineElement className={styles.changeColor} ><b > • </b>1 seat left</InlineElement>
                </Paragraph>
            </Box>
            <Box >
                <InlineElement className={styles.changeColor} style={{marginInline:'8px'}} >
                    Earn 150 Pts
                </InlineElement>
                <InlineElement>
                <Button variant="contained" type="submit" className={styles.SelectBtn} >
            Select
            </Button>
                </InlineElement>
            </Box>
          </Box>
        </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
          <Box className={styles.GreyRectangle}>
              <Facilities>
                <Icon>
                <Image src={HandBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Hand Baggage 7kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CheckinBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Checking Baggage 15kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={PlugPoint} className={styles.facilities} />  
                </Icon>
                <InlineElement>Plug Point</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={Streaming} className={styles.facilities} />  
                </Icon>
                <InlineElement>In-Flight Streaming</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CO2} className={styles.facilities} /> 
                </Icon>
                <InlineElement>193 Kg</InlineElement> 
                </Facilities>
            </Box>
            <Box>
            <FareBrand/>
            </Box>
          </Typography>
        </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'flight5'} onChange={handleChange('flight5')}>
        <AccordionSummary
        >
           <Typography component={'span'} >
        <Box  className={styles.root}>
    
          <Box className={styles.subRoot} >
            <Box >
            <BoldParagraph  className={styles.TimePrice} >
            12:30 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'start' , position:'relative' , left:'6px' }} className={styles.ODTerminal} >
                    BLR-T1
                </Paragraph>
            </Box>
            <Box>
                <Paragraph className={styles.DurationStops} >
                    4h 40min
                </Paragraph>
                <Box className={styles.flightStatusSection} >
                    <InlineElement>
                      <Image src={flightStatusBarColor} width='61px' />
                    </InlineElement>
                    <InlineElement className={styles.FlightlogoPosition} >
                      <Image src={roundTripFlightLogo} />
                    </InlineElement>
                    <InlineElement>
                      <Image src={flightStatusBar} width='61px' />
                    </InlineElement>
                </Box>
                <Paragraph className={styles.DurationStops} >
                    3 Stops
                </Paragraph>
            </Box>
            <Box>
                <BoldParagraph className={styles.TimePrice} >
                    02:55 PM
                </BoldParagraph>
                <Paragraph style={{textAlign:'end' }} className={styles.ODTerminal} >
                    DEL-T1
                </Paragraph>
            </Box>
            <Box>
            <BoldParagraph className={styles.TimePrice} >
                   &#8377;2,200
                </BoldParagraph>
                <Paragraph className={styles.AlignLeft} style={{position:'relative' , right:'2px'}} >
                    <s>&#8377;2,500</s>
                </Paragraph>
            </Box>
          </Box>
          <Box className={styles.subRoot} style={{alignItems: 'baseline',position: 'relative',top: '-8px'}} >
            <Box>
                <Paragraph className={styles.MakeInline}  >
                 <Image src={AkasaGreyLogo} /> Ak3947<b > • </b>98% On Time <InlineElement className={styles.changeColor} ><b > • </b>1 seat left</InlineElement>
                </Paragraph>
            </Box>
            <Box >
                <InlineElement className={styles.changeColor} style={{marginInline:'8px'}} >
                    Earn 150 Pts
                </InlineElement>
                <InlineElement>
                <Button variant="contained" type="submit" className={styles.SelectBtn} >
            Select
            </Button>
                </InlineElement>
            </Box>
          </Box>
        </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Box className={styles.GreyRectangle}>
                <Facilities>
                <Icon>
                <Image src={HandBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Hand Baggage 7kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={CheckinBaggage} className={styles.facilities} />  
                </Icon>
                <InlineElement>Checking Baggage 15kg</InlineElement>
                </Facilities>
                <Facilities>
                <Icon>
                    <Image src={PlugPoint} className={styles.facilities} />  
                </Icon>
                <InlineElement>Plug Point</InlineElement> <br/>
                </Facilities>
                 <Facilities>
                 <Icon>
                    <Image src={Streaming} className={styles.facilities} />  
                </Icon>
                <InlineElement>In-Flight Streaming</InlineElement>
                 </Facilities>
               <Facilities>
               <Icon>
                    <Image src={CO2} className={styles.facilities} /> 
                </Icon>
                <InlineElement>193 Kg</InlineElement> 
               </Facilities>
            </Box>
            <Box>
            <FareBrand/>
            </Box>
          </Typography>
        </AccordionDetails>
        </Accordion>
      </Container>
      <style>
          {`
          .css-ahj2mt-MuiTypography-root{
            width:-webkit-fill-available;
        }
        .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root{
            padding:0;
        }
        .css-o4b71y-MuiAccordionSummary-content{
            margin:0;
        }
        .css-15v22id-MuiAccordionDetails-root{
            padding:0;
        }
        .css-o4b71y-MuiAccordionSummary-content.Mui-expanded{
            margin:0;
                    }
                    
            element.style {
            }
            <style>
            .MuiBox-root-13 {
            }
            .ListofFlights_GreyRectangle__T_0LK {
                width: 100%;
                height: 49px;
                background-color: #F5F5F5;
            }
            *, *::before, *::after {
                box-sizing: border-box;
            }
            user agent stylesheet
            div {
                display: block;
            }

          `}
      </style>
    </>
  );
};

export default RoundTripListofFlights;
