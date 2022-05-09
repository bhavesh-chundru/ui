import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import styles from './AddPassengerDetails.module.css';
import { useAppSelector } from "../../redux/hooks";
import moment from "moment";
const FlightDetailsBlock = styled.div`
  
`
const Paragraph = styled.b`
font-weight: 600;
font-size: 16px;
color: #000000;
line-height: 24px;;
` 

const Flightsdetails = () => {
  const origin = useAppSelector((state) => state.bookingData.origin);
  const destination = useAppSelector((state) => state.bookingData.destination);
  const TotalPassenger=useAppSelector((state)=>state.bookingData.passenger.total);
  const originCity = useAppSelector((state) => state.bookingData.origincity);
  const destinationCity = useAppSelector((state) => state.bookingData.destinationcity);
  const date=localStorage.getItem("Date")
  return (
    <>
      <Box  className={styles.FlightsDetailsBlock}>
        <Box >
           <Paragraph>One Way: {originCity}-{destinationCity} &#9679; { moment(date).format('D MMM')} &#9679; {TotalPassenger} Passengers</Paragraph>
        </Box>

        <Box className={styles.FlightDetails}>
           Flight Details     
        </Box>
      </Box>
    </>
  )
}

export default Flightsdetails