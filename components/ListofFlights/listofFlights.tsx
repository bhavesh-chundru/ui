import { Container } from "@material-ui/core";
import  Box  from "@mui/material/Box";
import  styled  from 'styled-components';
import { BiRupee, BiPlusCircle } from "react-icons/bi";
import Image from 'next/image';
import flightStatusBarColor from '../../public/svg/flightStatusBarColor.svg';
import flightStatusBar from '../../public/svg/flightStatusBar.svg';
import flightIcon from '../../public/svg/flight.svg';
import greyLogo from '../../public/svg/AkasaGreyLogo.svg';
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CheckinBaggage from '../../public/svg/CheckinBaggage.svg';
import CO from '../../public/svg/co2.svg';
import HandBaggage from '../../public/svg/HandBaggage.svg';
import InFlightStreaming from '../../public/svg/Streaming.svg';
import PlugPoint from '../../public/svg/PlugPoint.svg';
import styles from './listofFlights.module.css';
import FareBrand from './FareBrand'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {useState} from 'react';




const Paragraph = styled.p`
    color : #666666;
`
const BoldParagraph = styled.h5`

`
const InlineElement = styled.span`

`
const Para = styled.p`
`

const Icon = styled.span`
position:relative !important ;
right:-11px !important;
`

const ListofFlights = (props:any) => {
const [expanded, setExpanded] = useState();
 
//For accordians to expand and close
const handleChange = (panel, dest) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setTimeout(() => {
      //Focus into visible area of browser
      document.getElementById('destinationsAccordion' + panel).scrollIntoView();
    }, 276);
  }

    const [isShowSelectButton, setIsShowSelectButton] = useState(false);

    //logic for slected button
    const showSelectFunction = (index) =>{
        if(!isShowSelectButton){
            setIsShowSelectButton(true)
        }
        else{
            setIsShowSelectButton(false)
        }    
    }

  return (
    <>
      {props.listOfFlights && props.listOfFlights.length > 0 ? (
        <Container  className={styles.FlightsListContainer} >
      {props.listOfFlights.map((item,index)=>(
          
            <Accordion id={'destinationsAccordion' + index} 
            expanded={expanded === index}
                  onChange={handleChange(index,item)}
                  key={'alldestination' + index} className={styles.accroGap}>
          
      <AccordionSummary>
        <Typography component={'span'} >
      <Box  className={styles.root}>
          {item[0] ?(
            <Box className={styles.LowFare}>
                <Box className={styles.lowfareLogo} ><TrendingDownIcon fontSize='small' /> Lowest Fare</Box>
            </Box>
          ):("")}   
        
        <Box className={styles.subRoot} >
          <Box >
          <BoldParagraph  className={styles.TimePrice} >
          {item.departureTime}
              </BoldParagraph>
              <Paragraph className={styles.OriginTerminal} >
                  {item.originStation}-T1
              </Paragraph>
          </Box>
          <Box>
              <Paragraph className={styles.DurationStops} >
              {item.duration.charAt(0) == 0 ?  item.duration.slice(1) : item.duration}
              </Paragraph>
              <Box className={styles.flightStatusSection} >
                  <InlineElement>
                    <Image src={flightStatusBarColor} />
                  </InlineElement>
                  <InlineElement className={styles.FlightlogoPosition} >
                    <Image src={flightIcon} />
                  </InlineElement>
                  <InlineElement>
                    <Image src={flightStatusBar} />
                  </InlineElement>
              </Box>
              <Paragraph className={styles.DurationStops} >
                  {item.Noofstops} Stops
              </Paragraph>
          </Box>
          <Box>
              <BoldParagraph className={styles.TimePrice} >
                  {item.arrivalTime}
              </BoldParagraph>
              <Paragraph  className={styles.DestinationTerminal} >
                  {item.destinationStation}-T1
              </Paragraph>
          </Box>
          <Box>
          <BoldParagraph className={styles.TimePrice} >
                 {item.displayFare.discountedDisplayFare}
              </BoldParagraph>
              <Paragraph className={styles.AlignLeft}  >
                  <s>{item.displayFare.totalDisplayFare}</s>
              </Paragraph>
          </Box>
        </Box>
        <Box className={styles.subRoot} >
          <Box>
              <Paragraph className={styles.MakeInline}  >
               <Image src={greyLogo} /> {item.flightNumber}&bull;98% On Time <InlineElement className={styles.changeColor} ></InlineElement>
              </Paragraph>
          </Box>
          <Box >
              <InlineElement className={styles.EarnPts}  >
                  Earn 150 Pts
              </InlineElement>
              <InlineElement>
                    <Button variant="contained" type="submit" className={styles.SelectBtn} 
                     onClick={()=>{
                      props.getFare([item.displayFare.discountedDisplayFare, item.arrivalTime, item.departureTime, item.flightNumber, item.originStation, item.destinationStation,"Book Saver"])
                      showSelectFunction
                    }}>
                       Select
                  </Button>
              </InlineElement>
                

          </Box>
        </Box>
        <Box className={styles.offerMessage} >
          <Para className={styles.offerMessagePara} >
              Lowest fare available on other airline is ₹2,800*
          </Para>
      </Box>
      </Box>
      </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <Box className={styles.GreyRectangle}>
              <Icon>
              <Image src={HandBaggage} className={styles.facilities} />
              </Icon>
              <InlineElement>Hand Baggage 7kg</InlineElement> 
              <Icon>
                  <Image src={CheckinBaggage} className={styles.facilities} />  
              </Icon>
              <InlineElement>Checking Baggage 15kg</InlineElement>
              <Icon>
                  <Image src={PlugPoint} className={styles.facilities} />  
              </Icon>
              <InlineElement>Plug Point</InlineElement>
              <Icon>
                  <Image src={InFlightStreaming} className={styles.facilities} /> 
              </Icon>
              <InlineElement>In-Flight Streaming</InlineElement> 
              <Icon>
                  <Image src={CO} className={styles.facilities} />  
              </Icon>
              <InlineElement>193 Kg</InlineElement>
          </Box>
          <Box>
{/* ===========Fare Brand=============================================================================================================================== */}
              <FareBrand  flightFare={[item.saverfares, item.premiumFare,item.luxeFare, item.arrivalTime, item.departureTime,item.flightNumber, item.originStation, item.destinationStation]} allfares={item.totalFares} getFare={props.getFare} index={index}/>
          </Box>
        </Typography>
      </AccordionDetails>
            </Accordion>
        ))}
        </Container>
      ):(
         <div>No Flights Available</div>
      )}
      
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

export default ListofFlights;