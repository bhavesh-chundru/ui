import React from 'react';
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import styles from "./BookingSummary.module.css";
import moment from "moment";

const BookingSummary = () => {
    const date=localStorage.getItem("Date")

  return (
    <div>
        <Container className={styles.Box}>
            {/* <Box className={styles.flex1}>
                <Typography className={styles.title}>
                    One Way : London-Paris • { moment(date).format('D MMM')}• 2 Passengers
                </Typography>
                <Typography className={styles.bTitle}>
                    Flight details
                </Typography>
            </Box> */}


            <Box className={styles.Box3}>
                <Typography className={styles.box3Tit1}>
                    Who’s travelling?
                </Typography>
                <Typography className={styles.b3con}>
                    John Doe
                </Typography>
                <Box className={styles.b3flex1}>
                    <Typography className={styles.b3con}>
                        Adult fare
                    </Typography>
                    <Typography>
                        ₹2,200
                    </Typography>
                </Box>
                {/* <Box className={styles.b3flex1}>
                    <Typography className={styles.b3con}>
                        Seat 1A • Premium window
                    </Typography>
                    <Typography className={styles.Rs}>
                        ₹1,000
                    </Typography>
                </Box> */}
                <hr className={styles.hr}/>
                <Typography className={styles.mary}>
                    Mary Doe
                </Typography>
                <Box className={styles.b3flex1}>
                    <Typography className={styles.afare}>
                        Adult fare
                    </Typography>
                    <Typography>
                        ₹2,200
                    </Typography>
                </Box>
                {/* <Box className={styles.b3flex1}>
                    <Typography>
                        Seat 2A • Window
                    </Typography>
                    <Typography>
                        ₹900
                    </Typography>
                </Box> */}
            </Box>
            {/* <Box className={styles.Box4}>
                <Typography className={styles.box4Tit}>
                    Add-ons
                </Typography>
                <Box className={styles.b3flex1}>
                    <Box className={styles.b4flex1}>
                        <Box>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#485B60"/>
                            </svg>
                        </Box>
                        <Box  className={styles.Panner}>
                            1 x Paneer Tikka Sandwich
                        </Box>
                    </Box>
                    <Typography>
                        ₹200
                    </Typography>
                </Box>
                <hr className={styles.hr}/>
                <Box className={styles.b3flex1}>
                    <Box className={styles.b4flex1}>
                        <Box>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#485B60"/>
                            </svg>
                        </Box>
                        <Box className={styles.caesar}>
                            1 x Caesar Salad
                        </Box>
                    </Box>
                    <Typography>
                        ₹200
                    </Typography>
                </Box>
            </Box> */}
            {/* cms */}
            <Box className={styles.Box5}>
                <Typography className={styles.box5Tit}>
                    Primary contact details
                </Typography>
                <Typography className={styles.allBook}>
                    All booking related info will be sent here
                </Typography>
                <Box className={styles.b3flex1}>
                    <Box>
                        <Typography  className={styles.color}>
                            Mobile Number
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                    </Box>
                    <Box>
                        <Typography  className={styles.color}>
                            Email ID
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                    </Box>
                    <Box>
                        <Typography  className={styles.color}>
                            Alt Email ID
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.Box6}>
                <Box>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.401 4.54699C20.9077 2.04033 17.5877 0.666992 14.0544 0.666992C6.77437 0.666992 0.841042 6.60033 0.841042 13.8803C0.841042 16.2137 1.45438 18.4803 2.60104 20.4803L0.734375 27.3337L7.73437 25.4937C9.66771 26.547 11.841 27.107 14.0544 27.107C21.3344 27.107 27.2677 21.1737 27.2677 13.8937C27.2677 10.3603 25.8944 7.04033 23.401 4.54699ZM14.0544 24.867C12.081 24.867 10.1477 24.3337 8.45437 23.3337L8.05437 23.0937L3.89438 24.187L5.00104 20.1337L4.73438 19.7203C3.64104 17.9737 3.05437 15.947 3.05437 13.8803C3.05437 7.82699 7.98771 2.89366 14.041 2.89366C16.9744 2.89366 19.7344 4.04033 21.801 6.12033C23.881 8.20033 25.0144 10.9603 25.0144 13.8937C25.041 19.947 20.1077 24.867 14.0544 24.867ZM20.081 16.6537C19.7477 16.4937 18.121 15.6937 17.8277 15.5737C17.521 15.467 17.3077 15.4137 17.081 15.7337C16.8544 16.067 16.2277 16.8137 16.041 17.027C15.8544 17.2537 15.6544 17.2803 15.321 17.107C14.9877 16.947 13.921 16.587 12.6677 15.467C11.681 14.587 11.0277 13.507 10.8277 13.1737C10.641 12.8403 10.801 12.667 10.9744 12.4937C11.121 12.347 11.3077 12.107 11.4677 11.9203C11.6277 11.7337 11.6944 11.587 11.801 11.3737C11.9077 11.147 11.8544 10.9603 11.7744 10.8003C11.6944 10.6403 11.0277 9.01366 10.761 8.34699C10.4944 7.70699 10.2144 7.78699 10.0144 7.77366C9.81437 7.77366 9.60104 7.77366 9.37437 7.77366C9.14771 7.77366 8.80104 7.85366 8.49437 8.18699C8.20104 8.52033 7.34771 9.32033 7.34771 10.947C7.34771 12.5737 8.53437 14.147 8.69438 14.3603C8.85437 14.587 11.0277 17.9203 14.3344 19.347C15.121 19.6937 15.7344 19.8937 16.2144 20.0403C17.001 20.2937 17.721 20.2537 18.2944 20.1737C18.9344 20.0803 20.2544 19.3737 20.521 18.6003C20.801 17.827 20.801 17.1737 20.7077 17.027C20.6144 16.8803 20.4144 16.8137 20.081 16.6537Z" fill="#333333"/>
                    </svg>
                </Box>
                <Box className={styles.b3flex1}>
                    <Typography className={styles.box6Tit}>
                        Get updates on Whatsapp
                    </Typography>
                    <Box>
                    <Switch  />
                    </Box>
                </Box>
                <Typography className={styles.updates}>
                    All your booking related updates will be sent to your number <span className={styles.num}>+91 9876543210</span> on Whatsapp
                </Typography>
            </Box>
            <Box className={styles.Box7}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.668 9.33333H21.3346V6.66667L18.668 4H13.3346L10.668 6.66667V9.33333H5.33464C3.86797 9.33333 2.66797 10.5333 2.66797 12V18.6667C2.66797 19.6667 3.2013 20.5067 4.0013 20.9733V25.3333C4.0013 26.8133 5.18797 28 6.66797 28H25.3346C26.8146 28 28.0013 26.8133 28.0013 25.3333V20.96C28.788 20.4933 29.3346 19.64 29.3346 18.6667V12C29.3346 10.5333 28.1346 9.33333 26.668 9.33333ZM13.3346 6.66667H18.668V9.33333H13.3346V6.66667ZM5.33464 12H26.668V18.6667H20.0013V14.6667H12.0013V18.6667H5.33464V12ZM17.3346 20H14.668V17.3333H17.3346V20ZM25.3346 25.3333H6.66797V21.3333H12.0013V22.6667H20.0013V21.3333H25.3346V25.3333Z" fill="#333333"/>
                </svg>
                <Typography className={styles.box7Tit}>
                    This is a business trip
                </Typography>
                <Typography>
                A copy of your booking e-ticket will be sent to your business 
                email ID. GST in
                voices will be sent to your business email ID within one month
                </Typography>
                <Box className={styles.b7flex1}>
                    <Box>
                        <Typography className={styles.color}>
                            Business Email ID
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                    </Box>
                    <Box>
                        <Typography  className={styles.color}>
                            Business Mobile Number
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                    </Box>
                </Box>
                <Typography className={styles.box3Tit}>
                    GST details
                </Typography>
                <Box className={styles.b7flex1}>
                   <Box>
                        <Typography  className={styles.color}>
                            GST Number
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                   </Box>
                   <Box>
                        <Typography  className={styles.color}>
                            Company Name
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                   </Box>
                   <Box>
                        <Typography  className={styles.color}>
                            Company Email Address
                        </Typography>
                        <TextField className={styles.textArea} variant="standard"/>
                   </Box>
                </Box>
            </Box>
        </Container>
        <style>
            {
                `
                .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked{
                    color: #ff6300 !important;
                }
                `
            }
        </style>
    </div>
  )
}

export default BookingSummary