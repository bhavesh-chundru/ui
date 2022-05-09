import React,{useRef, useState,useEffect} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DoneIcon from '@mui/icons-material/Done';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {  useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import styles from './CalenderStrip.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
import MobileDatePicker from '@mui/lab/MobileDatePicker';





const tileData = [

{
    date: '07 Jan Fri',
    fare: '5,324'
},
{
  date: '08 Jan Sat',
  fare: '5,873'
},
{
  date: '09 Jan Sun',
  fare: '6,573'
},
{
  date: '10 Jan Mon',
  fare: '6,743'
},
{
  date: '11 Jan Tue',
  fare: '6,323'
},

{
  date: '12 Jan Wed',
  fare: '6,983'
},
{
  date: '13 Jan Thu',
  fare: '6,873'
},
{
  date: '14 Jan Fri',
  fare: '7,373'
},
{
  date: '15 Jan Sat',
  fare: '7,453'
},
{
  date: '16 Jan Sun',
  fare: '8,173'
},
{
  date: '17 Jan Mon',
  fare: '8,543'
},
{
  date: '18 Jan Tue',
  fare: '8,973'
},

{
  date: '19 Jan Wed',
  fare: '8,873'
},
{
  date: '20 Jan Thu',
  fare: '9,173'
},
{
  date: '21 Jan Fri',
  fare: '9,273'
},
{
  date: '22 Jan Sat',
  fare: '9,333'
},
{
  date: '23 Jan Sun',
  fare: '9,763'
},
{
  date: '24 Jan Mon',
  fare: '9,873'
},
{
  date: '25 Jan Tue',
  fare: '9,973'
},

{
  date: '26 Jan Wed',
  fare: '9,993'
},
{
  date: '27 Jan Thu',
  fare: '10,273'
},
{
  date: '28 Jan Fri',
  fare: '10,373'
},
{
  date: '29 Jan Sat',
  fare: '10,673'
},
{
  date: '30 Jan Sun',
  fare: '10,873'
},
{
  date: '31 Jan Mon',
  fare: '11,233'
},
{
  date: '01 Jan Tue',
  fare: '11,373'
},

{
  date: '02 Jan Wed',
  fare: '11,573'
},
{
  date: '03 Jan Thu',
  fare: '11,873'
},   
];


//==============Slider Data============================
const followersMarks = [
  {
    value: 0,
    scaledValue: 1000,
  },
  {
    value: 10,
    scaledValue: 2000,
  },
  {
    value: 20,
    scaledValue: 3000,
  },
  {
    value: 35,
    scaledValue: 4000,
  },
  {
    value: 40,
    scaledValue: 5000,
  },
  {
    value: 50,
    scaledValue: 6000,
  },
  {
    value: 60,
    scaledValue: 7000,
  },
  {
    value: 70,
    scaledValue: 8000,
  },
  {
    value: 80,
    scaledValue: 9000,
  }
];












// const DrawerHeader = (({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

const CalenderBlock = styled.p`
font-weight: 700;
font-size: 12px;
margin:2px 0px 0px 0px;
` 

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
`
const FilterBlock = styled.p` 
    font-weight: 600;
    font-size: 14px;
    margin-bottom:0;
    margin-top:0;
`
   const Division = styled.div`
    padding: 14px 0px 0px 0px;
  `



  const NumberOfFlightStopBlock = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #485B60;
  box-sizing: border-box;
  border-radius: 16px;
  width: max-content;
  text-align: center;
  padding: 5px 16px;
  cursor: pointer;
  &:focus {
    background: #F0F3F5;
    border: none;
  }
 
  `



  const FilterCurrencyBlock = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-top:3px;
  `


   

//=============================Filter Pop Up Styled Component ======================================================================

const FilterPopUpHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  border-bottom:1px solid #A0A0A0;
  width: 100%;
  padding: 1rem 1.5rem 1rem 1.5rem;
  height: 3.563rem;
`

const RefineResultBlock = styled.div`
  font-weight: 700;
  font-size: 18px;
`

const PriceRangeBlock = styled.div`
  height: 7.313rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
`

const NumberOfStopBlock = styled.div`
  color: #485B60;
  width:100%;
  height: 6.625rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-bottom:4px solid #F5F5F5;
`

const DepartureTimeBlock = styled.div`
  width: 100%;
  height: 9.25rem;
  padding: 1rem 1.5rem;
  border-bottom:4px solid #F5F5F5;
`

const CurrencyIndianBlock = styled.div`
  width: 100%;
  height: 5.563rem;
  padding: 1rem 1.5rem;
`

const ClearApplyButtonBlock = styled.div`
  width: 100%;
  height: 5.45rem;
  padding: 1.2rem 1.5rem;
  background-color:#F5F5F5;
  display:flex;
  justify-content:center;
`


const ParagraphFlightPrice = styled.p`
font-weight: 600;
font-size: 16px; 
`


const FilterSubHeadingBlock = styled.b`
  font-weight: 700;
  font-size: 16px;
  color: #333333;
`

const FilterFareBlock = styled.div`
font-weight: 500;
font-size: 14px
color: #666666;;
`
const FilteringDivisionBlock = styled.div`
width: 65%;
margin-top: 8px;
text-align: center;
`
const FilteringDivisionDepartureBlock = styled.div`
width: 100%;
margin-top: 8px;
text-align: center;
`

const FilteringDivisionDeparturePart2Block = styled.div`
width: 65%;
margin-top: 8px;
text-align: center;
`


const useStyles = makeStyles({
  root: {
    "&>.MuiSlider-thumb": {
      "&:nth-child(4)": {
        color: "#FF6300 !important"
      },
      "&:nth-child(3)": {
        color: "white !important",
        border: '2px solid #FF6300 !important'
      }
    }
  }
});


//=============================================================================================================================================
//=============================================Main Function===================================================================================
//=============================================================================================================================================
export default function CalenderStrip(props:any) 
{
  const classes = useStyles();




    //==================================Slider Range =============================================

   
  const scaleValues = (valueArray) => {
    return [scale(valueArray[0]),scale(valueArray[1])]
    }

const scale = (value) => {
if (value === undefined) {
  return undefined;
}

const previousMarkIndex = Math.floor(value / 25);
const previousMark = followersMarks[previousMarkIndex];
const remainder = value % 25;
if (remainder === 0) {
  return previousMark.scaledValue;
}

const nextMark = followersMarks[previousMarkIndex + 1];
const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
return remainder * increment + previousMark.scaledValue;
};


//=============End Slider value and fun ctions==========================================
  const label = { inputProps: { 'aria-label': 'Switch demo' } };


// ============================== Horizontal Scroll Calender =================================================================================
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

// =============== Calender Dropdown =========================================================================================================
  const [dateValue, setDateValue] = useState<Date | null>(null);


 //==================================Slider Range ============================================================================================
  const [sliderValue, setSliderValue] = useState([30, 140]);
  const handleSliderChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };

// ================================Number of Flight Stop Section==================================================================
   
    const [toggleDepartureValue, setToggleDepartureValue] = useState( () => [] );

    const handleDepartureTime = ( event: React.MouseEvent<HTMLElement>, newClick: number[]) => {
      setToggleDepartureValue(newClick);
    };
    const removeAllSelectedFilter = ()=>{
      setToggleDepartureValue([])
    }


  //================Filter Pop Up Functionalities =======================================================================================
  const [openFilterPopUp, setOpenFilterPopUp] = useState(false);
  const themeFilterPopUp = useTheme();
  const fullScreenFilterPopUp = useMediaQuery(themeFilterPopUp.breakpoints.down('md'));
  const handleFilterPopUp = () => {
    setOpenFilterPopUp(true);
  };
  const handleFliterClose = () => {
    setOpenFilterPopUp(false);
  };


  // ==========================Sorting Functional===========================================================
  const [showPrice, setShowPrice] =  useState(false);
  const [showPriceRemove, setShowPriceRemove] =  useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [showDurationRemove, setShowDurationRemove] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false)
  const [showDepartureRemove, setShowDepartureRemove] = useState(false);


  const handlePrice = () =>{

    setShowDepartureRemove(false)
    setShowDurationRemove(false)
    if(!showPriceRemove)
     {
      setShowPriceRemove(true)
      props.accendingFareSortHandler();
     }
     else
     {
      if(!showPrice)
      {
        setShowPrice(true)
        props.decendingFareSortHandler()
      }
      else
      {
        setShowPrice(false)
        setShowPriceRemove(false)
      }
    }
  }


  const handleDuration = () =>{

    setShowPriceRemove(false)
    setShowDepartureRemove(false)

    if(!showDurationRemove)
     {
      setShowDurationRemove(true)
      props.accendingDurationSortHandler()
     }
     else
     {
      if(!showDuration)
      {
        setShowDuration(true)
        props.decendingDurationSortHandler()
      }
      else
      {
        setShowDuration(false)
        setShowDurationRemove(false)
      }
    }
  }


  
 const handleDeparture = () =>{
      setShowPriceRemove(false)
      setShowDurationRemove(false)

      if(!showDepartureRemove)
      {
        setShowDepartureRemove(true)
        props.departureTimeSortAMHandler()
      }
      else{
      if(!showDeparture)
      {
        setShowDeparture(true)
        props.departureTimeSortPMHandler()
      }
      else
      {
        setShowDeparture(false)
        setShowDepartureRemove(false)
      }
    }
  }





// Scroll Functionalities==============================================================================

  const [ins,setIns] = useState(0);
  const nextValuePlus =()=>{
    setIns(ins+1)
  }
  const previousValuePlus = ()=>{
    setIns(ins-1)
  }
  const handleClickData = (valuedata)=>{
    setIns(valuedata) 
  }


  return (
      <>

<Box sx={{marginTop:"10px"}}>
          <Box  style={{marginInline:'2%'}}>
            <Grid container  style={{display:'flex',justifyContent:'space-between'}}>
                <Grid item xs={8.5}>
                  <Box className={styles.bookingDiscount}> 
                    <ErrorOutlineOutlinedIcon style={{ transform: 'rotate(180deg)'}}/> &nbsp; 
                      <Division>
                        <Paragraph>Use code <b>10FIRST</b> to get 10% Off on your first booking.</Paragraph>
                      </Division>
                  </Box>
                </Grid> 
                <Grid item xs={2.5} 
                 className={styles.trackFlightPrice}
                >                 
                  <TimelineIcon/> <ParagraphFlightPrice> <Division >Track flight prices  </Division></ParagraphFlightPrice>   <Switch {...label} color="default" />  
                </Grid>
                <Grid item xs={0.5} className={styles.trackFlightPrice} onClick={handleFilterPopUp}>
                  <Button>
                   <FilterListIcon style={{color:"#485B60"}}/>
                  </Button>
                </Grid>
            </Grid>
          </Box>




{/* ==============Calender Code ==============================================================================================*/}

   <Box sx={{padding:'10px 10px 10px 10px', backgroundColor:'#F5F5F5',marginTop:'10px'}} className={styles.calenBlockWrap} > 
        <Box className={styles.calenBlock}>

                  <Box className={styles.blocks}>
                      <Box className={styles.leftClick}   onClick={()=>
                        {
                          if(ins>=4){
                            scroll(-168)
                            previousValuePlus()
                          }
                          else{
                            previousValuePlus()
                          }
                          
                        }}>      
                        <ArrowBackIosNewIcon className={styles.iconAll} />
                      </Box>
                  </Box>
                  
                    <Box className={styles.calenAllBlock}>

                              <GridList  
                                    className={styles.scrollleft}
                                    id={styles.gridlist}
                                    
                                    ref={ref}>

                                    {tileData.map((tile, index) => (


                                  <GridListTile 
                                  key={index}

                                  onClick={()=>handleClickData(index)}

                                  //=====Horizontal Calendar Next by next active class onClick ====================

                                   id={ index == ins ? 'activeCalenderList' : ''} 

                                   className={styles.gridListBlock} 

                                    style={{
                                            width:130,
                                            textAlign:'center',
                                            height:'80px'
                                        }}>

                                     <Box  className={styles.calenList}>
                                          <CalenderBlock>{tile.date}</CalenderBlock>
                                          <CalenderBlock>&#8377; {tile.fare}</CalenderBlock>
                                      </Box>

                                  </GridListTile>

                                  ))}
                              </GridList>
                    </Box>
          

                <Box className={styles.blocks}>   
                  <Box className={styles.rightClick} onClick={()=>
                    {
                      if(ins<=4){
                        nextValuePlus()
                      }
                      else{
                        scroll(168)
                        nextValuePlus()
                      }

                    }}><ArrowForwardIosIcon className={styles.iconAll}/></Box>
                </Box>


                <Box 
                
                
                className={styles.calenIconblocks}>
                   <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                        
                          value={dateValue}
                      
                          onChange={(newDateValue) => {
                            setDateValue(newDateValue);
                          }}
                          components={{
                            OpenPickerIcon: DateRangeIcon
                          }}
                          renderInput={({ inputRef, inputProps, InputProps }) => (

                            <Box >
                              {InputProps?.endAdornment}
                            </Box>
                          )}
                        />
                      </LocalizationProvider>


                </Box>

       </Box>





        {/* ===============Filter Block=========================================================================================================== */}


        <Box className={styles.filterMainBlock}>
            <Box className={styles.fliterSubBlock}>
                <FilterBlock className={styles.filterBlock} >
                    Sort By
                  </FilterBlock>

                <FilterBlock className={styles.filterBlock} onClick={handlePrice}>
                    {showPriceRemove ? showPrice ? <ArrowUpwardIcon style={{ fontSize: 18}}/> : <ArrowDownwardIcon style={{ fontSize: 18}}/>: ""  }Price
                </FilterBlock>  
 
                <FilterBlock  className={styles.filterBlock} onClick={handleDuration}>
                      {showDurationRemove ? showDuration ? <ArrowUpwardIcon style={{ fontSize: 18}}/> : <ArrowDownwardIcon style={{ fontSize: 18}}/> : "" }Duration
                </FilterBlock>

                <FilterBlock className={styles.filterBlock} onClick={handleDeparture}>
                      {showDepartureRemove ? showDeparture ? <ArrowUpwardIcon style={{ fontSize: 18}}/> : <ArrowDownwardIcon style={{ fontSize: 18}}/> : "" }Departure Time
                </FilterBlock> 
            </Box>
        </Box>
    </Box>
  </Box>



    {/* <Drawer
        style={{ backgroundColor:'red'}}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div style={{borderRadius:'16px 0px 0px 0px',width: '360px' }}>
          <IconButton onClick={handleDrawerClose} style={{  marginLeft: '20px'}}>
            {theme.direction === 'rtl' ? "" : <ClearIcon />}
          </IconButton> <b style={{position: 'relative' , top: '2px', right: '4px' }}>Filter</b>
        </div> */}
 {/*======Start=================== Number of Stop And Departure Time Filtering Section===================================================== */}
           {/* <Grid container  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{position:'relative' , left: '16px'}}>
                
              <Grid item xs={6} >
                  <DepartureTimeBlock> <DoneIcon style={{fontSize:'16px'}}/> 12am-6am • 2</DepartureTimeBlock>
              </Grid>
              <Grid item xs={6} style={{ marginLeft:'-10px'}}>
                  <DepartureTimeBlock><DoneIcon style={{fontSize:'16px' }}/> 6am-12pm • 0</DepartureTimeBlock>
              </Grid>
             

              <Grid item xs={6}>
                  <DepartureTimeBlock><DoneIcon style={{fontSize:'16px'}}/>12pm-4pm • 3</DepartureTimeBlock>
              </Grid>
              <Grid item xs={6} style={{ marginLeft:'-10px'}} >
                  <DepartureTimeBlock><DoneIcon style={{fontSize:'16px'}}/> 4pm-8pm • 1</DepartureTimeBlock>
              </Grid>
              <Grid item xs={6}>
                  <DepartureTimeBlock><DoneIcon style={{fontSize:'16px'}}/> 8pm-12am • 3</DepartureTimeBlock>
              </Grid>
            </Grid> */}
    
{/*======End=================== Number of Stop And Departure Time Filtering Section===================================================== */}
      {/* </Drawer> */}



{/* ======================== Filter Pop Up Screen =============================================================================== */}

      <Dialog
        fullScreen={fullScreenFilterPopUp}
        open={openFilterPopUp}
        onClose={handleFliterClose}
        aria-labelledby="responsive-dialog-title"
      >

        <FilterPopUpHeading>
          <RefineResultBlock>Refine results</RefineResultBlock>
          <RefineResultBlock onClick={handleFliterClose}><ClearIcon/></RefineResultBlock>
        </FilterPopUpHeading>

        <PriceRangeBlock>
               <FilterSubHeadingBlock>Price range : ₹{JSON.stringify(scaleValues(sliderValue)[0])} - ₹{JSON.stringify(scaleValues(sliderValue)[1])}</FilterSubHeadingBlock>

              <Box sx={{ width: '100%'}}>
                <Slider
                  style={{color: '#FF3600'}}
                  min={30}
                  step={1}
                  max={140}
                  // aria-label="Always visible"
                  value={sliderValue}
                  className={classes.root}
                
                  onChange={handleSliderChange}
                />


              </Box>

              <Box sx={{width:'100%', display:'flex', justifyContent:'space-between' }}>


                  <FilterFareBlock>&#8377; 2200 </FilterFareBlock>
                  <FilterFareBlock>&#8377; 6600</FilterFareBlock>
              </Box>
        </PriceRangeBlock>

        <NumberOfStopBlock>
          <FilterSubHeadingBlock>Number of stops</FilterSubHeadingBlock>

          <FilteringDivisionBlock>

            <ToggleButtonGroup
                value={toggleDepartureValue}
                color="primary"
                onChange={handleDepartureTime}
                className={styles.toggleButtonFlightStopBlock}
              >

                <ToggleButton value="Nonstop" style={{ borderRadius:'16px ', border: '1px solid #485B60'}} className={styles.toggleFlightStopBlock} >
                        <DoneIcon className={styles.doneIconFlightStopBlock}/> Nonstop
                  </ToggleButton>

                  <ToggleButton value=" 1 Stop" style={{ borderRadius:'16px',border: '1px solid #485B60'}} className={styles.toggleFlightStopBlock}>
                      <DoneIcon className={styles.doneIconFlightStopBlock}/> 1 Stop
                  </ToggleButton>
                  <ToggleButton value="2 Stops" style={{ borderRadius:'16px',border: '1px solid #485B60'}} className={styles.toggleFlightStopBlock}>
                        <DoneIcon className={styles.doneIconFlightStopBlock}/> 2 Stops
                  </ToggleButton>
              </ToggleButtonGroup>

            </FilteringDivisionBlock>
        </NumberOfStopBlock>

        <DepartureTimeBlock>
           <FilterSubHeadingBlock>Departure Time</FilterSubHeadingBlock>
           <FilteringDivisionDepartureBlock>
            
            <ToggleButtonGroup
                    value={toggleDepartureValue}
                    onChange={handleDepartureTime}
                    color="primary"
                    className={styles.toggleButtonFlightStopBlock}
                    
                  >
                     <ToggleButton value="12am-6am • 2" className={styles.toggleDepartureTimeBlock} style={{ borderRadius:'16px', border: '1px solid #485B60'}}>
                           <DoneIcon className={styles.doneIconFlightStopBlock}/>12am-6am • 2
                        </ToggleButton>
    
                        <ToggleButton value="6am-12pm • 1" className={styles.toggleDepartureTimeBlock} style={{ borderRadius:'16px', border: '1px solid #485B60'}}>
                        <DoneIcon className={styles.doneIconFlightStopBlock}/>6am-12pm • 1
                      </ToggleButton>

                      <ToggleButton value="8pm-12am • 3" className={styles.toggleDepartureTimeBlock} style={{ borderRadius:'16px', border: '1px solid #485B60'}}>
                     <DoneIcon className={styles.doneIconFlightStopBlock}/>8pm-12am • 3
                      </ToggleButton>
            </ToggleButtonGroup>
            </FilteringDivisionDepartureBlock>
    
            <FilteringDivisionDeparturePart2Block>
            <ToggleButtonGroup
                    value={toggleDepartureValue}
                    onChange={handleDepartureTime}
                    color="primary"
                    className={styles.toggleButtonFlightStopBlock}
                  >
                     <ToggleButton value="6am-12pm • 0" className={styles.toggleDepartureTimeBlock} style={{ borderRadius:'16px', border: '1px solid #485B60'}}>
                     <DoneIcon className={styles.doneIconFlightStopBlock}/> 6am-12pm • 0
                        </ToggleButton>
    
                        <ToggleButton value="12pm-4pm • 3" className={styles.toggleDepartureTimeBlock} style={{ borderRadius:'16px', border: '1px solid #485B60'}}>
                        <DoneIcon className={styles.doneIconFlightStopBlock}/>12pm-4pm • 3
                      </ToggleButton>
            </ToggleButtonGroup>
            </FilteringDivisionDeparturePart2Block>
    
        </DepartureTimeBlock>

        <CurrencyIndianBlock>
            <FilterSubHeadingBlock>Currency</FilterSubHeadingBlock>

        

        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          
            <FilterCurrencyBlock>Currency - &#8377;</FilterCurrencyBlock>
            <ArrowForwardIosIcon style={{fontSize:'16px'}}/>
        </Box>
        </CurrencyIndianBlock>
       
        <ClearApplyButtonBlock>
        <Box sx={{width:'60%', bottom: '10px', display:'flex', justifyContent:'space-between'}}>
              <Button variant="outlined" style={{backgroundColor:'white',width:'48%',borderRadius:'8px 0px 8px 8px',textTransform:'none',border:'1px solid black',color:'black'}} onClick={removeAllSelectedFilter}>Clear</Button>
              <Button variant="contained" style={{backgroundColor:'#FF3600',width:'48%',borderRadius:'8px 0px 8px 8px',textTransform:'none'}}>Apply {toggleDepartureValue.length }</Button>
        </Box>
        </ClearApplyButtonBlock>
       
      </Dialog>


      

           
            <style>
                {
                    `
                    #activeCalenderList {
                      color: #FF3600;
                      border-bottom: 3px solid #FF3600 ;
                    }
                    

                    .css-jsexje-MuiSwitch-thumb{
                      background-color: #FF6300;
                    }

                    .css-1ozefeb {
                      margin: 215px 0px 0px 1150px;
                   }
                   .css-18sg6k4-MuiPaper-root-MuiDrawer-paper{
                     border-radius: 16px 0px 0px 0px;
                   }
                   .css-d9c359-MuiButtonBase-root-MuiToggleButton-root.Mui-selected {
                     color:#333333;
                     background-color:#E1E1DF;
                     font-weight: 500;
                     border:1px solid #E1E1DF;
                   }

                   .css-1t1j96h-MuiPaper-root-MuiDialog-paper{
                    width:35.125rem;
                    overflow:hidden;
                    border-radius: 16px 0px 16px 16px;
                   
                   }

                   .css-1gv0vcd-MuiSlider-track {
                     background-color:#FF6300;
                   }

               
                    `
                }
            </style>
    </>
  );
}