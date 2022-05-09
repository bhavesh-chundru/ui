import { makeStyles } from "@material-ui/styles";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { display } from "@mui/system";
import  Box  from "@mui/material/Box";
import React from "react"
import styled from "styled-components";
import styles from "./changeBookin.module.css";
import Image from 'next/image';
import Union487 from '../../public/svg/Union487.svg';
import Flight_90 from "../../public/svg/Flight_90.svg";
import MoreIcon from "../../public/svg/MoreIcon.svg";
import Union from "../../public/svg/Union.svg";
import Link from "next/link";


const useStyle = makeStyles({
    // text:{
    //     width:'27.563rem',
    //     height:'3rem',
    //     backgroundColor:'#FFFFFF',
    // },
    // paper:{
    //     maxWidth:'68.313rem !important',
    //     padding:'1.25rem 1.5rem 1.5rem 1.5rem !important',
    //     display:'flex !important',
    //     justifyContent:'space-between',
    //     flexDirection:'row',
    //     flexWrap:'wrap',
    // }
})

const OuterBox = styled.div
`
max-width:71.25rem;
border-radius:16px 0 16px 16px;
background-color:#F5F5F5;
`
const Comp1 = styled.div
`
max-width:71.25rem;
padding:1.5rem 1.5rem 0.875rem 1.5rem;
border-radius:16px 0 0 0;
background-color:#F5F5F5;
`
const FlexGap = styled.div
`
display:flex !important;
flex-direction:row !important;
gap:1rem !important;
flex-wrap:wrap !important;
`
const BtnSubmit = styled.button
`
background-color:#FF6300;
border:none;
width:10.938rem;
height:3rem;
border-radius:8px 0 8px 8px;
color:#FFFFFF;
`
const Hr = styled.hr
`
max-width:68.313rem;
backgroun-color:#E1E1DF;
height:1px;
margin-top:0.875rem;
margin-bottom:1.5rem;
`
const Comp2 = styled.div
`
max-width:71.25rem;
padding:1.5rem 1.5rem 0.875rem 1.5rem;
margin-bottom:0.25rem;
background-color:#FFFFFF;
`
const Callenderbtn = styled.div
`
width:4.375rem;
height:3.75rem;
background-color:#F5F5F5;
`
const DivBtn = styled.div
`
display:flex;
flexDirection:row;
alignItem:center;
`
const Comp3 = styled.div
`
max-width:71.25rem;
padding:1.5rem 1.5rem 0.875rem 1.5rem;
marginBottom:0.25rem;
background-color:#FFFFFF;
border-radius:0 0 16px 16px;
`
const BFlex = styled.div
`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const HR = styled.hr
`
margin:0;
padding:0;
margin-bottom:1.5rem;
`
function ChangeBooking(){
    return(
        <>
        <Container>
            <OuterBox>
                <Comp1>
                    <Typography className={styles.retrieve}>
                        Retrieve your booking using PNR
                    </Typography>
                    <FlexGap>
                        <TextField className={styles.text} label="PNR/Booking Ref" variant="outlined" />
                        <TextField className={styles.text} label="PNR/Booking Ref" variant="outlined" />
                        <BtnSubmit>Submit</BtnSubmit>
                    </FlexGap>
                    <Typography className={styles.ret}>
                        Retrieve without a PNR
                    </Typography>
                </Comp1>
                
                <Comp2>
                    <Box className={styles.upFlex}>
                        <Typography className={styles.comming}>
                            Upcoming
                        </Typography>
                        <Typography>
                            Past
                        </Typography>
                    </Box>
                    <HR/>
                    <Typography className={styles.c2Title}>
                        Your upcoming flights
                    </Typography>
                    <Hr/>
                    <Box className={styles.more}>
                        <Typography className={styles.oneWay}>
                            One Way • PNR - KSBUDK
                        </Typography>
                        <Button>
                            <Image src={MoreIcon} alt="More Icon"/>
                        </Button>
                    </Box>
                    <Typography className={styles.booked}>
                        Booked on Thu, 01 Feb
                    </Typography>
                    <Paper className={styles.paper} elevation={1}>
                        {/* <BFlex> */}
                            <Callenderbtn>
                                <Box className={styles.cal}>
                                    <Typography className={styles.callender}>
                                        18
                                    </Typography>
                                    <Typography className={styles.callDate}>
                                        feb ‘22
                                    </Typography>
                                </Box>
                            </Callenderbtn>
                            <Box>
                                <Typography className={styles.from}>
                                    Bengaluru
                                </Typography>
                                <Typography className={styles.titile}>
                                    07:45 BLR-T1
                                </Typography>
                            </Box>
                            <Box className={styles.flexMiddle}>
                                <Typography className={styles.stops}>
                                    4h 40min
                                </Typography>
                                <Box className={styles.mid}>
                                    <Box>
                                        <Image src={Union} alt="Union 487"/>
                                    </Box>
                                    <Box className={styles.flight90}>
                                        <Image src={Flight_90} alt="Flight_90"/>
                                    </Box>
                                </Box>
                                <Typography className={styles.stops}>
                                    2 Stops  • BOM,NAG 
                                </Typography>
                            </Box>
                            <Box>
                                <Typography className={styles.to}>
                                    Delhi
                                </Typography>
                                <Typography className={styles.toTitle}>
                                    09:30 DEL-T1
                                </Typography>
                            </Box>
                            
                        {/* </BFlex> */}
                    </Paper>
                    <DivBtn className={styles.bottomBtn}>
                        <Link href='/manageBookingPage'>
                            <Button className={styles.normalbtn}>View & manage booking</Button>
                        </Link>
                       
                    </DivBtn>
                </Comp2>
                <Comp3>
                    <Box className={styles.more}>
                        <Typography className={styles.oneWay}>
                            Round Trip • PNR - XWBUDG
                        </Typography>
                        <Button>
                            <Image src={MoreIcon} alt="More Icon"/>
                        </Button>
                    </Box>
                    <Typography className={styles.booked}>
                        Booked on Thu, 01 Feb
                    </Typography>
                    <Hr/>
                    <Paper elevation={2}>
                        <Box className={styles.paper2}>
                            <Callenderbtn>
                                    <Box className={styles.cal}>
                                        <Typography className={styles.callender}>
                                            22
                                        </Typography>
                                        <Typography className={styles.callDate}>
                                            feb ‘22
                                        </Typography>
                                    </Box>
                                </Callenderbtn>
                                <Box>
                                    <Typography className={styles.from}>
                                        Bengaluru
                                    </Typography>
                                    <Typography className={styles.titile}>
                                        07:45 BLR-T1
                                    </Typography>
                                </Box>
                                <Box className={styles.flexMiddle}>
                                    <Typography className={styles.stops}>
                                        4h 40min
                                    </Typography>
                                    <Box>
                                        <Box>
                                            <Image src={Union} alt="Union"/>
                                        </Box>
                                        <Box className={styles.flight90}>
                                            <Image src={Flight_90} alt="Flight_90"/>
                                        </Box>
                                    </Box>
                                    <Typography className={styles.stops}>
                                        2 Stops  • BOM,NAG 
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={styles.to}>
                                        Delhi
                                    </Typography>
                                    <Typography className={styles.toTitle}>
                                        09:30 DEL-T1
                                    </Typography>
                                </Box> 
                        </Box>

                        <Hr className={styles.hrs}/>
                        <Box className={styles.paper2}>
                            <Callenderbtn>
                                    <Box className={styles.cal}>
                                        <Typography className={styles.callender}>
                                            24
                                        </Typography>
                                        <Typography className={styles.callDate}>
                                            feb ‘22
                                        </Typography>
                                    </Box>
                                </Callenderbtn>
                                <Box>
                                    <Typography className={styles.from}>
                                        Bengaluru
                                    </Typography>
                                    <Typography className={styles.titile}>
                                        07:45 BLR-T1
                                    </Typography>
                                </Box>
                                <Box className={styles.flexMiddle}>
                                    <Typography className={styles.stops}>
                                        4h 40min
                                    </Typography>
                                    <Box>
                                        <Box>
                                            <Image src={Union} alt="Union"/>
                                        </Box>
                                        <Box className={styles.flight90}>
                                            <Image src={Flight_90} alt="Flight_90"/>
                                        </Box>
                                    </Box>
                                    <Typography className={styles.stops}>
                                        2 Stops  • BOM,NAG 
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={styles.to}>
                                        Delhi
                                    </Typography>
                                    <Typography className={styles.toTitle}>
                                        09:30 DEL-T1
                                    </Typography>
                                </Box> 
                        </Box>
                    </Paper>
                    <DivBtn className={styles.bottomBtn}>
                        <Link href='/manageBookingPage'>
                            <Button className={styles.normalbtn}>View & manage booking</Button>
                        </Link>
                       
                    </DivBtn>
                </Comp3>
            </OuterBox>
        </Container>
        <style>
            {
                `
                .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
                    height:3rem;
                }
                .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root  {
                    border-radius: 8px 0 8px 8px;
                }
                .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
                    border-radius: 8px 0 8px 8px;
                }
                `
            }
        </style>
        </>
    )
}
export default ChangeBooking;