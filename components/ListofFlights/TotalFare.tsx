import React from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Router from 'next/router';
import  Box  from "@mui/material/Box";
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

const TotalFare = (props:any) => {

  let FareDetails=props?.getFareType

  //const [flightFare,arrivalTime, departureTime, flightNumber, originStation, destinationStation,fareType] = props.getFareType;


  const HandleFlights=()=>{
    Router.push({
      pathname: '/passengerBookingProcessPage',
      query:{
        flightFare:FareDetails[0],
     
        // arrivalTime:arrivalTime,
        // departureTime:departureTime,
        // flightNumber:flightNumber,
        // originStation:originStation,
        // destinationStation:destinationStation,
        // fareType:fareType
      }
    
    })
  }
  return (
    <>

      <Box style={{display:'flex',justifyContent:'space-between',padding:'15px 0px 0px 0px'}}>
       <Box>
          <FareBlock>
            {/* {props?.getFareType[0]} */}
            {FareDetails? FareDetails[0]:0}
          </FareBlock>
          <FareSummaryViewBlock>
          View Summary
          </FareSummaryViewBlock>
       </Box>
       <Button variant="contained" style={{backgroundColor:'#FF3600',width:'48%',borderRadius:'8px 0px 8px 8px',textTransform:'none',height:'40px', display:'flex', alignItems:'center'}}onClick={HandleFlights}>
       {FareDetails? FareDetails[6]:'Book Saver'}
         </Button>
       </Box>


    </>
  )
}

export default TotalFare