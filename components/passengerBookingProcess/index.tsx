import React from 'react';
import Flightdetails from '../AddPassengerDetails/Flightsdetails';
import PassengerBookingJourney from './passengerBookingJourney';
import { Card , Box } from '@mui/material';
// import BusinessProfile from './BusinessProfileDrawer';
import styles from './passengerBookingJourney.module.css'

const PassengerBookingProcess = () => {
  return (
      <>
        <Card className={styles.card} >
            <Flightdetails/>
            <Box style={{marginTop:"8px"}}></Box>
            <PassengerBookingJourney/>
        </Card>      
    </>
  )
}

export default PassengerBookingProcess;