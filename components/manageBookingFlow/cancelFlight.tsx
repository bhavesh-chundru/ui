import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import  Box  from "@mui/material/Box";
import React from "react"
import styled from "styled-components"
import styles from "./cancelFlight.module.css";
import Image from "next/image";
import Flight_90 from "../../public/svg/Flight_90.svg";
import Union from "../../public/svg/Union.svg";
import flightSmall from "../../public/svg/flightSmall.svg";
import Link from "next/link";




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
flex-direction:row;
alignItem:center;
`
const MidCal = styled.div
`
display:flex;
flex-direction: column;
align-items:center;
`
const BoxFlex = styled.div
`
display:flex;
flexDirection:row;
alignItem:center;
gap:0.688rem;
`
const UnionBox = styled.div
`
margin-left:0.313rem;
`
const FIcon = styled.div
`
position:relative;
width:30.438rem;
`
const Flightsm = styled.div
`
position:absolute;
left:48.5%;
top:34%;
`
const Gap = styled.div
`
margin-left:0.313rem;
`
const Comp3 = styled.div
`
max-width:71.25rem;
padding:1.5rem 1.5rem 0.875rem 1.5rem;
margin-Top:0.25rem;
background-color:#FFFFFF;
`
const BtnView = styled.div
`
display:flex;
flex-direction:row;
justify-content:right;
margin-top:1.5rem;
margin-bottom:1.25rem;
`
const HR = styled.hr
`
width: 924px;
height: 1px;
margin-left:1.688rem;
background: #E1E1DF;
`
function CancelFlight(){
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
                </Comp1>
                <Comp2>
                    <Typography className={styles.c2Title}>
                        Your upcoming flights
                    </Typography>
                    <Hr/>
                    <Box className={styles.more}>
                        <Typography className={styles.oneWay}>
                            One Way • PNR - KSBUDK
                        </Typography>
                    </Box>
                    <Typography className={styles.booked}>
                        Booked on Thu, 01 Feb
                    </Typography>
                    <Paper className={styles.paper}>
                        <BoxFlex>
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

                            <MidCal>
                                <Typography className={styles.stops}>
                                    4h 40min
                                </Typography>
                                <FIcon>
                                    <UnionBox>
                                            <Image src={Union} alt="Union 487"/> 
                                    </UnionBox>
                                    <Flightsm>
                                        <Image src={flightSmall} alt="Vector"/>
                                    </Flightsm>
                                </FIcon>
                                <Typography className={styles.stops}>
                                    Stopover at Nagpur, Mumbai
                                </Typography>
                            </MidCal>

                            <Gap>
                                <Typography className={styles.from}>
                                    Delhi
                                </Typography>
                                <Typography className={styles.titile}>
                                    09:30 DEL-T1
                                </Typography>
                            </Gap>
                        </BoxFlex>
                        <Button className={styles.subBtn}>
                            Cancel Flight
                        </Button>
                    </Paper>
                    <BtnView>
                        <Link href='/manageBookingPage'>
                            <Button className={styles.btnView}>
                                View & manage booking
                            </Button>
                        </Link>
                    </BtnView>
                </Comp2>
                <Comp3>
                    <Box className={styles.more}>
                        <Typography className={styles.oneWay}>
                            Round Trip • PNR - XWBUDG
                        </Typography>
                    </Box>
                    <Typography className={styles.booked}>
                        Booked on Thu, 01 Feb
                    </Typography>
                    <Paper>
                        <Box className={styles.paper}>
                        <BoxFlex>
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

                            <MidCal>
                                <Typography className={styles.stops}>
                                    4h 40min
                                </Typography>
                                <FIcon>
                                    <UnionBox>
                                            <Image src={Union} alt="Union 487"/>   
                                    </UnionBox>
                                    <Flightsm>
                                        <Image src={flightSmall} alt="Vector"/>
                                    </Flightsm>
                                </FIcon>
                                <Typography className={styles.stops}>
                                    Stopover at Nagpur, Mumbai
                                </Typography>
                            </MidCal>

                            <Gap>
                                <Typography className={styles.from}>
                                    Delhi
                                </Typography>
                                <Typography className={styles.titile}>
                                    09:30 DEL-T1
                                </Typography>
                            </Gap>
                        </BoxFlex>
                        <Button className={styles.subBtn}>
                            Cancel Flight
                        </Button>  
                        </Box> 

                        <HR/>

                        <Box className={styles.paper}>
                        <BoxFlex>
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
                                    Delhi
                                </Typography>
                                <Typography className={styles.titile}>
                                    07:45 BLR-T1
                                </Typography>
                            </Box>

                            <MidCal>
                                <Typography className={styles.stops}>
                                    4h 40min
                                </Typography>
                                <FIcon>
                                    <UnionBox>
                                            <Image src={Union} alt="Union 487"/>   
                                    </UnionBox>
                                    <Flightsm>
                                        <Image src={flightSmall} alt="Vector"/>
                                    </Flightsm>
                                </FIcon>
                                <Typography className={styles.stops}>
                                    Stopover at Nagpur, Mumbai
                                </Typography>
                            </MidCal>

                            <Gap>
                                <Typography className={styles.from}>
                                    Bengaluru
                                </Typography>
                                <Typography className={styles.titile}>
                                    09:30 DEL-T1
                                </Typography>
                            </Gap>
                        </BoxFlex>
                        <Button className={styles.subBtn}>
                            Cancel Flight
                        </Button>  
                        </Box>                   
                    </Paper>
                    <BtnView>
                        <Link href='/manageBookingPage'>
                            <Button className={styles.btnView}>
                                View & manage booking
                            </Button>
                        </Link>
                    </BtnView>
                </Comp3>
            </OuterBox>
        </Container>
        <style>
            {
                `
                .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
                    height:3rem;
                }
                .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
                    border-radius: 8px 0 8px 8px;
                }
                .cancelFlight_text__mBck9 {
                    width: 27.563rem;
                    background-color: #FFFFFF;
                    margin-bottom: 1.625rem;
                    height: 3rem;
                    border-radius: 8px 0 8px 8px;
                }
                `
            }
        </style>
        </>
    )
}
export default CancelFlight;