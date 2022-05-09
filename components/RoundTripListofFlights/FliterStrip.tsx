import React , { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import DoneIcon from '@mui/icons-material/Done';
import styled from 'styled-components';
import styles from './CalenderStrip.module.css';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {  useTheme } from '@mui/material/styles';



const Division = styled.div`
    padding: 14px 0px 0px 0px;
  `
  const ParagraphFlightPrice = styled.p`
  font-weight: 600;
  font-size: 16px; 
  `
  const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
`
const FilterPriceRangeBlock = styled.b`
    font-weight: 700;
    font-size: 14px;
    padding-left: 20px;
    margin-top: 36px;
  `
  const FilterFareBlock = styled.div`
  font-weight: 500;
  font-size: 14px
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
 const DepartureTimeBlock = styled.div`
 background: #FFFFFF;
 border: 1px solid #485B60;
 box-sizing: border-box;
 border-radius: 16px;
 padding: 5px 16px;
 cursor: pointer;
 &:focus {
   background: #F0F3F5;
   border: none;
 }`

 const FilterCurrencyBlock = styled.div`
    font-weight: 500;
    font-size: 14px;
    padding-left: 20px;
  `

const FliterStrip = () => {


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


    const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  //==================================Slider Range ============================================================================================


  const [sliderValue, setSliderValue] = useState([30, 140]);


  const handleSliderChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };


  return (
    <div>
         <Box sx={{marginTop:'10px'}}>
            <Box  style={{marginInline:'2%'}}>
            <Grid container  style={{display:'flex',justifyContent:'space-between'}}>
                <Grid item xs={8.5}>
                  <Box className={styles.bookingDiscount}> 
                    <ErrorOutlineOutlinedIcon style={{ transform: 'rotate(180deg)'}}/> &nbsp; 
                      <Division >
                        <Paragraph>Use code <b>10FIRST</b> to get 10% Off on your first booking.</Paragraph>
                      </Division>
                  </Box>
                </Grid> 
                <Grid item xs={2.5} 
                 className={styles.trackFlightPrice}
                >                 
                  <TimelineIcon/> <ParagraphFlightPrice> <Division >Track flight prices  </Division></ParagraphFlightPrice>   <Switch {...label} color="default" />  
                </Grid>
                <Grid item xs={0.5} className={styles.trackFlightPrice} onClick={handleDrawerOpen}>
                  <Button>
                   <FilterListIcon style={{color:"#485B60"}}/>
                  </Button>
                </Grid>
            </Grid>
          </Box>
            </Box>
            <Drawer
        style={{ backgroundColor:'red'}}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div style={{borderRadius:'16px 0px 0px 0px',width: '360px' }}>
          <IconButton onClick={handleDrawerClose} style={{  marginLeft: '20px'}}>
            {theme.direction === 'rtl' ? "" : <ClearIcon />}
          </IconButton> <b style={{position: 'relative' , top: '2px', right: '4px' }}>Filter</b>
        </div>

        <FilterPriceRangeBlock>Price range : ₹{JSON.stringify(scaleValues(sliderValue)[0])} - ₹{JSON.stringify(scaleValues(sliderValue)[1])}</FilterPriceRangeBlock>

        <Box sx={{ width: '330px',paddingLeft:'20px' }}>
          <Slider
            style={{color: '#FF3600'}}
            min={30}
            step={1}
            max={140}
            // aria-label="Always visible"
            value={sliderValue}
          
           
            onChange={handleSliderChange}
           
            
          />
    

        </Box>

        <Box sx={{width:'310px', marginLeft:'20px',display:'flex', justifyContent:'space-between' }}>
       

            <FilterFareBlock>&#8377; 2200 </FilterFareBlock>
            <FilterFareBlock>&#8377; 6600</FilterFareBlock>
        </Box>

        <Box sx={{width:'310px',marginTop:'20px'}}>
            <FilterPriceRangeBlock>Number of stops</FilterPriceRangeBlock>
        </Box>

        <Box sx={{width:'330px',marginTop:'20px',display:'flex',justifyContent:'space-around' , marginLeft:'15px'}}>
          <NumberOfFlightStopBlock><DoneIcon style={{fontSize:'16px' , textAlign:'center' }}/> Nonstop</NumberOfFlightStopBlock>
          <NumberOfFlightStopBlock><DoneIcon style={{fontSize:'16px' , textAlign:'center' }}/> 1 Stop</NumberOfFlightStopBlock>
          <NumberOfFlightStopBlock><DoneIcon style={{fontSize:'16px' , textAlign:'center' }}/> 2 Stops</NumberOfFlightStopBlock>

        </Box>


        <Box sx={{width:'330px',marginTop:'20px'}}>
            <FilterPriceRangeBlock>Departure Time</FilterPriceRangeBlock>
        </Box>

        <Box sx={{width:'360px',marginTop:'20px',display:'flex',justifyContent:'space-between' , textAlign:'center'}}>
            
            

            <Grid container  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{position:'relative' , left: '16px'}}>
              <Grid item xs={6}>
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
            </Grid>
        </Box>


        <Box sx={{width:'330px',marginTop:'20px'}}>
            <FilterPriceRangeBlock>Currency</FilterPriceRangeBlock>
        </Box>

        <Box sx={{width:'330px',marginTop:'20px',display:'flex', justifyContent:'space-between'}}>
            <FilterCurrencyBlock>Currency - &#8377;</FilterCurrencyBlock>
            <ArrowForwardIosIcon style={{fontSize:'16px'}}/>

        </Box>


        <Box sx={{width:'350px', position: 'fixed', bottom: '10px', display:'flex', justifyContent:'space-between',padding:'0px 0px 0px 20px',}}>
              <Button variant="outlined" style={{backgroundColor:'white',width:'48%',borderRadius:'8px 0px 8px 8px',textTransform:'none',border:'1px solid black',color:'black'}}>Clear</Button>
              <Button variant="contained" style={{backgroundColor:'#FF3600',width:'48%',borderRadius:'8px 0px 8px 8px',textTransform:'none'}}>Apply 4</Button>
        </Box>


        
      </Drawer>
    </div>
  )
}

export default FliterStrip