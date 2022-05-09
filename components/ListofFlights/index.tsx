import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CalenderStrip from './CalenderStrip';
import ListofFlights from './listofFlights';
import styles from './CalenderStrip.module.css';
import TotalFare from './TotalFare';
import  Box  from "@mui/material/Box";
import styled from 'styled-components';
import {getListOfFlight} from '../../datalayer/listOfFlights';
import { useAppDispatch,useAppSelector } from "../../redux/hooks";

const TotalFareBlock = styled.div`
    width:81%;
    height:100%;
    margin:auto;
` 
const TotalFareSubBlock = styled.div`
    width:25%;
    height:100%;
    float:right;
`

const OneWayListOfFlights=()=>{
    const [listOfFlights,setListOfFlights] = useState([]);    
    // const origin =localStorage.getItem("Origin")
    // const destination=localStorage.getItem("Dest")
    const dispatch = useAppDispatch();
    
    const origin = useAppSelector((state) => state.bookingData.origin);
    const destination=useAppSelector((state) => state.bookingData.destination);
    const passengerCount = useAppSelector((state)=>state.bookingData.passenger.total)
    useEffect(()=>{
        async function fetchMyAPI() {
            let response:any = await getListOfFlight(origin,destination,passengerCount)
            setListOfFlights(response);
    
          }
          fetchMyAPI()
    },[])

    const [getFareType, setGetFareType] = useState();

    const getFare = (fareType:any) =>{
        setGetFareType(fareType)
    }

    
// Accending functinality based on Fare
const accendingFareSortHandler = () => {
    const accendingSortedFlights = listOfFlights.sort(function(a:any, b:any) {
        const fare = a.displayFare.discountedDisplayFare.replace(/[^a-zA-Z0-9 ]/g, '');
        const fare1 = b.displayFare.discountedDisplayFare.replace(/[^a-zA-Z0-9 ]/g, '');
         return fare -  fare1;
    });
    const mappingSortedFlights = accendingSortedFlights.map(v => v)
    setListOfFlights(mappingSortedFlights);
}

// Decending functinality based on Fare
const decendingFareSortHandler = () =>{ 
    const decendingSortedFlightsFare = listOfFlights.sort(function(c:any, d:any) {
        const fare = c.displayFare.discountedDisplayFare.replace(/[^a-zA-Z0-9 ]/g, '');
        const fare1 = d.displayFare.discountedDisplayFare.replace(/[^a-zA-Z0-9 ]/g, '');
        return fare1 -  fare;
    });
    const mappingSortedFlightsFare = decendingSortedFlightsFare.map(v => v)
    setListOfFlights(mappingSortedFlightsFare)
}

 //sorting functionality based on duration increase to decrease
const accendingDurationSortHandler = () => {
    const accendingDuration = listOfFlights.sort(function(dura:any ,dura1:any) {
         const hours = dura.duration.substring(0,2);
         const min = dura.duration.substring(4,6);
         const accendingDura = hours+min;
         const numberDuration = parseInt(accendingDura)
         const hours1 = dura.duration.substring(0,2);
         const min1 = dura1.duration.substring(4,6);
         const accendingDura1 = hours1+min1;
         const numberDuration1 = parseInt(accendingDura1);
         return  numberDuration-numberDuration1;
    })
    const mappingSortedFlights = accendingDuration.map(v => v)
    setListOfFlights(mappingSortedFlights);
 }

 //sorting functionality based on duration decrease to increase
 const decendingDurationSortHandler = () => {
     const decendingDuration = listOfFlights.sort(function(dura:any ,dura1:any) {
      const hours = dura.duration.substring(0 ,2);
      const min = dura.duration.substring(4,6);
      const numberDuration = parseInt(hours+min);
      const hours1 = dura1.duration.substring(0,2);
      const min1 = dura1.duration.substring(4,6);
      const numberDuration1 = parseInt(hours1+min1);
      return  numberDuration1-numberDuration;
     })
     const mappingSortedFlights = decendingDuration.map(v => v)
     setListOfFlights(mappingSortedFlights);
  }

//am sorting based on departure time
const departureTimeSortAMHandler = () =>{
    const depatureTime = listOfFlights.sort(function compare(a,b) {
        var time1 = parseFloat(a.departureTime.replace(':','.').replace(/[^\d.-]/g, ''));
        var time2 = parseFloat(b.departureTime.replace(':','.').replace(/[^\d.-]/g, ''));
        if(a.departureTime.match(/.*PM/)) time1 += 12; 
        if(b.departureTime.match(/.*PM/)) time2 += 12;
        if (time1 < time2) return -1;
        if (time1 > time2) return 1;
        return 0;
    })
    const mappingSortedFlights = depatureTime.map(v => v)
    setListOfFlights(mappingSortedFlights);
}

//pm sorting based on departure time
const departureTimeSortPMHandler = () =>{       
    const depatureTime = listOfFlights.sort(function compare(a,b) {
        var time1 = parseFloat(a.departureTime.replace(':','.').replace(/[^\d.-]/g, ''));
        var time2 = parseFloat(b.departureTime.replace(':','.').replace(/[^\d.-]/g, ''));
        if(a.departureTime.match(/.*PM/)) time1 += 12; 
        if(b.departureTime.match(/.*PM/)) time2 += 12;
        if (time1 > time2) return -1;
        if (time1 < time2) return 1;
        return 0;
    })
    const mappingSortedFlights = depatureTime.map(v => v)
    setListOfFlights(mappingSortedFlights);
}




    return(
        <>
            <Card className={styles.card} >
                <CalenderStrip 
                accendingFareSortHandler = {accendingFareSortHandler}
                decendingFareSortHandler = {decendingFareSortHandler}
                accendingDurationSortHandler = {accendingDurationSortHandler}
                decendingDurationSortHandler = {decendingDurationSortHandler}
                departureTimeSortAMHandler={departureTimeSortAMHandler}
                departureTimeSortPMHandler ={departureTimeSortPMHandler} 
                />
                <ListofFlights getFare={getFare} listOfFlights={listOfFlights}/>
            </Card>

            <Box boxShadow={4} style={{ position: 'fixed', bottom: '0px',height:'80px', width:'100%', backgroundColor:'#FFFFFF'}}>
                <TotalFareBlock>
                    <TotalFareSubBlock>
                            <TotalFare  getFareType={getFareType} />
                    </TotalFareSubBlock>
                </TotalFareBlock>
            </Box>
        </>
    )
}

export default OneWayListOfFlights;