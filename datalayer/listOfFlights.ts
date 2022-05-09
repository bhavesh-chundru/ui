import getConfig from 'next/config';
const {serverRuntimeConfig} = getConfig();
import axios from 'axios';
import moment from 'moment';
import { convertedCurrency } from '../helper/currencyConverter';
import * as mockData from '../mock/listofFlights';
import { getToken } from '../helper/token';

//logic to get fares with fareavailability key
const getFares=(tripFares:any,availabilityFares:any)=>{
  const fareBrands = ["EC","EP","BU"]
  const faresWithBrands=[];
  const combinedFares =[];
  tripFares.map((tripFare)=>{
    const actualFare = availabilityFares[tripFare.fareAvailabilityKey];
      combinedFares.push({ ...tripFare, ...actualFare });
  });
  if(combinedFares && combinedFares.length > 0){
    combinedFares.map((combinedFare)=>{
      combinedFare.fares.map((pc)=>{
        if(pc.productClass!=null){
        fareBrands.map((fareBrand)=>{
            if(fareBrand == pc.productClass){
              faresWithBrands.push({...pc,...combinedFare.totals}) 
             }else{
               return null;
             }
         })
        }else{
          faresWithBrands.push({...pc,...combinedFare.totals}) 
        }
      })
    })
    return faresWithBrands;
  }else{
    return null;
  }
}

//logic to convert duration of flight travel from arrival and departure time
export const getDuration = (arrivalTime:any,departureTime:any)=>{
    let {startTime,endTime,duration,hours,hourswithZero,minutes,convertedDuration}:any='';
    startTime=moment(JSON.stringify(departureTime) , "HH:mm a");
    endTime=moment(JSON.stringify(arrivalTime), "HH:mm a");
    duration = moment.duration(endTime.diff(startTime));
    hours = parseInt(duration.asHours());
    hourswithZero =hours>10?hours:'0'+hours
    minutes = parseInt(duration.asMinutes())-hours*60;
    convertedDuration = hourswithZero+'h'+' '+minutes+'min';
  return convertedDuration;
}


//extracting the list of data that is required to display in the component.
export async function getListOfFlight(origin:string,destination:string,passengerCount:Number){
  let filteredArrayofData=[];  
  let orgDest = `${origin}|${destination}`;
  const date = localStorage.getItem("Date")?localStorage.getItem("Date"):'';
  const convertDate =moment(date).format("YYYY-MM-DD");
  let {arrivalTime,departureTime,originStation,destinationStation,flightNumber,Noofstops,saverfares, premiumFare,duration, totalFares,displayFare,luxeFare}:any='';

  let flightData = mockData.data;
  await fetchData(origin,destination,passengerCount)
  .then((flightData)=>{
        flightData.data.results.map((trips)=>{
          var randomsaverFares:any = Math.floor(12000 + Math.random() * 1000);
          var randompremiumFares:any = Math.floor(13000 + Math.random() * 1000);
          var randomluxeFares:any = Math.floor(14000 + Math.random() * 1000);

          if(trips.trips && trips.trips.length>0){
            trips.trips.map((journey)=>{
              journey.journeysAvailableByMarket[orgDest].map((cardData)=>{
                const extractedFares = getFares(cardData.fares,flightData.data.faresAvailable); 
                totalFares = extractedFares;
                extractedFares.map((ec=>{
                  if(ec.productClass=="EC" || ec.productClass==null){
                    let discountedDisplayFare = convertedCurrency(ec.discountedTotal,"INR");
                    let totalDisplayFare  = convertedCurrency(ec.fareTotal,"INR");
                    return displayFare = {discountedDisplayFare,totalDisplayFare};
                  }else{
                    return null;
                  }
                }))
                cardData.segments.map((cardInfo)=>{
                     arrivalTime = moment(cardInfo.designator.arrival).format('hh:mm A');
                     departureTime = moment(cardInfo.designator.departure).format('hh.mm A');
                     originStation = cardInfo.designator.origin;
                     destinationStation = cardInfo.designator.destination;
                     flightNumber = cardInfo.identifier.carrierCode+cardInfo.identifier.identifier;
                     saverfares = convertedCurrency(randomsaverFares,"INR");
                     premiumFare = convertedCurrency(randompremiumFares,"INR");
                     luxeFare = convertedCurrency(randomluxeFares,"INR");
                     duration = getDuration(arrivalTime,departureTime);
                })
                Noofstops = cardData.stops;
                filteredArrayofData.push({
                  arrivalTime,
                  departureTime,
                  originStation,
                  destinationStation,
                  flightNumber,
                  Noofstops,
                  totalFares,
                  displayFare,
                  duration
              })
              })
            })
            
          }
        })
      }).catch((err)=>{
        return null;
      })
    return filteredArrayofData;
} 


//fetch the data from API
export async function fetchData(origin:string,destination:string,passengerCount:Number){  
    try{     
      if (serverRuntimeConfig.mock) {
        return mockData.data as any;
    } else {
          let tokenHeaders =await getToken();
          const flightList = 'http://3.111.225.218:8080/api/nsk/v4/availability';    
          const flightListApiUrl = `${flightList}/search`;
          const requestBody={
            "criteria": [
              {
                "stations": {
                  "originStationCodes": [
                    origin
                  ],
                  "destinationStationCodes": [
                    destination
                  ],
                  "searchOriginMacs": false,
                  "searchDestinationMacs": false
                },
                "dates": {
                  "beginDate": "2022-05-09"
                },
              }
            ],
            "passengers": {
              "types": [
                {
                  "count": passengerCount || 1,
                  "type": "ADT"
                }
              ]
            },
            "codes": {
              "currencyCode": "INR"
            },
            "numberOfFaresPerJourney": 10,
            "taxesAndFees": 2
          }
         let listOfFlight = await axios.post(flightListApiUrl,requestBody,{headers:tokenHeaders})
                    .then((flightDetails) => {
                       return flightDetails.data;
                    }).catch((err) => {
                        return null;
                    });
    return listOfFlight;
      }
    }catch(err){
    return null;
    }
}

