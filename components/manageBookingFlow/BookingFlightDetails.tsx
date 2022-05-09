import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import styles from './BookingFlightDetails.module.css';
import styled from 'styled-components';
import Image from 'next/image'
import AkasaGreyLogo from '../../public/svg/AkasaGreyLogo.svg';
import Flight_90 from '../../public/svg/Flight_90.svg';
import Time from '../../public/svg/time.svg';
import HandBaggage from '../../public/svg/HandBaggage.svg';
import LuggageIcon from '../../public/svg/LuggageIcon.svg';
import PlugPoint from '../../public/svg/PlugPoint.svg';
import VideoLibrary from '../../public/svg/VideoLibrary.svg';
import Co2 from '../../public/svg/co2.svg';


const Paragraph =  styled.p
`
`
const Place =  styled.p
`color: #FF6300;
margin: 0rem;
`

const TimeLogo = styled.span`
padding:0.375rem 0rem 0rem 0.25rem;
`
const TimeText = styled.span`
 margin-left:0.188rem;
`


function DialogPage(props:any) {




  return (
    <div>
  
      <div>

        <div>
                <Box className={styles.firstheader} >

                    <Box className={styles.FlightDetails}>
                        Flight details
                    </Box>

                    <Box>
                        <IconButton onClick={props.handleClose} className={styles.crossIcon}>
                             <ClearIcon />
                        </IconButton> 
                    </Box>

                </Box>

                <Box className={styles.oneway}>
                        <Paragraph className={styles.onewayPara}>One way • Bengaluru to Delhi • Thu, 18 Feb, 2022</Paragraph>
                </Box>

                <Box>
                        <Paragraph className={styles.Flightdur}>
                            <Box className={styles.duration}>Flight duration</Box>
                            <Box className={styles.hours} >  4H 40min • 2 Stops </Box> 
                        </Paragraph>
                </Box>

                    <Box className='CardOne'>

                        <Box className={styles.AkasaGreyLogo}>
                            <Image className={styles.Greylogo} src={AkasaGreyLogo} alt='akasalogogrey' />
                            <Paragraph className={styles.AK} >AK3947</Paragraph>
                        </Box>

                        <Box className={styles.Timing}>
                                <Box>
                                    <Box className={styles.flightTime}>
                                        06:00 AM
                                    </Box>
                                    <Box className={styles.flightDay}>
                                        Thu, 18 Feb
                                    </Box>
                                </Box>

                                <Box>
                                    <Image src={Flight_90} alt='smallplane' />
                                </Box>

                                <Box>
                                    <Box className={styles.flightTime}>
                                        07:30 AM 
                                    </Box>
                                    <Box className={styles.flightDay}> 
                                        Thu, 18 Feb
                                    </Box>
                                </Box>
                        </Box>

                        <Box className={styles.from_to}>
                            <Box >
                                <Box className={styles.flightTime}>
                                    Bengaluru 
                                </Box>
                                <Box className={styles.GateNo}>
                                    BLR(TI), Gate 14,
                                </Box>
                                <Box>
                                    Kempegowda           
                                    international Airport    
                                </Box>
                            </Box>
                       
                            <Box className={styles.todestination} >
    
                                <Box className={styles.flightTime}>
                                    Mumbai
                                </Box>
                                <Box className={styles.GateNo}>
                                    BOM(TI), Gate 5,  
                                </Box>
                                <Box>
                                    Chhatrapati Shivaji
                                    Maharaj international <br />
                                    Airport
                                </Box>
                            </Box>
                        </Box>

                        <Box className={styles.layover}>
                            <TimeLogo>
                                <Image src={Time} alt={Time}/>
                            </TimeLogo>

                            <TimeText className={styles.layoverPlace} >
                                1h 30min • <Place> 1hr layover in Mumbai </Place>
                            </TimeText>
                        </Box>
                        
                        <hr className={styles.hr}/>

                        <Box className={styles.extra} >
                            <Box className={styles.HandbagStreming}>
                                    <Box >
                                        <Image src={HandBaggage} alt={HandBaggage} /> Hand Baggage 7 kg 
                                    </Box>

                                    <Box className={styles.extraAlign}>
                                        <Image src={VideoLibrary} alt='VideoLibrary' /> In-flight Steaming  
                                    </Box>

                            </Box>
                            <Box className={styles.ChecinPlug}>
                                    <Box className={styles.extraAlign}>
                                        <Image src={LuggageIcon} alt='LuggageIcon' /> Checkin Baggage 15 kg
                                    </Box>

                                    <Box className={styles.extraAlign}>
                                        <Image src={PlugPoint} alt={PlugPoint} /> Plug point
                                    </Box>

                            </Box>
                                    <Box className={styles.Co2}>
                                        <Image src={Co2} alt={Co2} /> 193 Kg  
                                    </Box>   
                        </Box>

                    </Box>

                    <br />

                    <Box className='CardOne'>

                        <Box className={styles.AkasaGreyLogo}>
                            <Image className={styles.Greylogo} src={AkasaGreyLogo} alt='akasalogogrey' />
                            <Paragraph className={styles.AK} >AK3947</Paragraph>
                        </Box>

                        <Box className={styles.Timing}>
                                <Box>
                                    <Box className={styles.flightTime}>
                                        08:30 AM
                                    </Box>
                                    <Box className={styles.flightDay}>
                                        Thu, 18 Feb
                                    </Box>
                                </Box>

                                <Box>
                                    <Image src={Flight_90} alt='smallplane' />
                                </Box>

                                <Box>
                                    <Box className={styles.flightTime}>
                                        10:00 AM 
                                    </Box>
                                    <Box className={styles.flightDay}> 
                                        Thu, 18 Feb
                                    </Box>
                                </Box>
                        </Box>

                        <Box className={styles.from_to}>
                            <Box >
                                <Box className={styles.flightTime}>
                                    Mumbai 
                                </Box>
                                <Box className={styles.GateNo}>
                                    BOM(TI), Gate 5,
                                </Box>
                                <Box>
                                    Chhatrapati Shivaji
                                    Maharaj international <br />
                                    Airport    
                                </Box>
                            </Box>
                       
                            <Box className={styles.todestination} >
    
                                <Box className={styles.flightTime}>
                                    Nagpur
                                </Box>
                                <Box className={styles.GateNo}>
                                    NAG(TI), Gate 5,  
                                </Box>
                                <Box>
                                    Dr Babasaheb Ambedkar Nagpur <br />
                                    international Airport
                                </Box>
                            </Box>
                        </Box>

                        <Box className={styles.layover}>
                            <TimeLogo>
                                <Image src={Time} alt={Time}/>
                            </TimeLogo>

                            <TimeText className={styles.layoverPlace} >
                                1h 30min • <Place> 1hr layover in Mumbai </Place>
                            </TimeText>
                        </Box>
                        
                        <hr className={styles.hr}  />

                        <Box className={styles.extra} >
                            <Box className={styles.HandbagStreming}>
                                    <Box>
                                        <Image src={HandBaggage} alt={HandBaggage} /> Hand Baggage 7 kg 
                                    </Box>

                                    <Box className={styles.extraAlign}>
                                        <Image src={VideoLibrary} alt='VideoLibrary' /> In-flight Steaming  
                                    </Box>
                            </Box>

                            <Box className={styles.ChecinPlug}>
                                    <Box className={styles.extraAlign}>
                                        <Image src={LuggageIcon} alt='LuggageIcon' /> Checkin Baggage 15 kg
                                    </Box>

                                    <Box className={styles.extraAlign}>
                                        <Image src={PlugPoint} alt="Plug point" /> Plug point
                                    </Box>

                            </Box>
                                    <Box className={styles.Co2}>
                                        <Image src={Co2} alt='co2' /> 193 Kg  
                                    </Box>   
                        </Box>

                    </Box>
                    
                    <br />

                    <Box className='CardOne'>

                        <Box className={styles.AkasaGreyLogo}>
                            <Image className={styles.Greylogo} src={AkasaGreyLogo} alt='akasalogogrey' />
                            <Paragraph className={styles.AK} >AK3947</Paragraph>
                        </Box>

                        <Box className={styles.Timing}>
                                <Box>
                                    <Box className={styles.flightTime}>
                                        10:30 AM
                                    </Box>
                                    <Box className={styles.flightDay}>
                                        Thu, 18 Feb
                                    </Box>
                                </Box>

                                <Box>
                                    <Image src={Flight_90} alt='smallplane' />
                                </Box>

                                <Box>
                                    <Box className={styles.flightTime}>
                                        11:40 AM 
                                    </Box>
                                    <Box className={styles.flightDay}> 
                                        Thu, 18 Feb
                                    </Box>
                                </Box>
                        </Box>
                        
                        <Box className={styles.from_to}>
                            <Box >
                                <Box className={styles.flightTime}>
                                    Nagpur 
                                </Box>
                                <Box className={styles.GateNo}>
                                    NAG(TI), Gate 5,
                                </Box>
                                <Box>
                                    Dr Babasaheb Ambedkar Nagpur <br />
                                    international Airport   
                                </Box>
                            </Box>
                       
                            <Box className={styles.todestination} >
    
                                <Box className={styles.flightTime}>
                                    Delhi
                                </Box>
                                <Box className={styles.GateNo}>
                                    DEL(TI), Gate 5,  
                                </Box>
                                <Box>
                                    Indira Gandhi International Airport
                                </Box>
                            </Box>
                        </Box>

                        <Box className={styles.layover}>
                            <TimeLogo>
                                <Image src={Time} alt='time'/>
                            </TimeLogo>

                            <TimeText className={styles.layoverPlace} >
                              1h 30min • <Place> 1hr layover in Mumbai </Place>
                            </TimeText>
                        </Box>
                        
                        <hr className={styles.hr}  />

                        <Box className={styles.extra} >
                            <Box className={styles.HandbagStreming}>
                                    <Box>
                                        <Image src={HandBaggage} alt={HandBaggage} /> Hand Baggage 7 kg 
                                    </Box>

                                    <Box className={styles.extraAlign}>
                                        <Image src={VideoLibrary} alt='VideoLibrary' /> In-flight Steaming  
                                    </Box>
                            </Box>
                        
                            <Box className={styles.ChecinPlug}>
                                    <Box className={styles.extraAlign}>
                                        <Image src={LuggageIcon} alt='Luggage icon' /> Checkin Baggage 15 kg
                                    </Box>

                                    <Box className={styles.extraAlign}>
                                        <Image src={PlugPoint} alt='plug point' /> Plug point
                                    </Box>       
                            </Box>
                                    <Box className={styles.Co2}>
                                        <Image src={Co2} alt='co2' /> 193 Kg  
                                    </Box> 
                            </Box>
                    </Box>
                    <br />
        </div>
      </div>

      <style>
        {
            `.MuiDialog-paperWidthSm {
                max-width: 47.125rem;
                height: 77.625rem;
            }
            .MuiDialog-paper{
                margin:0;
                border-radius: 1rem 0rem 1rem 1rem;
            }
           `
        }
    </style>
    </div>
  );
}

export default DialogPage;
