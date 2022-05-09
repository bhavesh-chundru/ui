import React, { useState } from 'react'
import styles from "./flightDetailsCompoMult.module.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Dialog, DialogTitle, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from "../../public/svg/CloseIcon.svg";
import Time from "../../public/svg/Time.svg";
import HandBaggage from "../../public/svg/HandBaggage.svg";
import VideoLibrary from "../../public/svg/VideoLibrary.svg";
import LuggageIcon from "../../public/svg/LuggageIcon.svg";
import PlugPoint from "../../public/svg/PlugPoint.svg";
import co2 from "../../public/svg/co2.svg";
import Image from 'next/image';
import AkasaLogoSmall from '../../public/svg/AkasaLogoSmall.svg';
import Flight_90 from "../../public/svg/Flight_90.svg";

const FlightDetailsBlock = styled.div`
  
`
const Paragraph = styled.b`
font-weight: 600;
font-size: 16px;
color: #000000;
line-height: 24px;;
` 

const FlightDetailsCompoRound = () => {
  const [fDetails,setFDetails]=useState(false)
  const handleOpen=()=>{
    setFDetails(true)
  }
  const handleClose=()=>{
    setFDetails(false)
  }

  return (
    <>
      <Box  className={styles.FlightsDetailsBlock}>
        <Box onClick={handleOpen} className={styles.FlightDetails}>
           Flight Details     
        </Box>
        <Dialog open={fDetails} onClose={handleClose}>
          <Box className={styles.box}>
            <DialogTitle>
              <Box className={styles.dialogFlex}>
                <Typography className={styles.flDe}>
                  Flight Details
                </Typography>
                <Box>
                  <Image onClick={handleClose} src={CloseIcon} alt="close Icon"/>
                </Box>
              </Box>
            </DialogTitle>
              <Typography className={styles.dilCon}>
                Multicity • 18-25 Feb, 2022
              </Typography>
            <Accordion className={styles.accordionMar}>
              <AccordionSummary className={styles.accorFlex} expandIcon={<ExpandMoreIcon className={styles.moreIcon}/>}>
                <Typography>
                    1 • BLR-DEL
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accorDetails}>
                <Box className={styles.durationFlex}>
                  <Typography className={styles.flyDue}>
                    Flight duration
                  </Typography>
                  <Typography className={styles.flyDue}>
                    4h 40min • 2 Stops
                  </Typography>
                </Box>
                <Box className={styles.numFlex}>
                  <Image className={styles.akLogo} src={AkasaLogoSmall} alt="AkasaLogoSmall"/>
                  <Typography className={styles.plainNum}>
                    AK3947
                  </Typography>
                </Box>
                <Box className={styles.timeFlex}>
                  <Box>
                    <Typography className={styles.timeTitle}>
                      06:00 AM
                    </Typography>
                    <Typography className={styles.date}>
                      Thu, 18 Feb
                    </Typography>
                  </Box>
                  <Box>
                    <Image src={Flight_90} alt='Flight'/>
                  </Box>
                  <Box className={styles.toTime}>
                    <Typography className={styles.timeTitle}>
                      07:30 AM
                    </Typography>
                    <Typography className={styles.date}>
                      Thu, 18 Feb
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.desAddres}>
                  <Box>
                    <Typography className={styles.cityText}>
                      Bengaluru
                    </Typography>
                    <Typography className={styles.gate}>
                      BLR(T1), Gate 14, 
                    </Typography>
                    <Typography className={styles.airport}>
                      Kempegowda International Airport
                    </Typography>
                  </Box>
                  <Box className={styles.toTime}>
                    <Typography className={styles.cityText}>
                      Mumbai
                    </Typography>
                    <Typography className={styles.gate}>
                      BOM(T1), Gate 5, 
                    </Typography>
                    <Typography className={styles.airport}>
                      Chhatrapati Shivaji Maharaj International
                    </Typography>
                    <Typography className={styles.airport}>
                      Airport
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.durFlex}>
                  <Image src={Time} alt="Time icon"/>
                  <Typography className={styles.durTime}>
                    1h 30min • <span className={styles.orangeDue}>1hr layover in Mumbai </span>
                  </Typography>
                </Box>
                <hr className={styles.hrLine}/>
                <Box>
                  <Box className={styles.shopingFlex}>
                    <Box>
                      <Image className={styles.shoppingIcon} src={HandBaggage} alt="shopping bag"/>
                      <Typography className={styles.HandBag}>
                        Hand Baggage 7 kg
                      </Typography>
                    </Box>
                    <Box>
                      <Image className={styles.shoppingIcon} src={VideoLibrary} alt="VideoLibrary"/>
                      <Typography className={styles.HandBag}>
                        In-flight Streaming
                      </Typography>
                    </Box>
                  </Box>

                  <Box  className={styles.shopingFlex}>
                    <Box>
                        <Image className={styles.shoppingIcon} src={LuggageIcon} alt="LuggageIcon"/>
                        <Typography className={styles.HandBag}>
                          Checkin Baggage 15 kg
                        </Typography>
                      </Box>
                      <Box>
                        <Image className={styles.shoppingIcon} src={PlugPoint} alt="VideoLibrary"/>
                        <Typography className={styles.HandBag}>
                          Plug point
                        </Typography>
                      </Box>
                  </Box>

                  <Box className={styles.co2}>
                    <Image className={styles.shoppingIcon} src={co2} alt="co2"/>
                    <Typography className={styles.HandBag}>
                      193 Kg
                    </Typography>
                  </Box>
                </Box>
                {/* box 2 */}

                <Box className={styles.numFlex}>
                  <Image className={styles.akLogo} src={AkasaLogoSmall} alt="AkasaLogoSmall"/>
                  <Typography className={styles.plainNum}>
                    AK3947
                  </Typography>
                </Box>
                <Box className={styles.timeFlex}>
                  <Box>
                    <Typography className={styles.timeTitle}>
                      08:30 AM
                    </Typography>
                    <Typography className={styles.date}>
                      Thu, 18 Feb
                    </Typography>
                  </Box>
                  <Box>
                    <Image src={Flight_90} alt='Flight'/>
                  </Box>
                  <Box className={styles.toTime}>
                    <Typography className={styles.timeTitle}>
                      10:00 AM
                    </Typography>
                    <Typography className={styles.date}>
                      Thu, 18 Feb
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.desAddres}>
                  <Box>
                    <Typography className={styles.cityText}>
                      Mumbai
                    </Typography>
                    <Typography className={styles.gate}>
                      BOM(T1), Gate 5, 
                    </Typography>
                    <Typography className={styles.airport}>
                      Chhatrapati Shivaji Maharaj International
                    </Typography>
                    <Typography className={styles.airport}>
                      Airport
                    </Typography>
                  </Box>
                  <Box className={styles.toTime}>
                    <Typography className={styles.cityText}>
                      Nagpur
                    </Typography>
                    <Typography className={styles.gate}>
                      NAG(T1), Gate 5, 
                    </Typography>
                    <Typography className={styles.airport}>
                      Dr Babasaheb Ambedkar Nagpur
                    </Typography>
                    <Typography className={styles.airport}>
                      International Airport 
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.durFlex}>
                  <Image src={Time} alt="Time icon"/>
                  <Typography className={styles.durTime}>
                    1h 30min • <span className={styles.orangeDue}>1hr layover in Mumbai </span>
                  </Typography>
                </Box>
                <hr className={styles.hrLine}/>
                <Box>
                  <Box className={styles.shopingFlex}>
                    <Box>
                      <Image className={styles.shoppingIcon} src={HandBaggage} alt="shopping bag"/>
                      <Typography className={styles.HandBag}>
                        Hand Baggage 7 kg
                      </Typography>
                    </Box>
                    <Box>
                      <Image className={styles.shoppingIcon} src={VideoLibrary} alt="VideoLibrary"/>
                      <Typography className={styles.HandBag}>
                        In-flight Streaming
                      </Typography>
                    </Box>
                  </Box>

                  <Box  className={styles.shopingFlex}>
                    <Box>
                        <Image className={styles.shoppingIcon} src={LuggageIcon} alt="LuggageIcon"/>
                        <Typography className={styles.HandBag}>
                          Checkin Baggage 15 kg
                        </Typography>
                      </Box>
                      <Box>
                        <Image className={styles.shoppingIcon} src={PlugPoint} alt="VideoLibrary"/>
                        <Typography className={styles.HandBag}>
                          Plug point
                        </Typography>
                      </Box>
                  </Box>

                  <Box className={styles.co2}>
                    <Image className={styles.shoppingIcon} src={co2} alt="co2"/>
                    <Typography className={styles.HandBag}>
                      193 Kg
                    </Typography>
                  </Box>
                </Box>
                {/* box 3 */}

                <Box className={styles.numFlex}>
                  <Image className={styles.akLogo} src={AkasaLogoSmall} alt="AkasaLogoSmall"/>
                  <Typography className={styles.plainNum}>
                    AK3947
                  </Typography>
                </Box>
                <Box className={styles.timeFlex}>
                  <Box>
                    <Typography className={styles.timeTitle}>
                      10:30 AM
                    </Typography>
                    <Typography className={styles.date}>
                      Thu, 18 Feb
                    </Typography>
                  </Box>
                  <Box>
                    <Image src={Flight_90} alt='Flight'/>
                  </Box>
                  <Box className={styles.toTime}>
                    <Typography className={styles.timeTitle}>
                      11:40 AM
                    </Typography>
                    <Typography className={styles.date}>
                      Thu, 18 Feb
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.desAddres}>
                  <Box>
                    <Typography className={styles.cityText}>
                      Nagpur
                    </Typography>
                    <Typography className={styles.gate}>
                      NAG(T1), Gate 5, 
                    </Typography>
                    <Typography className={styles.airport}>
                      Dr Babasaheb Ambedkar Nagpur
                    </Typography>
                    <Typography className={styles.airport}>
                      International Airport
                    </Typography>
                  </Box>
                  <Box className={styles.toTime}>
                    <Typography className={styles.cityText}>
                      Nagpur
                    </Typography>
                    <Typography className={styles.gate}>
                      NAG(T1), Gate 5, 
                    </Typography>
                    <Typography className={styles.airport}>
                      Dr Babasaheb Ambedkar Nagpur
                    </Typography>
                    <Typography className={styles.airport}>
                      International Airport 
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.durFlex}>
                  <Image src={Time} alt="Time icon"/>
                  <Typography className={styles.durTime}>
                    1h 30min 
                  </Typography>
                </Box>
                <hr className={styles.hrLine}/>
                <Box>
                  <Box className={styles.shopingFlex}>
                    <Box>
                      <Image className={styles.shoppingIcon} src={HandBaggage} alt="shopping bag"/>
                      <Typography className={styles.HandBag}>
                        Hand Baggage 7 kg
                      </Typography>
                    </Box>
                    <Box>
                      <Image className={styles.shoppingIcon} src={VideoLibrary} alt="VideoLibrary"/>
                      <Typography className={styles.HandBag}>
                        In-flight Streaming
                      </Typography>
                    </Box>
                  </Box>

                  <Box  className={styles.shopingFlex}>
                    <Box>
                        <Image className={styles.shoppingIcon} src={LuggageIcon} alt="LuggageIcon"/>
                        <Typography className={styles.HandBag}>
                          Checkin Baggage 15 kg
                        </Typography>
                      </Box>
                      <Box>
                        <Image className={styles.shoppingIcon} src={PlugPoint} alt="VideoLibrary"/>
                        <Typography className={styles.HandBag}>
                          Plug point
                        </Typography>
                      </Box>
                  </Box>

                  <Box className={styles.co2}>
                    <Image className={styles.shoppingIcon} src={co2} alt="co2"/>
                    <Typography className={styles.HandBag}>
                      193 Kg
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordionMar}>
              <AccordionSummary className={styles.accorFlex} expandIcon={<ExpandMoreIcon className={styles.moreIcon}/>}>
                  <Typography>
                    2 • BOM-CCU
                  </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion className={styles.accordionMar}>
              <AccordionSummary className={styles.accorFlex} expandIcon={<ExpandMoreIcon className={styles.moreIcon}/>}>
                  <Typography>
                    3 • CCU-DEL
                  </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary className={styles.accorFlex} expandIcon={<ExpandMoreIcon className={styles.moreIcon}/>}>
                  <Typography>
                    4 • DEL-BOM
                  </Typography>
                </AccordionSummary>
            </Accordion>
          </Box>
        </Dialog>
      </Box>
      <style>
        {`
        .MuiPaper-elevation24 {
          border-radius: 16px 0px 16px 16px;
          max-width: 47.125rem;
          width: 47.125rem;
          height: fit-content;
        }
        .css-bdhsul-MuiTypography-root-MuiDialogTitle-root{
          padding:0;
        }
        `}
      </style>
    </>
  )
}
export default FlightDetailsCompoRound;