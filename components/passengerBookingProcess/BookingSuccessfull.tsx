import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import successLogo from '../../public/images/successLogo.png'
import shareIcon from '../../public/svg/shareIcon.svg';
import calenIcon from '../../public/svg/calenIcon.svg';
import viewTicket from '../../public/svg/viewTicketIcon.svg';
import myBookingIcon from '../../public/svg/myBookingIcon.svg';
import { useAppSelector } from "../../redux/hooks";
import moment from "moment";
const MainBlock = styled.div
` width:80%;
  margin: 20px auto auto auto;
  padding:16px;
  height:311px;
  border-radius:16px;
  border:1px solid black;
`

const BookSuccessBlock = styled.div`
  width:100%;
  height:239px;
  background-color: #FFDFCC;
  border-radius: 8px 8px 0px 0px;
  `
  
const BookingSucessLogoBlock = styled.div`
  text-align:center;
    padding: 20px 0px 20px 0px;

`

const BookSuccessTextBlock = styled.div`
  text-align:center;
  font-weight: 600;
font-size: 18px;
`
const IconDivBlock = styled.div`
  width:50%;
  height: 68px;
  margin:auto;
  display:flex;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
`

const IconBoxBlock = styled.div`
width: 24%;
height: 68px;
border-radius: 8px;
background-color: #FFFFFF;
display:flex;
justify-content:center;
&:hover {
  border:1px solid black;
  cursor:pointer;
}

`

const IconBlock = styled.div`
  width:35%;
  display:flex;
  justify-content:center;
  align-items:center
`
const IconTextBlock = styled.div`
width:45%;
display:flex;
justify-content:center;
align-items:center;
font-weight: 700;
font-size: 12px;
`

const DetailsBlock = styled.div`
  width:100%;
  height:40px;
  background-color: #FFFFFF;
  display:flex;
  justify-content:space-between;
  align-items:center;

`
const OneWayBlock = styled.div`
font-weight: 600;
font-size: 16px;
`

const FlightdetailBlock = styled.div`
font-weight: 600;
font-size: 18px;
color:#5C0FD9;
`
const BookingSuccessfull = () => {
  const origin = useAppSelector((state) => state.bookingData.origin);
  const destination = useAppSelector((state) => state.bookingData.destination);
  const originCity = useAppSelector((state) => state.bookingData.origincity);
  const destinationCity = useAppSelector((state) => state.bookingData.destinationcity);
  const passenger=useAppSelector((state)=>state.bookingData.passenger);

  return (
    <>
    <MainBlock>
      <BookSuccessBlock>
        <BookingSucessLogoBlock>
        <Image src={successLogo} alt="icon" height="60" width="60" />
        </BookingSucessLogoBlock>
        <BookSuccessTextBlock>Your one way booking is successful!</BookSuccessTextBlock>
        
        <IconDivBlock>
          <IconBoxBlock>
            <IconBlock>
            <Image src={shareIcon} alt="icon" height="30" width="30" />
            </IconBlock>
            <IconTextBlock>Share Itinerary</IconTextBlock>
          </IconBoxBlock>
          <IconBoxBlock>
          <IconBlock>
            <Image src={calenIcon} alt="icon" height="30" width="30" />
          </IconBlock>
            <IconTextBlock>Add to Calendar</IconTextBlock>
          </IconBoxBlock>
          <IconBoxBlock>
          <IconBlock>
          <Image src={viewTicket} alt="icon" height="30" width="30" />
          </IconBlock>
            <IconTextBlock>View <br/>E-ticket</IconTextBlock>
          </IconBoxBlock>
          <IconBoxBlock>
          <IconBlock>
          <Image src={myBookingIcon} alt="icon" height="30" width="30" />
          </IconBlock>
            <IconTextBlock>My Booking</IconTextBlock>
          </IconBoxBlock>

        </IconDivBlock>
    
    
      </BookSuccessBlock>
      

      <DetailsBlock>
        <OneWayBlock>One Way : {originCity}-{destinationCity} • 09 May • {passenger.total} Passengers</OneWayBlock>
        <FlightdetailBlock>Flight details</FlightdetailBlock>
      </DetailsBlock>

    </MainBlock>
     
    </>
  )
}

export default BookingSuccessfull