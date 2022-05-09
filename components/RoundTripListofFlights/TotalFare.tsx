import React from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Router from 'next/router';
import Box from '@mui/material/Box';
import {useRouter} from 'next/router'

const FareBlock =styled.p`
font-weight: 700;
font-size: 26px;
margin-bottom:0px;

`

const FareSummaryViewBlock =styled.p`
font-weight: 500;
font-size: 12px;

`

const TotalFare = () => {

  const HandleFlights=()=>{
    Router.push({
      pathname: '/passengerBookingProcessPage',
    
    })
  }
  return (
    <>

      <Box style={{display:'flex',justifyContent:'space-between',padding:'15px 0px 0px 0px'}}>
       <Box>
          <FareBlock>
            &#8377; 4200
          </FareBlock>
          <FareSummaryViewBlock>
          View Summary
          </FareSummaryViewBlock>
       </Box>
       <Button variant="contained" style={{backgroundColor:'#FF3600',width:'48%',borderRadius:'8px 0px 8px 8px',textTransform:'none',height:'40px', display:'flex', alignItems:'center'}}onClick={HandleFlights}>Continue</Button>
       </Box>


    </>
  )
}

export default TotalFare