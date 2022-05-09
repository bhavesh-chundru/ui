import { Container, Popper } from "@material-ui/core";
import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import * as mockData from "../../../mock/destinations";
import { AiOutlineSwap } from "react-icons/ai";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Modal from "react-modal";
import { Stack } from "@mui/material";
import Passengers from "../../common/Passengers";
import Link from "next/link";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Validation from "../../common/Validation";
import style from "./Booking.module.css";
import LowFarePricingCalender from "../../common/PricingCalender";
import { UseAutocompleteProps, Autocomplete } from "@mui/material";
import Router from "next/router";
import SwapArrow from "../../../public/svg/swapArrow.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "./Toggle";
import { useDispatch } from "react-redux";
import { useAppDispatch,useAppSelector } from "../../../redux/hooks";
import { oneWay } from "../../../redux/slices/bookingDataSlice";

toast.configure();

const currencies = [
  { value: "INR", label: "Indian Rupees" },
  { value: "USD", label: "US Dollars" },
  { value: "EUR", label: "Euro" },
  { value: "AED", label: "UAE Dirham" },
];
const AirportWrap = styled.div`
  // white-space: nowrap;
  // overflow:hidden;
  // text-overflow:ellipsis;
  display: flex;
  // justify-content:space-between;
  // max-width:300px;
`;
const OneWayTrip = () => {
  const options = mockData.data;
  const [disableDate, setDisableDate] = useState(true);
  const [value, setValue] = useState(null);
  const [dateValue, SetDateValue] = useState(new Date());
  const [selectedOptionOrg, setSelectedOptionOrg] = useState(
    mockData.data[0].IATA_code
  );
  const [selectedOptionDest, setSelectedOptionDest] = useState(
    mockData.data[1].IATA_code
  );
  const [selectedOrgCity, setSelectedOrgCity] = useState("Bangalore");
  const [selectedDestCity, setSelectedDestCity] = useState("New Delhi");
  const [currecncy, setCurrency] = useState(null);
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",

      padding: 0,
      alignText: "left",
    }),
  };

  const handleDateChange = (newValue: any) => {
    SetDateValue(newValue);
  };

  const airportList = mockData.data;

  function handleInputChangeOrg(event: any, value: any) {
    if (value) {
      setSelectedOptionOrg(value.IATA_code);
      setSelectedOrgCity(value.city_name);
    } else {
      setSelectedOptionOrg("");
      setSelectedOrgCity("");
    }
  }

  function handleInputChangeDest(event: any, value: any) {
    if (value) {
      setSelectedOptionDest(value.IATA_code);
      setSelectedDestCity(value.city_name);
    } else {
      setSelectedOptionOrg("");
      setSelectedDestCity("");
    }
  }

  useEffect(() => {
    if (selectedOptionOrg == selectedOptionDest) {
      toast.error("Origin and  Destination cannot be same", {
        position: toast.POSITION.TOP_CENTER,
      });
      // setSelectedOptionDest("");
    }
  });

  const myPopper = (props: any) => {
    return (
      <Popper
        {...props}
        style={{ maxWidth: "300px", transform: "translateX(10px)" }}
      />
    );
  };

  useEffect(() => {
    localStorage.setItem("Origin", selectedOptionOrg);
    localStorage.setItem("Dest", selectedOptionDest);
    localStorage.setItem("orginCity", selectedOrgCity);
    localStorage.setItem("destCity", selectedDestCity);

    localStorage.setItem("Calander", JSON.stringify(LowFarePricingCalender));
  }, [
    selectedOptionOrg,
    selectedOptionDest,
    selectedDestCity,
    selectedOrgCity,
  ]);

 

  const passenger=useAppSelector((state)=>state.bookingData.passenger);
  //  const date=useAppSelector((state)=>state.bookingData.date)
  

  const dispatch = useAppDispatch();
  const handleFlights = () => {
    dispatch(oneWay({ selectedOptionOrg, selectedOptionDest, selectedDestCity,
      selectedOrgCity, ...passenger }));
    Router.push({
      pathname: "/list-of-flights-one-way",
    });
  };
  //New code for origin destination value
  const [originValue, setOriginValue] = useState({});
  const [destinationValue, setDestinationValue] = useState(null);
  const swapHere = () => {
    setOriginValue(destinationValue);
    setDestinationValue(originValue);
  };
  const [rotateChevron, setRotateChevron] = useState(false);
  const handleRotate = () => {
    setRotateChevron(!rotateChevron);
    swapHere();
  };

  return (
    <>
      <form >
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            style={{ width: "106%", marginInline: "-3%" }}
          >
            <Box>
              <Stack spacing={2} sx={{ width: 205 }}>
                <Autocomplete
                  id="size-small-standard"
                  size="small"
                  defaultValue={{
                    IATA_code: "BLR",
                    ICAO_code: "V0BG",
                    airport_name: "Bengaluru International Airport",
                    city_name: "Bangalore"
                  }}                
          
                  noOptionsText="No Destinations Found"
                  PopperComponent={myPopper}
                  onChange={handleInputChangeOrg}
                  options={mockData.data}
                  getOptionLabel={(option) => option.IATA_code || " "}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <AirportWrap>
                        <div>
                          <Box boxShadow={3} className={style.dropDownIataCode}>
                            <b>{option.IATA_code}</b>
                          </Box>
                          <div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                          </div>

                          <div></div>
                        </div>
                        <div>
                          <div
                            style={{ display: "block", marginBottom: "13px" }}
                          >
                            {option.city_name}
                          </div>
                          <div
                            className="text-muted"
                            style={{
                              fontSize: "10px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            ({option.airport_name})
                          </div>
                        </div>
                      </AirportWrap>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      name="origin"
                      {...params}
                      label="From"
                      // placeholder="Origin"
                      // onKeyDown={handleKeyDown}
                    />
                  )}
                />
              </Stack>
            </Box>
            <Box style={{ marginTop: 8, margin: "8px 7px", cursor: "pointer" }}>
              <span className="pointer">
                <Image
                  className={`filters__chevron ${
                    rotateChevron ? "rotate" : ""
                  }`}
                  src={SwapArrow}
                  alt="swaping icon"
                />
              </span>
            </Box>
            <Box>
              <Stack spacing={2} sx={{ width: 205 }}>
                <Autocomplete
                  id="size-small-standard"
                  size="small"
                  defaultValue={{
                    IATA_code: "DEL",
                    ICAO_code: "VIDP",
                    airport_name: "Indira Gandhi International Airport",
                    city_name: "New Delhi"
                  }}
                  noOptionsText="No Destinations Found"
                  PopperComponent={myPopper}
                  onChange={handleInputChangeDest}
                  options={mockData.data}
                  getOptionLabel={(option) => option.IATA_code || " "}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <AirportWrap>
                        <div>
                          <Box boxShadow={3} className={style.dropDownIataCode}>
                            <b>{option.IATA_code}</b>
                          </Box>
                          <div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                          </div>

                          <div></div>
                        </div>
                        <div>
                          <div
                            style={{ display: "block", marginBottom: "13px" }}
                          >
                            {option.city_name}
                          </div>
                          <div
                            className="text-muted"
                            style={{
                              fontSize: "10px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            ({option.airport_name})
                          </div>
                        </div>
                      </AirportWrap>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="To"
                      // onKeyDown={handleKeyDown}
                    />
                  )}
                />
              </Stack>
            </Box>
            <Box>
              <div className={style.dateSection}>
                {selectedOptionOrg !== "" && selectedOptionDest !== "" ? (
                  <>
                    <LowFarePricingCalender
                      selectedOptionOrg={selectedOptionOrg}
                      selectedOptionDest={selectedOptionDest}
                    ></LowFarePricingCalender>
                  </>
                ) : (
                  <>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Departure Date"
                        value={dateValue}
                        onChange={handleDateChange}
                        disabled
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </>
                )}
              </div>
            </Box>
            <Box>
              <Passengers />
            </Box>
            <Box sx={{ width: 205 }}>
              <TextField
                id="outlined-basic"
                label="Promo Code"
                variant="outlined"
              />
            </Box>
          </Box>
        </Container>
        {/* <div className="row" style={{marginBottom:'-5%'}} >
          <div className="col">
            <div className="text-start">
              <label htmlFor="" style={{color:'#777777' , fontWeight:'400'}}>
                Special fares <span style={{ color:"#485B60"}}> <InfoOutlinedIcon fontSize="small" /> </span>
              </label>
            </div>
            <ul className="donate-now">
              <li style={{width:'117px'}}>
                <input type="radio" id="Army" name="amount" />
                <label className="rounded-pill" htmlFor="Army" style={{width:'117px'}}>
                  Armed Forces
                </label>
              </li>
              <li style={{width:'136px'}}>
                <input type="radio" id="doctors" name="amount" />
                <label className="rounded-pill" htmlFor="doctors" style={{width:'136px'}}>
                Doctors&nbsp;&&nbsp;Nurses
                </label>
              </li>
              <li style={{width:'171px'}}>
                <input type="radio" id="senior" name="amount" />
                <label className="rounded-pill" htmlFor="senior" style={{width:'171px'}}>
                Unaccompained&nbsp;Minor
                </label>
              </li>
              <li style={{width:'119px'}}>
                <input type="radio" id="student" name="amount" />
                <label className="rounded-pill" htmlFor="student" style={{width:'119px'}}>
                Senior Citizens
                </label>
              </li>
              <li style={{width:'86px'}}>
                <input type="radio" id="FF" name="amount" />
                <label className="rounded-pill" htmlFor="FF" style={{width:'86px'}}>
                Students
                </label>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="row" style={{ marginBottom: "-5%" }}>
          <div className="col">
            <div className="text-start">
              <label htmlFor="" style={{ color: "#777777", fontWeight: "400" }}>
                Special fares{" "}
                <span style={{ color: "#485B60" }}>
                  {" "}
                  <InfoOutlinedIcon fontSize="small" />{" "}
                </span>
              </label>
            </div>
            <div style={{ marginTop: "18.5px" }}>
              <Toggle />
            </div>
          </div>
        </div>
        <Box onClick={handleFlights} display="flex" flexDirection="row-reverse">
          <Link href="/list-of-flights-one-way">
            <Button
              variant="contained"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "#FF6300",
                borderRadius: "8px 0px 8px 8px",
                width: "208px",
                height: "48px",
                textTransform: "none",
                padding: " 12px 16px",
              }}
            >
              Search Flights
            </Button>
          </Link>
        </Box>
      </form>
      <style>
        {`
          .MuiAutocomplete-inputRoot {
            font-weight:900;
          }
          .filters__chevron {
            -moz-transition: all .2s linear;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}

.filters__chevron.rotate {
  -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    transform:rotate(180deg);
}
          .donate-now {
            list-style-type: none;
            margin: 10px 0 0 0;
            padding: 0;
          }
        
          .donate-now li {
            float: left;
            margin: 0 5px 5px 0;
            width: 11%;
            height: 30px;
            position: relative;
            text-align: center;
            align-items:center;
            
          }
        
          .donate-now label,
          .donate-now input {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        
          .donate-now input[type="radio"] {
            opacity: 0.01;
          }
        
          .donate-now input[type="radio"]:checked+label,
          .Checked+label {
            border: 1px solid #CCC;
            background: transparent;
          }
        
          .donate-now label {
            padding:5px 10px;
            // border: 1px solid #CCC;
            border-radius: 10%;
            cursor: pointer;
            background: #F0F3F5;
          }
          
          .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
            border-radius:8px 0px 8px 8px;
            height:50px;
          }
          `}
      </style>
    </>
  );
};

export default OneWayTrip;
