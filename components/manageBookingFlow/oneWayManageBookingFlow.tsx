import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Paper, Typography } from "@mui/material";
import { display, style, textAlign } from "@mui/system";
import  Box  from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Dialog from '@mui/material/Dialog';

import DottedLine from '../../public/svg/DottedLine.svg';
import Flight_90 from '../../public/svg/Flight_90.svg';
import Union from '../../public/svg/Union.svg';
import AkasaLogoSmall from '../../public/svg/AkasaLogoSmall.svg';
import TicketIcon from '../../public/svg/TicketIcon.svg';
import CheckinIcon from '../../public/svg/CheckinIcon.svg';
import BoardingPassIcon from '../../public/svg/BoardingPassIcon.svg';
import UpdateIcon from '../../public/svg/UpdateIcon.svg';
import FlightStatusIcon from '../../public/svg/FlightStatusIcon.svg';
import CancelBookingIcon from '../../public/svg/CancelBookingIcon.svg';
import AirlineTicket from '../../public/svg/AirlineTicket.svg';
import CancelationPoliceIcon from '../../public/svg/CancelationPoliceIcon.svg';
import HelthUpdateIcon from '../../public/svg/HelthUpdateIcon.svg';
import SpecialRequirment from '../../public/svg/SpecialRequirment.svg';
import TravelInsuranceIcon from '../../public/svg/TravelInsuranceIcon.svg';
import DigitIcon from '../../public/svg/DigitIcon.svg';
import AkasaPremiumIcon from "../../public/svg/AkasaPremiumIcon.svg";
import AkasaValueIcon from "../../public/svg/AkasaValueIcon.svg";
import MealsIcon from "../../public/svg/MealsIcon.svg";
import CancellationCoverIcon from "../../public/svg/CancellationCoverIcon.svg";
import AkasaFlexIcon from '../../public/svg/AkasaFlexIcon.svg';
import AkasaPremiumIcons from "../../public/svg/AkasaPremiumIcons.svg";
import HorizontalLine from "../../public/svg/HorizontalLine.svg";
import InfoIcon from "../../public/svg/InfoIcon.svg";
import ChatIcon from "../../public/svg/ChatIcon.svg";

import BookingFlighDetails from './BookingFlightDetails'
import  { useState } from "react";
import Image from 'next/image';
import styles from "./oneWayManageBookingFlow.module.css";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

const useStyles = makeStyles({
    btn:{
        color:'#333333',
        width:'100%',
        height:'100%',
        textTransform:'none',
        '&:hover':{
            backgroundColor:'#FFFFFF',
        }
    }
})

function OneWayManageBookingFlow(){
    const classes = useStyles();

    
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <Container>
            <Box className={styles.outerBox}>
                
                    <Paper elevation={1} className={styles.box1}>
                        <Box>
                            <Box> 
                                <Box className={styles.flyBook}>
                                    <Box>
                                       <Box className={styles.flyDet}>
                                            <Typography variant="h3" component='h1' className={styles.flyTime}>
                                                06:00 AM
                                            </Typography>
                                            <Typography variant='h6' component='h6' className={styles.flyDate}>
                                                Thu,18 Feb
                                            </Typography>       
                                        </Box> 
                                    </Box>
                                    <Box>
                                        <Box>
                                            <Typography className={styles.flyMidTim} variant="body1">
                                                4h 40min
                                            </Typography>
                                        </Box>
                                        <Box className={styles.rel}>
                                            <Box>
                                                <Image className={styles.ibar} src={Union} alt="Union"/>
                                            </Box>
                                            <Box className={styles.positionPlain}>
                                                <Image className={styles.iplain} src={Flight_90} alt="Flight_90"/>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box className={styles.flyDet}>
                                                <Typography variant="h3" component='h1' className={styles.flyTime}>
                                                    11:40 AM
                                                </Typography>
                                                <Typography variant='h6' component='h6' className={styles.flyDate}>
                                                    09:30 DEL-T1
                                                </Typography>       
                                            </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={styles.flyRoot}>
                                <Box className={styles.flyRootSt}>
                                    <Box sx={{marginTop:'1rem'}}>
                                        <Typography variant="h3" component='h1' className={styles.flyRootCity}>
                                            Bengaluru
                                        </Typography>
                                    </Box>
                                    {/* not used maxwidth */}
                                    <Box className={styles.flyRootAdd}>
                                        <Typography sx={{color:'#666666',fontSize:'16px',marginTop:'0.25rem'}}>
                                            BLR(T1),Gate 14
                                        </Typography>
                                        <Typography sx={{color:'#666666',fontSize:'16px',marginTop:'0.25rem'}}>
                                            Kempegawda International Airport
                                        </Typography>
                                    </Box>
                                        <Typography variant="body1" className={styles.flyRootStop}>
                                            2 Stops  • BOM,NAG 
                                        </Typography>
                                </Box>
                                <Box className={styles.flyRootDes}>
                                    <Box className={styles.flyRootDCit}>
                                        <Typography variant="h3" component='h1' className={styles.flyRootDtext}>
                                            Delhi
                                        </Typography>
                                    </Box>
                                    <Box className={styles.flyDesAdd}>
                                        <Typography className={styles.flyDesAddt}>
                                            BOM(T1),Gate 5,
                                        </Typography>
                                        <Typography className={styles.flyDesAddt}>
                                            Indira Gandhi International Airport
                                        </Typography>
                                        <Box className={styles.flyNo}>
                                            <Image src={AkasaLogoSmall} alt="AkasaLogoSmall"/>
                                            <span>
                                                AK3947
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>   
                            </Box>
                            <hr className={styles.chr}/>

                            <Box className={styles.pnr}>
                                <Box className={styles.pnrFlex}>
                                    <Typography variant="body1" sx={{color:'#666666',fontSize:'16px'}}>
                                        PNR
                                    </Typography>
                                    <Typography variant="h3" component='h1' sx={{fontSize:'24px',color:'#333333'}}>
                                        XWBUDG
                                    </Typography>
                                </Box>
                                <Box className={styles.pnrFlex2}>
                                    <Typography variant="body1" sx={{color:'#666666',fontSize:'16px'}}>
                                        Booking status
                                    </Typography>
                                    <Typography variant="h3" component='h1' sx={{fontSize:'24px',color:'#333333'}}>
                                        Confirmed
                                    </Typography>
                                </Box>
                            </Box>
                            <hr className={styles.chr}/>
                            {/* Allign to left */}
                            <Box className={styles.flight}>
                                <Button  className={styles.flightTex} onClick={handleClickOpen}>
                                    Flight details
                                </Button>
                            </Box>
                        </Box>
                    </Paper>


                    <Paper elevation={1} className={styles.Box2}>
                        <Typography variant="h3" component='h1' sx={{fontSize:'24px',color:'#333333'}}>
                            Modify Booking
                        </Typography>
                    <Box className={styles.box2Item}>
                        <Box className={styles.row1}>
                            {/* not used maxwidth in mybooking flex */}
                            <Paper elevation={1} className={styles.r1I1}>
                                <Button className={classes.btn}>
                                    <Box className={styles.r1m}>
                                        <Image src={TicketIcon} alt="TicketIcon"/>
                                        <Typography variant="body1">
                                            E-Ticket
                                        </Typography>
                                    </Box>
                                </Button>
                            </Paper>
                            <Paper elevation={1} className={styles.r1I1}>
                                <Button className={classes.btn}>
                                    <Box className={styles.r1m}>
                                        <Image src={CheckinIcon} alt="CheckinIcon"/>
                                        <Typography variant="body1">
                                            Check-in
                                        </Typography>
                                    </Box>
                                </Button>
                            </Paper>
                            <Paper elevation={1} className={styles.r1I1}>
                                <Button className={classes.btn}>
                                    <Box className={styles.r1m}>
                                        <Image src={BoardingPassIcon} alt="BoardingPassIcon"/>
                                        <Typography variant="body1">
                                            Boarding pass
                                        </Typography>
                                    </Box>
                                </Button>
                            </Paper>
                            <Paper elevation={1} className={styles.r1I1}>
                                <Button className={classes.btn}>
                                    <Box className={styles.r1m}>
                                        <Image src={UpdateIcon} alt="UpdateIcon"/>
                                        <Typography variant="body1" sx={{margin:'0'}}>
                                            Update details
                                        </Typography>
                                    </Box>
                                </Button>
                            </Paper>
                        </Box>
                        <Box className={styles.row2}>
                            <Paper elevation={1} className={styles.r2I1}>
                                
                                    <Button className={classes.btn}>
                                        <Box className={styles.svgi} >
                                            <Image src={FlightStatusIcon} alt="FlightStatusIcon"/>
                                            <Typography variant="body1">
                                                Change booking
                                            </Typography>
                                        </Box>
                                    </Button>
                           
                            </Paper>
                            <Paper elevation={1} className={styles.r2I1}>
                            
                                <Button className={classes.btn}>
                                    <Box className={styles.svgi} >
                                        <Image src={CancelBookingIcon} alt="Cancel Bookin Icon"/>
                                        <Typography variant="body1">
                                            Cancel booking
                                        </Typography>
                                    </Box>
                                </Button>
                            
                            </Paper>
                            <Paper elevation={1} className={styles.r2I1}>
                            <Link href="/cancelFlightPage">
                                <Button className={classes.btn}>
                                    <Box className={styles.svgi} >
                                        <Image src={AirlineTicket} alt="Airline Ticket"/>
                                        <Typography variant="body1">
                                            Cancel flight
                                        </Typography>
                                    </Box>
                                </Button>
                            </Link>
                            </Paper>
                            <Paper elevation={1} className={styles.r2I1}>
                                <Button className={classes.btn}>
                                    <Box className={styles.svgi} >
                                        <Image src={CancelationPoliceIcon} alt="CancelationPoliceIcon"/>
                                        <Typography variant="body1">
                                            View cancellation policy
                                        </Typography>
                                    </Box>
                                </Button>
                            </Paper>
                        </Box>



                        <Box className={styles.row3}>
                            <Box>
                                <Paper elevation={1} className={styles.r3I1}>
                                    <Button className={classes.btn}>
                                        <Box>
                                            <Box>
                                                <Image className={styles.svgi} src={HelthUpdateIcon} alt="HelthUpdateIcon"/>
                                            </Box>
                                            <Typography variant="body1">
                                                Update health details 
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Paper>
                            </Box>
                            <Box>
                                <Paper elevation={1} className={styles.r3I1}>
                                    <Button className={classes.btn}>
                                        <Box>
                                            <Box>
                                                <Image className={styles.svgi} src={SpecialRequirment} alt="SpecialRequirment"/>
                                            </Box>
                                            <Typography variant="body1">
                                                Special requests
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                    </Paper>

                    <Box className={styles.travel}>
                        <Typography variant="body1" className={styles.travtext}>
                            Check the latest travel guidelines for Bangalore to Delhi before flying
                        </Typography>
                        <ArrowForwardIosIcon className={styles.travArr}/>
                    </Box>

                    <Box className={styles.box4}>
                        <Box className={styles.box4Flex}>
                            {/* maxwidth not working */}
                            <Box className={styles.inerBox}>
                                <Box className={styles.b4svg}>
                                    <Image src={TravelInsuranceIcon} alt="TravelInsuranceIcon"/>
                                </Box>
                                <Box className={styles.b4tit}>
                                    <Box>
                                        <Typography variant="h3" component='h1' className={styles.peaceMind}>
                                            Fly with a peace of mind
                                        </Typography>
                                    </Box>
                                    {/* gap to work on  */}
                                    <Box className={styles.cancellation}>
                                        <Typography variant="body1" sx={{fontSize:'16px',color:'#333333',width:'28.313rem',height:'1.5rem'}}>
                                            Get covered against flight cancellations and delays    
                                        </Typography> 
                                        
                                        <Typography variant="body1" sx={{color:'#5C0FD9',fontSize:'18px',marginRight:'1rem'}}>
                                            Secure my trip
                                        </Typography>
                        
                                    </Box>
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box className={styles.poweredBY}>
                            <Box sx={{display:'flex',flexDirection:'row'}}>
                                <Typography variant="body1" sx={{fontSize:'14px', color:'#666666',marginRight:'0.749rem'}}>
                                    Powered by 
                                </Typography>
                                <Box>
                                    <Image src={DigitIcon} alt='DigitIcon'/>
                                </Box>
                            </Box>
    
                            <Box>
                                <Typography variant="body1" sx={{fontSize:'16px',marginRight:'24px'}}>
                                    ₹149 per passenger
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h3" component="h1" className={styles.blr}>
                            Add more to your BLR-DEL booking
                        </Typography>
                        <Box className={styles.blrFl1}>
                            <Paper elevation={1} className={styles.blrP1}>
                                <Box className={styles.p1box}>
                                    <Typography variant="body1" className={styles.popular}>
                                        Most Popular
                                    </Typography>
                                    <Box className={styles.blrSvg1}>
                                        <Image src={AkasaPremiumIcon} alt='AkasaPremiumIcon'/>
                                    </Box>
                                    <Typography variant="body1" className={styles.premium}>
                                        Akasa Premium
                                    </Typography>
                                    <Typography variant="body1" className={styles.getPre}>
                                        Get a premium seat, meal, priority check-in and more
                                    </Typography>
                                    <Typography variant="body1" className={styles.nine}>
                                        ₹999 Only
                                    </Typography>
                                </Box>
                            </Paper>
                            
                            <Paper elevation={1} className={styles.blrp2}>
                                <Box className={styles.p2inner}>
                                    <Box>
                                        <Image src={AkasaValueIcon} alt="AkasaValueIcon"/>

                                    </Box>
                                    <Typography variant="body1" className={styles.blrVal}>
                                        Akasa Value
                                    </Typography>
                                    <Typography variant="body1" className={styles.valTex}>
                                        Get a premium seat and complimentary meal
                                    </Typography>
                                    <Typography variant="body1" className={styles.valPri}>
                                        ₹399 Only
                                    </Typography>
                                </Box>
                            </Paper>

                            <Box className={styles.flex2}>
                                <Box className={styles.f2Col}>
                                    <Box>
                                        <Paper elevation={1} className={styles.mealsBox}>
                                            <Box>
                                                <Typography variant="h3" component="h1" sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Select
                                                </Typography>
                                                <Typography variant="h3" component='h1' sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Meals
                                                </Typography>
                                                <Typography variant="body1" sx={{color:'#666666',fontSize:'16px',fontWeight:'400'}}>
                                                    ₹150 onwards
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Image src={MealsIcon} alt="Meals Icon"/>
                                            </Box>
                                        </Paper>
                                    </Box>
                                    <Box>
                                        <Paper elevation={1} className={styles.cancelCover}>
                                            <Box>
                                                <Typography variant="h3" component="h1" sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Cancellation
                                                </Typography>
                                                <Typography variant="h3" component='h1' sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Cover
                                                </Typography>
                                                <Typography variant="body1" sx={{color:'#666666',fontSize:'16px',fontWeight:'400'}}>
                                                    ₹150 onwards
                                                </Typography>
                                            </Box>
                                            <Box className={styles.canceIcon}>
                                                <Image src={CancellationCoverIcon} alt="CancellationCoverIcon"/>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column"}}>
                                    <Box>
                                        <Paper elevation={1} className={styles.akasaFlexIcon}>
                                            <Box>
                                                <Typography variant="h3" component="h1" sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Akasa
                                                </Typography>
                                                <Typography variant="h3" component='h1' sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Flex
                                                </Typography>
                                                <Typography variant="body1" sx={{color:'#666666',fontSize:'16px',fontWeight:'400'}}>
                                                    ₹699 onwards
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Image src={AkasaFlexIcon} alt="Akasa Flex"/>
                                            </Box>
                                        </Paper>
                                    </Box>
                                    <Box>
                                        <Paper elevation={1} className={styles.premiumAkasa2}>
                                            <Box>
                                                <Typography variant="h3" component="h1" sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Akasa
                                                </Typography>
                                                <Typography variant="h3" component='h1' sx={{color:'#333333',fontSize:'24px',fontWeight:"600"}}>
                                                    Premium
                                                </Typography>
                                                <Typography variant="body1" sx={{color:'#666666',fontSize:'16px',fontWeight:'400'}}>
                                                    ₹800 onwards
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Image src={AkasaPremiumIcons} alt="AkasaPremiumIcons"/>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                            <Box className={styles.addBar}>
                                    <Typography className={styles.addBarCon} variant="body1">
                                        All add-ons
                                    </Typography>
                                    <ArrowForwardIosIcon className={styles.addBarIoc}/>
                            </Box> 
                    </Box>
                    {/* Accordion starts */}

                    <Box className={styles.BoxAccordion}>
                        <Accordion className={styles.accMargin}>
                            <AccordionSummary className={styles.accSum} expandIcon={<ExpandMoreIcon/>}>
                                <Typography className={styles.accTit}>
                                    Passenger details
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={styles.accDet}>
                                <hr className={styles.ahr}/>
                                <Box className={styles.accCon}>
                                    <Box>
                                        <Typography className={styles.john} variant='body1'>
                                            John Doe
                                        </Typography>
                                        <Typography className={styles.text} variant='body1'>
                                            1 x Panner Tikka Sandwich
                                        </Typography>
                                        <Typography className={styles.text} variant='body1'>
                                            Seat 1A • Premium window
                                        </Typography>
                                    </Box>
                                    <Box className={styles.aVer}>
                                        <Image src={HorizontalLine} alt="HorizontalLine"/>
                                    </Box>

                                    <Box>
                                        <Typography className={styles.john} variant='body1'>
                                            Mary Doe
                                        </Typography>
                                        <Typography className={styles.text} variant='body1'>
                                            Seat 2A • Window 
                                        </Typography>
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={styles.accMargin}>
                                <AccordionSummary className={styles.accSum} expandIcon={<ExpandMoreIcon/>}>
                                    <Typography className={styles.accTit}>
                                        Payment summary
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <hr className={styles.ahr}/>
                                    <Box>
                                        <Typography className={styles.paytitle}>
                                            Fare breakdown
                                        </Typography>
                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.paycon}>
                                                Adults
                                            </Typography>
                                            <Typography className={styles.paycon}>
                                                2 x ₹2200
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>
                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payDis}>
                                                Promo Code applied(AKASAFRIENDS)
                                            </Typography>
                                            <Typography className={styles.payDis}>
                                                -₹500
                                            </Typography>
                                        </Box>
                                        <Typography className={styles.payEx}>
                                            Extras
                                        </Typography>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.paycon}>
                                                Seats total
                                            </Typography>
                                            <Typography className={styles.paycon}>
                                                ₹1900
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.paycon}>
                                                1 x Panner Tikka Sandawich
                                            </Typography>
                                            <Typography className={styles.paycon}>
                                                ₹200
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.paycon}>
                                                1 x Caesar Salad
                                            </Typography>
                                            <Typography className={styles.paycon}>
                                                ₹200
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Typography className={styles.payTax}>
                                            Taxes & fees
                                        </Typography>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                Air fare charges
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹400
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                Cute charge
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹400
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                RCS provision
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹50
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                Airport security fee
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹236
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                Passenger service fee
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹236
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                User development fee
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹236
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payconT}>
                                                GST for Delhi
                                            </Typography>
                                            <Typography className={styles.payconT}>
                                                ₹500
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Box className={styles.conFlex}>
                                                <Typography className={styles.payconT}>
                                                    Convenience fee
                                                </Typography>
                                                <Image className={styles.infoIcon} src={InfoIcon} alt="InfoIcon"/>
                                            </Box>
                                            <Typography className={styles.payconT}>
                                                ₹200
                                            </Typography>
                                        </Box>
                                        <Image src={DottedLine} alt="Dotted line"/>

                                        <Box className={styles.payFlex}>
                                            <Typography className={styles.payEnd}>
                                                You pay
                                            </Typography>
                                            <Typography className={styles.payEnd}>
                                                ₹8,558
                                            </Typography>
                                        </Box>
                                        <hr className={styles.ahr}/>
                                        <Box className={styles.invoiceButton}>
                                         <Button className={styles.btnDown}>Download invoice</Button>
                                        </Box>
                                    </Box>
                                </AccordionDetails>
                        </Accordion>

                        <Accordion className={styles.accMargin}>
                            <AccordionSummary className={styles.accSum} expandIcon={<ExpandMoreIcon />}>
                                <Typography className={styles.accTit}>
                                    Baggage Check-in
                                </Typography>
                            </AccordionSummary>
                        </Accordion>
                    </Box>
                    {/* Accordion ends */}
                    <Paper className={styles.share}>
                        <Typography className={styles.accTit}>
                            Share itinerary
                        </Typography>
                        <ShareOutlinedIcon className={styles.shareIcon}/>
                    </Paper>
                    <Paper className={styles.needHelp}>
                        <Typography className={styles.accTit1} variant="body1">
                            Need More Help?
                        </Typography>
                        <Box className={styles.needHelpFlex}>
                            <Paper className={styles.needHelpB1} elevation={2}>
                                <Box className={styles.nIcon}>
                                    <Image src={ChatIcon} alt="Chat Icon"/>
                                </Box>
                                <Box>
                                    <Typography>
                                        Chat with us
                                    </Typography>
                                    <Typography>
                                        Happy to help!
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper className={styles.needHelpB1} elevation={2}>
                                <Box className={styles.nIcon}>
                                    <CallOutlinedIcon className={styles.callIcon}/>
                                </Box>
                                <Box>
                                    <Typography>
                                        Call us
                                    </Typography>
                                    <Typography>
                                        2130222180
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper className={styles.needHelpB1} elevation={2}>
                                <Box className={styles.nIcon}>
                                    <HelpOutlineOutlinedIcon className={styles.callIcon}/>
                                </Box>
                                <Box>
                                    <Typography>
                                        FAQs
                                    </Typography>
                                    <Typography>
                                        All travel related queries
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Paper>

            </Box>

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <BookingFlighDetails handleClose={handleClose}/>
      </Dialog>


            <style>
                {`
                .svg-i{
                    margin-top:0.5rem;
                }
                 .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded{
                    min-height:1rem !important;
                 }
                 .css-o4b71y-MuiAccordionSummary-content.Mui-expanded{
                     margin:1rem 0 0.5rem 0;
                 }
                `}
            </style>
        </Container>
    )
}
export default OneWayManageBookingFlow;