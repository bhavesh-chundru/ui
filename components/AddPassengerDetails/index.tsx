import React from 'react';
import Flightdetails from './Flightsdetails';
import AddPassengerDetails from './AddPassengerDetails';
import Card from '@mui/material/Card';
// import BusinessProfile from './BusinessProfileDrawer'

const index = () => {
  return (
      <>
        <Card style={{width:'80%',margin:'15px auto',borderRadius: '16px 0px 0px 0px', backgroundColor: '#F5F5F5'}} >
            {/* <BusinessProfile/> */}
            <Flightdetails/>
            <AddPassengerDetails/>
        </Card>
        

      
    </>
  )
}

export default index