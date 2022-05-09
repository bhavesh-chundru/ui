import React from "react";
import styled from "styled-components";
import Container from '@mui/material/Container'
import  Box  from "@mui/material/Box";
import Image from "next/image";
import ErrorOutlinedIocn from "../../public/svg/ErrorOutlinedIocn.svg";
import HandBaggage from "../../public/svg/HandBaggage.svg";
import VideoLibrary from "../../public/svg/VideoLibrary.svg";
import LuggageIcon from "../../public/svg/LuggageIcon.svg";
import co2 from "../../public/svg/co2.svg";
import PlugPoint from "../../public/svg/PlugPoint.svg";
import { Button, Typography } from "@mui/material";
import FlightDetails from "./flightDetails";
import FlightDetailsButton from "./flightDetailsButton";


const OuterBox = styled.div
`
max-width:71.25rem;
border-radius:16px 0 0 0;
background-color:#F5F5F5;
padding:1.5rem 1.5rem 1rem 1.5rem;
`
const Compo1 = styled.div
`
border:0.5rem solid #FFDFCC;
border-radius:4px;
background-color:#FFFFFF;
padding:1rem 1rem;
height:fit-content;
`
const Compo2 = styled.div
`
width:100%;
padding:1.5rem 1.5rem 0 1.5rem;
`
const Compo3 = styled.div
`
width:100%;
padding:0 1.5rem;
padding-bottom:33px;
`
const Flex1 = styled.div
`
display:flex;
flex-direction:row;
align-item:top;
gap:1rem;
`
const Flex2 = styled.div
`
display:flex;
flex-direction:row;
align-item:center;
justify-content:left;
gap:0.75rem;
padding-bottom:0.5rem;
flex-wrap:wrap;
`
const Flex3 = styled.div
`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`
const NormalFlex = styled.div
`
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-around;
gap:0.313rem;
`
const TitleText = styled.h1
`
margin:0;
padding:0;
margin-bottom:1rem;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #333333;
`
const BtnFlight = styled.button
`
font-weight: 600;
font-size: 18px;
line-height: 16px;
color: #5C0FD9;
border:none;
background-color:transperent;
`
const TitlePara = styled.p
`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #333333;
`
const Hr = styled.hr
`
max-width:68.313rem;
backgroun-color:#E1E1DF;
height:1px;
margin-top:1rem;
margin-bottom:1.5rem;
`
const TextAddon = styled.p
`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #666666;
margin:0;
`
const PnrTitle = styled.p
`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #666666;
margin:0;
`
const PnrCont = styled.p
`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #333333;
margin:0;
`

function BookingCancelledByAirline(){
    return(
        <>
        <Container>
          <OuterBox>
              
                <Compo1>
                    <Flex1>
                        <Box>
                            <Image src={ErrorOutlinedIocn} alt="Error Outlined Iocn"/>
                        </Box>
                        <Box>
                            <TitleText>
                                Change in your itinerary
                            </TitleText>
                            <TitlePara>
                                <Typography>
                                    Flight AK3947 to Delhi has been cancelled due to bad weather. We have reaccomodated 
                                </Typography>
                                <Typography>
                                    you on the next flight at no extra charge. 
                                </Typography>
                            </TitlePara>
                        </Box>
                    </Flex1>
                </Compo1>
          </OuterBox>
          <Compo2>
            <TitleText>
                Details of your new flight
            </TitleText>
            <FlightDetails/>
            <Hr/>
            <Box>
                <Flex2>
                    <NormalFlex>
                        <Image src={HandBaggage} alt="Hand Bag"/>
                        <TextAddon>
                            Hand Baggage 7 kg
                        </TextAddon>
                    </NormalFlex>
                    <NormalFlex>
                        <Image src={VideoLibrary} alt="Video icon"/>
                        <TextAddon>
                            In-flight Streaming
                        </TextAddon>
                    </NormalFlex>
                    <NormalFlex>
                        <Image src={LuggageIcon} alt="Luaggage icon"/>
                        <TextAddon>
                            Checkin Baggage 15 kg
                        </TextAddon>
                    </NormalFlex>
                    <NormalFlex>
                        <Image src={PlugPoint} alt="Luaggage icon"/>
                        <TextAddon>
                            Checkin Baggage 15 kg
                        </TextAddon>
                    </NormalFlex>
                    <NormalFlex>
                        <Image src={co2} alt="Luaggage icon"/>
                        <TextAddon>
                            193 Kg
                        </TextAddon>
                    </NormalFlex>
                </Flex2>
                <Hr/>
            </Box>
          </Compo2>
          <Compo3>
            <Flex3>
                <Box>
                    <PnrTitle>
                        PNR
                    </PnrTitle>
                    <PnrCont>
                        XWBUDG
                    </PnrCont>
                </Box>
                <Box>
                    <PnrTitle>
                        Flight
                    </PnrTitle>
                    <PnrCont>
                        AK3947
                    </PnrCont>
                </Box>
                <Box>
                    <PnrTitle>
                        Booking status
                    </PnrTitle>
                    <PnrCont>
                        Confirmed
                    </PnrCont>
                </Box>
            </Flex3>
            <Hr/>
            <FlightDetailsButton/>
          </Compo3>
        </Container>
        </>
    )
}
export default BookingCancelledByAirline;