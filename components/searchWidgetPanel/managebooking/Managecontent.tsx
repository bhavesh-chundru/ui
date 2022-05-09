
import {useState} from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styled from "styled-components";
import {makeStyles} from '@material-ui/core';
// import * as mock from '../../mock/listofFlights';
import Image from 'next/image';
  
import button1 from '../../../public/images/button1.png'
  
import button2 from '../../../public/images/button2.png'
import button3 from '../../../public/images/button3.png'
import button4 from '../../../public/images/button4.png'
// import flightStatusBarColor from '../../../public/images/RectangleColored.png';
// import flightStatusBar from '../../../public/images/Rectangle.png';
import flightIcon from '../../../public/images/Vector.png';
import Dot from '../../../public/images/Ellipse.png';
import greyLogo from '../../../public/images/akasalogogrey.png';
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Stack from "@mui/material/Stack";

   
const StyledButton = styled(Button)`
  &:hover {
    background: green;
  }
`



const useStyles = makeStyles({
  root:{
      width: "92%", 
      maxHeight: "100%",
      background: "#FFFFFF",
       border: "1px solid #E1E1DF",
      borderRadius: "4px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      // fontFamily: 'Poppins !important',
      fontStyle: 'normal',
      marginTop:'30px',
      marginLeft:'47px'
  },
  subRoot : {
      display:'flex', 
      flexDirection:'row' ,
      justifyContent:'space-between',
      marginInline:'10px',
      marginTop:'5px',
      textAlign:'center',
  },
  ODTerminal: {
      fontSize:'16px',
      fontWeight:500
  } ,
  TimePrice: {
      fontSize:'24px',
      fontWeight:500,
  },
  DurationStops:{
      fontSize:'14px',
      fontWeight:500
  },
  logoPosition:{
      margin:'-7px 0px'
  },
  MakeInline :{
      display:'inline-block',
      fontweight:'500'
  },
  changeColor: {
      color :'#FF6300'
  },
  SelectBtn : {
      color:"white" ,
      backgroundColor: "#FF6300", 
      borderRadius: '8px 0px 8px 8px',  
      textTransform:"none", 
      Width:'98px',
      Height: '40px',
      fontSize:'16px',
      fontWeight:600,
      
      "&:hover":{
          color:"white" ,
      backgroundColor: "#FF6300", 
      borderRadius: '8px 0px 8px 8px',  
      textTransform:"none", 
      Width:'98px',
      Height: '40px',
      fontSize:'16px',
      fontWeight:'600',
      }

  },
  SelectedBtn : {
      color:"#333333" ,
      backgroundColor: "#FFFFFF", 
      border:'1px solid #333333',
      borderRadius: '8px 0px 8px 8px',  
      textTransform:"none", 
      Width:'98px',
      Height: '40px',
      fontSize:'16px',
      fontWeight:600, 

  },
  hide:{
    visibility:'hidden',
  },
  offerMessage:{
    
     position:"relative",
     left:"46px",
    height:'37px',
    backgroundColor:'#FFDFCC',
    width:'92%',
    padding:'8px 16px',
},
offerMessagePara:{
  display: 'flex',
    justifyContent: 'space-around',
    fontSize:'14px',
    fontWeight:500,
    color:'#333333'
},
Mainbutton:{
  display:'flex',
  marginTop: "49px",
  marginLeft: "47px",
  gap: "30px",
  height:"100px",


},
Buttonone:{

  height: "110px",
  width: "120px",
  borderRadius: "5px",
  background:"#F5F5F5",
  fontSize:"14px",
  display:"block",
  justifyContent:"center",
  alignItems:"center",

  backgroundColor:"rgb(255, 99, 0)"
  

},
Buttontwo:{

  height: "110px",
  width: "120px",
  borderRadius: "5px",
  background:"#F5F5F5",
  fontSize:"14px",
  backgroundColor:"rgb(255, 99, 0)",


},
Buttonthree:{

  height: "110px",
  width: "120px",
  borderRadius: "5px",
  background:"#F5F5F5",
  fontSize:"14px",
  backgroundColor:"rgb(255, 99, 0)"
},
Buttonfour:{

  height: "110px",
  width: "120px",
  borderRadius: "5px",
  background:"#F5F5F5",
  fontSize:"14px",
  backgroundColor:"rgb(255, 99, 0)"
},





})


function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const Managecontent = () => {
  const classes = useStyles()

  const Paragraph = styled.p`
      color : #666666;
  `
  const BoldParagraph = styled.h4`
  
  `
  const InlineElement = styled.span`
  
  `
  

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: any) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <>
      <div style={{ margin: "3% 0" }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            // position: 'relative',
            margin: "auto",
            width: "100%",
            maxHeight: "100%",
            left: "120px",
            // blend :'Pass through',
            border: "1.5px solid grey",
            borderRadius: "16px 0px 16px 16px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1);",
          }}
        >
          <AppBar
            position="static"
            color="default"
            style={{ borderRadius: "16px 0 0 0" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab
                style={{ borderRadius: "8px 0px 8px 8px" }}
                label="Manage Booking"
                {...a11yProps(0)}
              />
            </Tabs>

            {/* --------new line  */}
            <Box
              sx={{
            
                height: 1000,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
               <Box 
               style={{display: "flex",
                justifyContent: "space-around",
                position: "relative",
                left: "28px"}}
            >
                <Box
                style={{ position: "relative",
                  left: "-209px",
                  top: "13px"}}
                >
                  <Paragraph> PNR/Booking Reference</Paragraph>
                    <Stack >
                    <h4>QI52PY</h4>
                    {/* <StyledButton className="Button" variant="contained">Confirmed</StyledButton> */}
                  </Stack>
                </Box>
                <Box style={{    position: "relative", left: "-517px",
    top: " 15px"}}>
                     <Paragraph> Payment Status</Paragraph>
               
                    <h4>Complete</h4>

                </Box>
              </Box>
  
        <Box  className={classes.root} >
          <Box className={classes.subRoot} >
            <Box >
            <BoldParagraph className={classes.hide} >
                    Bengaluru
                </BoldParagraph>
                <BoldParagraph className={classes.TimePrice} >
                Bengaluru
                </BoldParagraph>
                <BoldParagraph className={classes.ODTerminal} >
                12:30 PM
                </BoldParagraph>
                <Paragraph>
                Sat, 18 Feb
                </Paragraph>
            </Box>
            <Box>
                <Paragraph className={classes.DurationStops} >
                    4h 40min
                </Paragraph>
                <InlineElement>
                <InlineElement>
                    {/* <img src={flightStatusBarColor} /> */}
                </InlineElement>
                <InlineElement> <Image src={Dot} /> </InlineElement>
                <InlineElement >
                <Image src={flightIcon} />
                </InlineElement>
                <InlineElement> <Image src={Dot} /> </InlineElement>
                <InlineElement>
                {/* <img src={flightStatusBar} /> */}
                </InlineElement>
                </InlineElement>
                <Paragraph className={classes.DurationStops} >
                    3 Stops
                </Paragraph>
            </Box>
            <Box>
            <BoldParagraph className={classes.hide} >
                    Delhi
                </BoldParagraph>
            <BoldParagraph className={classes.TimePrice} >
                    Delhi
                </BoldParagraph>
                <BoldParagraph   className={classes.ODTerminal} >
                02:55 PM
                </BoldParagraph>
                <Paragraph>
                Sat, 18 Feb
                </Paragraph>
            </Box>
           
          </Box>
          <Box className={classes.subRoot} >
            <Box>
                <InlineElement  >
                    <Image src={greyLogo} />
                </InlineElement>
                <Paragraph className={classes.MakeInline}  >
                    Ak3947
                </Paragraph>
            </Box>
           
          </Box>
        </Box>
        <Box className={classes.offerMessage} >
            <Box className={classes.offerMessagePara} >
               <Typography sx={{
                 color:"#000000",
               }}>
               SHARE ITINERARY
               </Typography>
               <Typography
               sx={{
                color:"#000000",
              }}
               >
               {/* View Flight Details */}
               VIEW FLIGHT DETAILS
               </Typography>
            </Box>
        </Box>
        <Box className={classes.Mainbutton}>
          <Box className={classes.Buttonone} >
          
            <Box style={{  display: "flex", justifyContent: "center",}}>
              <Image src={button1}/>
            </Box>
            <Box > 
              <Button style={{color:"#000000",position: "relative", bottom: "-10px",  right: "-11px"}}>E - Ticket</Button>
                 </Box>


            </Box>
       
          <Box className={classes.Buttontwo}>
            <Box style={{  display: "flex", justifyContent: "center",
}}>
              <Image src={button2}/>
            </Box>
            <Box> 
              <Button style={{color:"#000000",position: "relative", bottom: "-10px",  right: "-11px"}}>Check-in</Button>
                 </Box>

          </Box>
          <Box className={classes.Buttonthree}>
            <Box style={{  display: "flex", justifyContent: "center"}}>
              <Image src={button3}/>
            </Box>
            <Box> 
              <Button style={{color:"#000000", position: "relative", bottom: "-10px",  right: "-5px"}}>Boarding 
                Pass</Button>
                 </Box>

          </Box>
          <Box className={classes.Buttonfour}>
            <Box style={{  display: "flex", justifyContent: "center"}}>
              <Image src={button4}/>
            </Box>
            <Box> 
              <Button style={{color:"#000000",position: "relative", bottom: "-10px",  right: "-11px"}}>Update
              Details</Button>
                 </Box>

          </Box>
        </Box>
    <Box style={{marginTop:"50px"}}>
    <Box className={classes.offerMessage} >
            <Box className={classes.offerMessagePara} >
               <Typography sx={{
                 color:"#000000",
                 marginLeft: "-681px"

               }}>
              Check the latest travel guidelines from Bengaluru to Delhi
               </Typography>
             
            </Box>
        </Box>

    </Box>
       
       
       
       
    </Box>
  </AppBar>
        </Box>
      </div>
      <style>
        {`
        .css-18p26rm{
          border:none;
        }
        .css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected {
          color:#FF6300;
          // font-family: Poppins;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
          background-color:#fff;
      }
      .css-1ujykiq-MuiButtonBase-root-MuiTab-root{
        background-color: #fff;
        color:#333333;
        // font-family: Poppins;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
          text-transform: none;
      }
      .css-1aquho2-MuiTabs-indicator {
        position: absolute;
        height: 2px;
        bottom: 0px;
        width: 30%;
        background-color: #FF6300;
    }
     .ButtonPart{
      border-radius:10px;
      margin: 0px 28px 21px 31px;
      padding: 25px;
     border:1px solid orange;
    
     }
            
       .mainParagraph{
      
         display:flex;
         justify-content: space-around;
         margin:10px;
       }
       .mainDiv{
         position: relative;
         top: 40px;
       }
       .div1{
         display:flex;
         justify-content: space-around
       }
       .mainCOntainer2{
         display:flex;
         justify-content: space-around

       }
      //  .MainConatiner{
      //    border:1px solid red
      //  }
       .p6{
         display:flex;
         justify-content:center;
         margin-top:100px;
       }
       .p7{
         width: 100px;
         height: 100px;
         background: darkgray;
         margin:5px;
        
     }
      .MainConatiner{
            // border: 2px solid orange;
    // border-radius: 10px;
    margin: 29px;
    // background: grey;
      }
   .Line{
   
 color:black;
 height:44px;
border:1px solid black;
    border-radius: 0px;
    
   }

     .FirstContainer{
      display: flex;
      flex-direction: row;
     }
     /* Responsive layout - makes a one column layout instead of a two-column layout */
     @media (max-width: 800px) {
       .FirstContainer {
         flex-direction: column;
       }
     }
     .Button{
      font-size: 10px;
      color: black;
      background: green;
      border-radius: 21px;
     }



          `}
      </style>
    </>
  );
};

export default Managecontent
