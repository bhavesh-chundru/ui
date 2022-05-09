import React, { useEffect, useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import  TextField from '@mui/material/TextField';
import PickersDay, { pickersDayClasses } from '@mui/lab/PickersDay';
import moment from 'moment';
import { fecthData } from '../../datalayer/lowFares';
import { Stack } from '@mui/material';
import * as mockData from '../../mock/lowFares';
import { convertedCurrency } from '../../helper/currencyConverter';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { useAppDispatch,useAppSelector } from "../../redux/hooks";
import { oneWay } from "../../redux/slices/bookingDataSlice";

const label = { inputProps: { 'aria-label': 'Switch demo' } }
const LowFarePricingCalender = (props: any) => {





  const presentDate = new Date();
  const NewDate = presentDate;
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, handleDateChange] = useState<Date | null>(presentDate);
  const [selectedlowFareDate, isSelectedowFareDate] = useState<String[]>([])

  const [ getLowfareData, setLowFareData ] = useState<any>( [] );
  // const dispatch = useAppDispatch();

  useEffect(()=>{
    let formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    localStorage.setItem("Date",formattedDate); 

  },[selectedDate]);
  let date=selectedDate
  // dispatch(oneWay(date))

  useEffect(() => {

    if ((props.selectedOptionOrg == 'AJL' && props.selectedOptionDest == 'AGX') || (props.selectedOptionOrg == 'AGX' && props.selectedOptionDest == 'AJL')) {
      setLowFareData( mockData.data )
    }
    else if ((props.selectedOptionOrg !== '' && props.selectedOptionDest !== '') && (props.selectedOptionOrg !== props.selectedOptionDest)) {
      fecthData(props.selectedOptionOrg, props.selectedOptionDest, presentDate)
        .then((fares: any) => {
          let data =  fares.data.lowFares;
          setLowFareData( data );
          // return getLowfareData;
        }).catch((err) => {
          return null;
        })
    } 

  }, [ props.selectedOptionOrg, props.selectedOptionDest,  ])


  

  const [checked, setChecked] = useState(false);

  const HideFare = (event) => {
    setChecked(event.target.checked)
  }
  const customToolbarReplaced = () => {
    return (<Grid className="toolBar" container spacing={2}>
      <Grid item xs={7}>

      </Grid>
    
      <Grid className="hideBtn" style={{background: "#F5F5F5",display:"flex",padding:"5px 0px"}} xs={5}>
       
       <div style={{padding:"10px 0px 10px 14px"}}>
        Hide fares
        </div>
        <div>
        <Switch sx={{color:"orange"}}  onChange={HideFare} checked={checked}  {...label} />

        </div>

        
        
        </Grid>
        
    </Grid>)
  }




  return (
    <>


      <LocalizationProvider dateAdapter={AdapterDateFns}>


        <DatePicker
        rifmFormatter={(date) => moment(date).format( 'ddd, DD MMM YYYY')}
          showToolbar={true}
          ToolbarComponent={customToolbarReplaced}
          label="Departure Date"
          value={selectedDate}
          onChange={(newValue) => {
            handleDateChange(newValue);

          }}
          renderDay={(date, _value, DayComponentProps: any) => {

            let lowPrice: any;

            let soldOut: any;
            let flightAvailable: Boolean;
            if (getLowfareData && getLowfareData.length > 0) {
              const fareData = getLowfareData.find((elem: any) => {
                return moment(elem.date).format('YYYY/MM/DD').includes(moment(date).format('YYYY/MM/DD'))
              })
              if (!fareData) return (

                <PickersDay

                  disabled
                  {...DayComponentProps}

                />


              )


              let convertedLowPrice = convertedCurrency(fareData?.price, "INR")
              lowPrice = !DayComponentProps.outsideCurrentMonth && convertedLowPrice;
              soldOut = !DayComponentProps.outsideCurrentMonth && fareData?.soldOut;
              flightAvailable = fareData.noFlights;


              return (
                <React.Fragment key={Number(date)} >

                  <Stack  spacing={3}>



                    <PickersDay
                      ToolbarComponent={() => <p>HELLO, CUSTOM TOOL BAR</p>}


                      // key="index"
                      {...DayComponentProps}
                      disabled={flightAvailable}
                      style={{

                        position: "relative", fontSize: "0.85rem",
                        width: "40px",
                        height: "40px",
                        borderRadius: "0px",
                      }}

                      sx={{
                        [`&&.${pickersDayClasses.selected}`]: {
                          backgroundColor: "#FF6300 !important",
                          borderRadius: "0px",
                        },
                        [`&&.${pickersDayClasses.today}`]: {
                          borderRadius: "0px",
                        },
                      }}
                    // ToolbarComponent={customToolbarReplaced}

                    />



                    <div style={{
                      position: "absolute",
                      top: "25px",
                      left: "2px", fontSize: "0.65rem", color: '#3d3d3d77'
                    }} className="pricing">

                      <span style={{ fontSize: "8px", color: "#666666", letterSpacing: "-1" }} className="pricing" >
                        {!checked ? (fareData.price == null) ? (
                          <p style={{ cursor: "not-allowed" }}>{soldOut ? 'Sold Out' : undefined}</p>
                        ) : (
                          <>
                            <p>{lowPrice ? lowPrice : undefined}</p>
                          </>
                        ) : null}
                      </span>
                    </div>

                  </Stack>
                </React.Fragment>
              )
            }



            else {
              return (
                <React.Fragment key={Number(date)}>
                  <Stack style={{ width: "700px important" }} spacing={3}>
                    <PickersDay
       

                      {...DayComponentProps}
                      style={{
                        position: "relative", fontSize: "0.85rem",
                        width: "40px",
                        height: "40px",
                        borderRadius: "0px",
                      }}
                      sx={{
                        [`&&.${pickersDayClasses.selected}`]: {
                          backgroundColor: "#FF6300 !important",
                          // borderRadius: "0px",
                        },
                        [`&&.${pickersDayClasses.today}`]: {
                          borderRadius: "0px",
                        },
                      }}
                    // ToolbarComponent={customToolbarReplaced}
                    />

                    <div style={{
                      position: "absolute",
                      top: "25px",
                      left: "2px", fontSize: "0.65rem", color: '#3d3d3d77'
                    }} className="pricing">
                      {/* <span style={{  }} className="pricing" ></span> */}
                    </div>
                    {/* <div style={{backgroundColor:'red'}}> <Switch {...label} /></div> */}
                  </Stack>
                </React.Fragment>
              )

            }

          }}

          minDate={presentDate}
          renderInput={(params) => (
            <>
              <TextField {...params} />
            </>
          )}
        >

        </DatePicker>

      </LocalizationProvider>

      <style>
        {
          `
          .hideBtn{
            font-size: 12px;
line-height: 18px;
/* identical to box height */

text-align: center;

color: #000000;
          }
          .toolBar{
            margin-top: 9px;
            padding: 0px 10px;
          }
          .MuiPickersDay-hiddenDaySpacingFiller{
            
            justify-content: space-evenly;
            width: 88%;
        }
        .css-1lwbda4-MuiStack-root{
          justify-content: space-evenly;
          width: 100%;
        }
        .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root{
          
          justify-content: space-evenly;
          width: 100%;
      }
      .css-1w13o7u-MuiTypography-roo{
        justify-content: space-evenly;
          width: 100%;
      }
      .css-pzwg73-MuiButtonBase-root-MuiPickersDay-root.css-pzwg73-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
        background-color: #FF6300!important;
    }
          .css-mvmu1r{
            width: 100%;
       
          }
          .css-1lwbda4-MuiStack-root{
            position:relative;
          }
    .pricing{     
       display: flex;
      
      font-weight: 500;
      font-size: 9px;
      min-width: 20px;
      
      z-index: 1;
      transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
     
      transform-origin: 100% 0%;
}
.css-1ozefeb{
  width:23%;
}
.css-1n2mv2k{
  justify-content:space-evenly;
  width:100%;
}

//
.Mui-selected{
  background: orange !important;
  border-radius: 0px;
}
.css-1lwbda4-MuiStack-root>:not(style)+:not(style) {
  margin: 0;
  /* margin-top: 24px
px
; */
}

    `
        }
      </style>
    </>

  );

}



export default LowFarePricingCalender;