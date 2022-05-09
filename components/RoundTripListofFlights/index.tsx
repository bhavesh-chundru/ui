import React,{useRef, useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CalenderStrip from './CalenderStrip';
import RoundTripListofFlights from './RoundTripListofFlights';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import styles from './CalenderStrip.module.css';
import FilterStrip from './FliterStrip';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TotalFare from './TotalFare'


  const TotalFareBlock = styled.div`
    width:81%;
  
    height:100%;
    margin:auto;
`
const TotalFareSubBlock = styled.div`
    width:25%;
    height:100%;
    float:right;`

const RoundTripListOfFlights=()=>{

    return(
        <>
            <Card className={styles.card}  >
                <FilterStrip/>
                <Box sx={{display: ' flex' , flexDirection:'row'}}>
                    <Box sx={{width:'564px'}}>
                     <CalenderStrip/>
                     <RoundTripListofFlights  origin={'Bengaluru'} destination={'Delhi'} offerMessage={'you save ₹600 when you book this fare*'} />
                    </Box>
                    <Box sx={{width:'564px'}}>
                     <CalenderStrip/>
                     <RoundTripListofFlights origin={'Delhi'} destination={'Bengaluru'} offerMessage={'Lowest fare available on other airline is ₹2,800*' } />
                    </Box>
                </Box>
            </Card>
            <Box boxShadow={4} style={{ position: 'fixed', bottom: '0px',height:'80px', width:'100%', backgroundColor:'#FFFFFF'}}>
                <TotalFareBlock>
                    <TotalFareSubBlock>
                            <TotalFare/>
                    </TotalFareSubBlock>
                </TotalFareBlock>
            </Box>

            <style>
            {
                `.css-jsexje-MuiSwitch-thumb{
                    background-color: #FF6300;
                  }
                ` }
            </style>
        </>
    )
}

export default RoundTripListOfFlights;