import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LuggageIcon from '@mui/icons-material/Luggage';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded'; 
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import logo from  '../../../public/images/akasaLogo.png'
import Header from './../../Header/index';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router'
import Link from 'next/link';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));


toast.configure();

export default function BookingSucessfull() {


  const router = useRouter()
  const passengerOne =JSON.parse(localStorage.getItem('passengerOne'));
  const passengerTwo = JSON.parse(localStorage.getItem('passengerTwo'))
  
  return (
    <>

    <Container>

    <Header/>
                    <Box sx={{ flexGrow: 1, overflow: 'hidden',  }} >
                          <Grid>
                            <Typography style={{textAlign:'center'}}>
                                <div><CheckCircleOutlineIcon  style={{ fontSize: "120px",marginBottom: "9px", color: 'green'}}/></div>
                                <b style={{fontSize:'32px',fontWeight:'500'}}>Your booking is Successful</b>
                            </Typography>
                          </Grid>
                    </Box>
                    <br></br> <br></br>
                    


      <StyledPaper  
          sx={{
            my: 1,
            mx: 'auto',
            p: 1,
          }}
        >
            
              <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={1}>
                      <Grid item xs={4} style={{textAlign:'center'}}>
                        <div style={{ width:'45%', margin:'auto'}}>

                        <p>{localStorage.getItem("orginCity")}</p>
                          <b>{router.query.dtime} AM</b><br></br>

                          <span >{localStorage.getItem("Origin")}</span><br></br>
                          <span>International Airport</span>
                        </div>
                         
                      </Grid>
                      <Grid item xs={4} style={{textAlign:'center',padding: '35px 0px 0px 0px'}}>
                            <b>{router.query.hours}</b>
                           
                      </Grid>
                      <Grid item xs={4} style={{textAlign:'center'}}>
                      <div style={{ width:'45%', margin:'auto'}}>
                      <p>{localStorage.getItem("destCity")}</p>
                          <b>{router.query.atime} AM</b><br></br>
                          <span>{localStorage.getItem("Dest")}</span><br></br>
                        <span>International Airport</span>
                        </div>
                      </Grid>
                    
                    </Grid>
                  </Box>
        </StyledPaper>      
        

      <StyledPaper
        sx={{
          mx: 'auto',
          p: 1,
        }}
      >

                 <Box sx={{ width: '100%' }}>
                      <Grid container rowSpacing={1} columnSpacing={{  md: 50 }} >
                        <Grid item xs={6}  style={{textAlign:'center'}}>
                          <div style={{padding:'0px 0px 0px 74px'}}>
                          <CalendarTodayIcon/>  &nbsp;
                            <b>Thu, 18 Feb, 2022 &#8226; One Way</b>

                          </div>
                            
                        </Grid>
                        <Grid item xs={6}  style={{textAlign:'center',display:'flex'}}>
                          <div  style={{textAlign:'center',display:'flex',justifyContent:'flex-end', width:'71%'}}>
                              <div style={{padding:'3px 0px 0px 0px'}}>
                              <Image src={logo} alt="logo" height="20" width="40" />
                              </div>
                              <div >
                                <b>{router.query.flightno}</b>
                              </div>
                          </div>
                            
                        </Grid>
                      </Grid>
                    </Box>
  
      </StyledPaper>


      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 1,
        }}
      >
          <Box sx={{ width: '100%' }}>
                      <Grid container rowSpacing={1} columnSpacing={{  md: 50 }} >
                        <Grid item xs={6}  style={{textAlign:'center'}}>
                        <div >
                        <LuggageIcon/>  &nbsp;
                            <b>Baggage Allowance</b>
                            </div>
                        </Grid>
                        <Grid item xs={6}  style={{textAlign:'end', padding:' 0px 106px 0px 0px ',}}>
                          <b>&nbsp; Cabin 7kg &#8226;Check-in 15kg</b>
                        </Grid>
                      </Grid>
                    </Box>
  
      </StyledPaper>
    </Container><br></br>



    <Container>
 

    <StyledPaper
    
        sx={{
          mx: 'auto',
          p: 1,
        }}
      >
        <Box sx={{ width: '100%'}}>
                  <h4>Passengers &#8226; 2</h4>
     
        </Box>
      </StyledPaper>

      <StyledPaper
        sx={{
          mx: 'auto',
          backgroundColor: '#DCDCDC',
          height: '45px',
          padding: ' 3px 0px 0px 5px'
        }}
      >
         <Box sx={{ width: '100%',}} >
                  <h5><CheckCircleOutlineIcon style={{fontSize:'40px'}}/> Booking Confirmed  &#8226;  PNR XWBUDG</h5>
     
        </Box>
      </StyledPaper>

      <StyledPaper
        sx={{
          mx: 'auto',
          p: 1,
        }}
      >
         <Box sx={{ width: '100%'}} className='passenNameBlock'>
                  <b>{passengerOne.FirstName} {passengerOne.LastName} </b> &#8226;<b>Seat A3</b><br></br>
                
     
        </Box>
      </StyledPaper>

      <StyledPaper
        sx={{
          mx: 'auto',
          p: 1,
        }} 
      >
         <Box sx={{ width: '100%'}} className='passenNameBlock'>
         <b>{passengerTwo.FirstName} {passengerTwo.LastName}</b> &#8226;<b>Seat B2</b>
     
        </Box>
      </StyledPaper>

      <StyledPaper
        sx={{
           mx: 'auto',
          p: 4,
        }}
      >
         <Box sx={{ width: '100%',padding:'0px 0px 15px 0px',}} >
           <Button variant="contained" className='cursorPointer' style={{backgroundColor:'rgb(255, 99, 0)', textTransform:"none",  borderRadius: '8px 0px 8px 8px', float:'right'}}>Manage Your Booking</Button>
     
        </Box>
      </StyledPaper>
    </Container>
    <br></br>



    <Container>
        <StyledPaper
        
        sx={{
          mx: 'auto',
          p: 1,
        }}
      >
        <Box sx={{ width: '100%',  backgroundColor: '#DCDCDC' }}>
            <Accordion style={{ backgroundColor: '#DCDCDC',   padding: ' 3px 0px 0px 5px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{width:'100%'}}
             
            >
              <Typography style={{ width:'100%'}} className='cursorPointer'>Check the latest travel guidelines from Bengaluru to Delhi</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </StyledPaper>
    </Container>




    <Container>
    <StyledPaper
        
        sx={{
          mx: 'auto',
          p: 1,
        }}
      >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} >
                <b>Need More Help?</b>
              </Grid>
              <Grid item xs={2} style={{textAlign:'center'}}>
              <div><ChatRoundedIcon className='cursorPointer'/></div>
                <p className='cursorPointer'>Chat</p>
              </Grid>
              <Grid item xs={2} style={{textAlign:'center'}}>
                 <div><CallRoundedIcon className='cursorPointer'/></div>
                  <p className='cursorPointer'>Call Us</p>
              </Grid>
              <Grid item xs={2} style={{textAlign:'center'}}>
                <div ><LiveHelpRoundedIcon className='cursorPointer'/></div>
                <p className='cursorPointer'>FAQs</p>
              </Grid>
            </Grid>
          </Box>
          </StyledPaper>
    </Container>


    <Container>
    <StyledPaper
        
        sx={{
          mx: 'auto',
          p: 1,
        }}
      >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}  style={{textAlign:'start'}}>
              <Grid item xs={2} >
                <ShareRoundedIcon className='cursorPointer'/>&nbsp;<span className='cursorPointer'>SHARE ITINARARY</span>
              </Grid>
              
              <Grid item xs={2} style={{textAlign:'start'}}>
              
                <CalendarTodayIcon className='cursorPointer'/>&nbsp;<span className='cursorPointer'>ADD TO CALENDER</span>
              </Grid>

              <Grid item xs={6} style={{textAlign:'end'}} >
              
              <Button variant="outlined"  className='passenBlockETic cursorPointer'>View E-Ticket</Button>
            </Grid>

            <Grid item xs={2} style={{textAlign:'end'}} >
            <Link href="/">
              <Button variant="contained" style={{backgroundColor:'rgb(255, 99, 0)', color:'white',textTransform:"none",  borderRadius: '8px 0px 8px 8px',}} className='passenBlockBtn'>Return to Home</Button>
            </Link>
            </Grid>
             
            </Grid>
          </Box>
          </StyledPaper>
    </Container>
    <br></br>

    <style>
      {
        `
        .passenBlockETic{
          border: 2px solid rgb(255, 99, 0);
          width: 32%;
          height: 30px;
          border-radius:2px;
          color:orange;
        }

        .passenBlockBtn{
          border: 2px solid rgb(255, 99, 0);
          width: 100%;
          height: 30px;
          border-radius:2px;
        }
        .passenNameBlock{
          padding: 0px 0px 0px 30px;
        }

        .cursorPointer{
          cursor: pointer;
        }
       
        `
      }
      </style>
    </>
  );
}