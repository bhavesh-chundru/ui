import React, { useRef, useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DoneIcon from "@mui/icons-material/Done";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import styles from "./CalenderStrip.module.css";

const tileData = [
  {
    date: "07 Jan Fri",
    fare: "5,324",
  },
  {
    date: "08 Jan Sat",
    fare: "5,873",
  },
  {
    date: "09 Jan Sun",
    fare: "6,573",
  },
  {
    date: "10 Jan Mon",
    fare: "6,743",
  },
  {
    date: "11 Jan Tue",
    fare: "6,323",
  },

  {
    date: "12 Jan Wed",
    fare: "6,983",
  },
  {
    date: "13 Jan Thu",
    fare: "6,873",
  },
  {
    date: "14 Jan Fri",
    fare: "7,373",
  },
  {
    date: "15 Jan Sat",
    fare: "7,453",
  },
  {
    date: "16 Jan Sun",
    fare: "8,173",
  },
  {
    date: "17 Jan Mon",
    fare: "8,543",
  },
  {
    date: "18 Jan Tue",
    fare: "8,973",
  },

  {
    date: "19 Jan Wed",
    fare: "8,873",
  },
  {
    date: "20 Jan Thu",
    fare: "9,173",
  },
  {
    date: "21 Jan Fri",
    fare: "9,273",
  },
  {
    date: "22 Jan Sat",
    fare: "9,333",
  },
  {
    date: "23 Jan Sun",
    fare: "9,763",
  },
  {
    date: "24 Jan Mon",
    fare: "9,873",
  },
  {
    date: "25 Jan Tue",
    fare: "9,973",
  },

  {
    date: "26 Jan Wed",
    fare: "9,993",
  },
  {
    date: "27 Jan Thu",
    fare: "10,273",
  },
  {
    date: "28 Jan Fri",
    fare: "10,373",
  },
  {
    date: "29 Jan Sat",
    fare: "10,673",
  },
  {
    date: "30 Jan Sun",
    fare: "10,873",
  },
  {
    date: "31 Jan Mon",
    fare: "11,233",
  },
  {
    date: "01 Jan Tue",
    fare: "11,373",
  },

  {
    date: "02 Jan Wed",
    fare: "11,573",
  },
  {
    date: "03 Jan Thu",
    fare: "11,873",
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
  },
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
  margin: 2px 0px 0px 0px;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
`;
const FilterBlock = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0;
  margin-top: 0;
`;
const Division = styled.div`
  padding: 14px 0px 0px 0px;
`;

const ParagraphFlightPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

const FilterPriceRangeBlock = styled.b`
  font-weight: 700;
  font-size: 14px;
  padding-left: 20px;
  margin-top: 36px;
`;

const FilterFareBlock = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const NumberOfFlightStopBlock = styled.div`
  background-color: #ffffff;
  border: 1px solid #485b60;
  box-sizing: border-box;
  border-radius: 16px;
  width: max-content;
  text-align: center;
  padding: 5px 16px;
  cursor: pointer;
  &:focus {
    background: #f0f3f5;
    border: none;
  }
`;

const DepartureTimeBlock = styled.div`
  background: #ffffff;
  border: 1px solid #485b60;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 5px 16px;
  cursor: pointer;
  &:focus {
    background: #f0f3f5;
    border: none;
  }
`;

const FilterCurrencyBlock = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding-left: 20px;
`;

//=============================================================================================================================================
//=============================================Main Function===================================================================================
//=============================================================================================================================================
export default function CalenderStrip() {
  //==================================Slider Range =============================================

  const scaleValues = (valueArray) => {
    return [scale(valueArray[0]), scale(valueArray[1])];
  };

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

  // const label = { inputProps: { 'aria-label': 'Switch demo' } };

  // ============================== Horizontal Scroll Calender =================================================================================
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  // =============== Calender Dropdown =========================================================================================================
  const [value, setValue] = useState<Date | null>(null);

  // ==============Right Drawer================================================================================================================
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //==================================Slider Range ============================================================================================

  const [sliderValue, setSliderValue] = useState([30, 140]);

  const handleSliderChange = (event, newSliderValue) => {
    setSliderValue(newSliderValue);
  };


  // ==========================Filter Functional===========================================================

  const [showSortBy, setShowSortBy] = useState(false);
  const [showSortByRemove, setshowSortByRemove] = useState(false);

  const [showPrice, setShowPrice] = useState(false);
  const [showPriceRemove, setShowPriceRemove] = useState(false);

  const [showDuration, setShowDuration] = useState(false);
  const [showDurationRemove, setShowDurationRemove] = useState(false);

  const [showDeparture, setShowDeparture] = useState(false);
  const [showDepartureRemove, setShowDepartureRemove] = useState(false);

  const handleSortBy = () => {
    setShowDepartureRemove(false);
    setShowDurationRemove(false);
    setShowPriceRemove(false);
    if (!showSortByRemove) {
      setshowSortByRemove(true);
    } else {
      if (!showSortBy) {
        setShowSortBy(true);
      } else {
        setShowSortBy(false);
        setshowSortByRemove(false);
      }
    }
  };

  const handlePrice = () => {
    setShowDepartureRemove(false);
    setShowDurationRemove(false);
    setshowSortByRemove(false);
    if (!showPriceRemove) {
      setShowPriceRemove(true);
    } else {
      if (!showPrice) {
        setShowPrice(true);
      } else {
        setShowPrice(false);
        setShowPriceRemove(false);
      }
    }
  };

  const handleDuration = () => {
    setshowSortByRemove(false);
    setShowPriceRemove(false);
    setShowDepartureRemove(false);

    if (!showDurationRemove) {
      setShowDurationRemove(true);
    } else {
      if (!showDuration) {
        setShowDuration(true);
      } else {
        setShowDuration(false);
        setShowDurationRemove(false);
      }
    }
  };

  const handleDeparture = () => {
    setshowSortByRemove(false);
    setShowPriceRemove(false);
    setShowDurationRemove(false);

    if (!showDepartureRemove) {
      setShowDepartureRemove(true);
    } else {
      if (!showDeparture) {
        setShowDeparture(true);
      } else {
        setShowDeparture(false);
        setShowDepartureRemove(false);
      }
    }
  };

  const [ins, setIns] = useState(0);

  const nextValuePlus = () => {
    setIns(ins + 1);
  };

  const previousValuePlus = () => {
    setIns(ins - 1);
  };

  const handleClickData = (valuedata) => {
    setIns(valuedata);
  };

  return (
    <>
      <Box sx={{ marginTop: "10px" }}>
        {/* <Box  style={{marginInline:'2%'}}>
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
          </Box> */}

        {/* ==============Calender Code ==============================================================================================*/}

        <Box
          sx={{
            padding: "10px 10px 10px 10px",
            backgroundColor: "#F5F5F5",
            marginTop: "10px",
          }}
          className={styles.calenBlockWrap}
        >
          <Box className={styles.calenBlock}>
            <Box className={styles.blocks}>
              <Box
                className={styles.leftClick}
                onClick={() => {
                  if (ins >= 4) {
                    scroll(-168);
                    previousValuePlus();
                  } else {
                    previousValuePlus();
                  }
                }}
              >
                <ArrowBackIosNewIcon className={styles.iconAll} />
              </Box>
            </Box>

            <Box className={styles.calenAllBlock}>
              <GridList
                style={{
                  height: "80px",
                  flexWrap: "nowrap",
                  display: "flex",
                  scrollBehavior: "smooth",
                  width: "101%",
                }}
                id={styles.gridlist}
                ref={ref}
              >
                {tileData.map((tile, index) => (
                  <GridListTile
                    key={index}
                    onClick={() => handleClickData(index)}
                    //=====Horizontal Calendar Next by next active class onClick ====================

                    id={index == ins ? "activeCalenderList" : ""}
                    className={styles.gridListBlock}
                    style={{
                      width: 78,
                      textAlign: "center",
                      height: "80px",
                    }}
                  >
                    <Box className={styles.calenList}>
                      <CalenderBlock>{tile.date}</CalenderBlock>
                      <CalenderBlock>&#8377; {tile.fare}</CalenderBlock>
                    </Box>
                  </GridListTile>
                ))}
              </GridList>
            </Box>

            <Box className={styles.blocks}>
              <Box
                className={styles.rightClick}
                onClick={() => {
                  if (ins <= 4) {
                    nextValuePlus();
                  } else {
                    scroll(168);
                    nextValuePlus();
                  }
                }}
              >
                <ArrowForwardIosIcon className={styles.iconAll} />
              </Box>
            </Box>

            <Box className={styles.calenIconblocks}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  components={{
                    OpenPickerIcon: DateRangeIcon,
                  }}
                  renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box>{InputProps?.endAdornment}</Box>
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Box>

          {/* ===============Filter Block=========================================================================================================== */}

          <Box className={styles.filterMainBlock}>
            <Box className={styles.fliterSubBlock}>
              <FilterBlock
                className={styles.filterBlock}
                onClick={handleSortBy}
              >
                {showSortByRemove ? (
                  showSortBy ? (
                    <ArrowUpwardIcon style={{ fontSize: 18 }} />
                  ) : (
                    <ArrowDownwardIcon style={{ fontSize: 18 }} />
                  )
                ) : (
                  ""
                )}
                Sort By
              </FilterBlock>

              <FilterBlock className={styles.filterBlock} onClick={handlePrice}>
                {showPriceRemove ? (
                  showPrice ? (
                    <ArrowUpwardIcon style={{ fontSize: 18 }} />
                  ) : (
                    <ArrowDownwardIcon style={{ fontSize: 18 }} />
                  )
                ) : (
                  ""
                )}
                Price
              </FilterBlock>

              <FilterBlock
                className={styles.filterBlock}
                onClick={handleDuration}
              >
                {showDurationRemove ? (
                  showDuration ? (
                    <ArrowUpwardIcon style={{ fontSize: 18 }} />
                  ) : (
                    <ArrowDownwardIcon style={{ fontSize: 18 }} />
                  )
                ) : (
                  ""
                )}
                Duration
              </FilterBlock>

              <FilterBlock
                className={styles.filterBlock}
                onClick={handleDeparture}
              >
                {showDepartureRemove ? (
                  showDeparture ? (
                    <ArrowUpwardIcon style={{ fontSize: 18 }} />
                  ) : (
                    <ArrowDownwardIcon style={{ fontSize: 18 }} />
                  )
                ) : (
                  ""
                )}
                Department Time
              </FilterBlock>
            </Box>
          </Box>
        </Box>
      </Box>

      <Drawer
        style={{ backgroundColor: "red" }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div style={{ borderRadius: "16px 0px 0px 0px", width: "360px" }}>
          <IconButton
            onClick={handleDrawerClose}
            style={{ marginLeft: "20px" }}
          >
            {theme.direction === "rtl" ? "" : <ClearIcon />}
          </IconButton>{" "}
          <b style={{ position: "relative", top: "2px", right: "4px" }}>
            Filter
          </b>
        </div>

        <FilterPriceRangeBlock>
          Price range : ₹{JSON.stringify(scaleValues(sliderValue)[0])} - ₹
          {JSON.stringify(scaleValues(sliderValue)[1])}
        </FilterPriceRangeBlock>

        <Box sx={{ width: "330px", paddingLeft: "20px" }}>
          <Slider
            style={{ color: "#FF3600" }}
            min={30}
            step={1}
            max={140}
            // aria-label="Always visible"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </Box>

        <Box
          sx={{
            width: "310px",
            marginLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FilterFareBlock>&#8377; 2200 </FilterFareBlock>
          <FilterFareBlock>&#8377; 6600</FilterFareBlock>
        </Box>

        <Box sx={{ width: "310px", marginTop: "20px" }}>
          <FilterPriceRangeBlock>Number of stops</FilterPriceRangeBlock>
        </Box>

        <Box
          sx={{
            width: "330px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "15px",
          }}
        >
          <NumberOfFlightStopBlock>
            <DoneIcon style={{ fontSize: "16px", textAlign: "center" }} />{" "}
            Nonstop
          </NumberOfFlightStopBlock>
          <NumberOfFlightStopBlock>
            <DoneIcon style={{ fontSize: "16px", textAlign: "center" }} /> 1
            Stop
          </NumberOfFlightStopBlock>
          <NumberOfFlightStopBlock>
            <DoneIcon style={{ fontSize: "16px", textAlign: "center" }} /> 2
            Stops
          </NumberOfFlightStopBlock>
        </Box>

        <Box sx={{ width: "330px", marginTop: "20px" }}>
          <FilterPriceRangeBlock>Departure Time</FilterPriceRangeBlock>
        </Box>

        <Box
          sx={{
            width: "360px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ position: "relative", left: "16px" }}
          >
            <Grid item xs={6}>
              <DepartureTimeBlock>
                {" "}
                <DoneIcon style={{ fontSize: "16px" }} /> 12am-6am • 2
              </DepartureTimeBlock>
            </Grid>
            <Grid item xs={6} style={{ marginLeft: "-10px" }}>
              <DepartureTimeBlock>
                <DoneIcon style={{ fontSize: "16px" }} /> 6am-12pm • 0
              </DepartureTimeBlock>
            </Grid>
            <Grid item xs={6}>
              <DepartureTimeBlock>
                <DoneIcon style={{ fontSize: "16px" }} />
                12pm-4pm • 3
              </DepartureTimeBlock>
            </Grid>
            <Grid item xs={6} style={{ marginLeft: "-10px" }}>
              <DepartureTimeBlock>
                <DoneIcon style={{ fontSize: "16px" }} /> 4pm-8pm • 1
              </DepartureTimeBlock>
            </Grid>
            <Grid item xs={6}>
              <DepartureTimeBlock>
                <DoneIcon style={{ fontSize: "16px" }} /> 8pm-12am • 3
              </DepartureTimeBlock>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "330px", marginTop: "20px" }}>
          <FilterPriceRangeBlock>Currency</FilterPriceRangeBlock>
        </Box>

        <Box
          sx={{
            width: "330px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FilterCurrencyBlock>Currency - &#8377;</FilterCurrencyBlock>
          <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
        </Box>

        <Box
          sx={{
            width: "350px",
            position: "fixed",
            bottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0px 0px 20px",
          }}
        >
          <Button
            variant="outlined"
            style={{
              backgroundColor: "white",
              width: "48%",
              borderRadius: "8px 0px 8px 8px",
              textTransform: "none",
              border: "1px solid black",
              color: "black",
            }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FF3600",
              width: "48%",
              borderRadius: "8px 0px 8px 8px",
              textTransform: "none",
            }}
          >
            Apply 4
          </Button>
        </Box>
      </Drawer>

      <style>
        {`
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

                    `}
      </style>
    </>
  );
}
