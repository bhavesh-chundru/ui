/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import { useRouter } from 'next/router'
import * as mockData from '../../../mock/checkinInfo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Checkbox from "@material-ui/core/Checkbox";
import { toast } from 'react-toastify'
import { BiRupee, BiPlusCircle } from "react-icons/bi";
import Router from 'next/router';
import Image from 'next/image'
import Box from '@mui/material/Box';
import seating from "../../../public/images/seat.png";
import QuickBoard from "../../../public/images/skypriorityBoarding.jpg";

//npm i @emotion/styled
//npm install @mui/x-data-grid
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AiOutlineDownload, AiOutlineMail, AiOutlinePrinter,AiOutlineCheckCircle,AiFillCloseCircle } from "react-icons/ai";
import { BsChatRightText, BsFillCheckCircleFill } from "react-icons/bs";


// seating
toast.configure()

const CheckInFlow = () => {
  const [selected, setSelected] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(false)

  const [options, setOptions] = useState([])
  const isAllSelected = options.length > 0 && selected.length === options.length;
  const [ShowBaggagePage, setShowBaggagePage] = useState('')
  const [Values, setValues] = useState([])
  const [SelectedValue, setSlectedValue] = useState([])
  const[showhide,setshowhide] = useState(true)
  

  // 👉️ can use localStorage here


  useEffect(() => {
    let selectedPnr1 = localStorage.getItem("bookingDetails")
    let selectedPn = JSON.parse(selectedPnr1)
    let selectedPnr = selectedPn.pnr
  
    let updatedValue = []
    let updatedSelectedvalue = []

    mockData.data.map((elem, index) => {
      if (selectedPnr === elem.pnr) {
        updatedValue.push(elem)
      }
    })

    let newOptions = []
    updatedValue[0].list_of_passengers.map((elem) => {
      newOptions.push(elem.last_name)
    })

    updatedValue[0].list_of_passengers.map((elem) => {
      if (selected.includes(elem.last_name)) {
        updatedSelectedvalue.push(elem)
      }
    })
    setValues(updatedValue)
    setSlectedValue(updatedSelectedvalue)

    setShowBaggagePage(localStorage.getItem("ShowBaggagePage"))
    setOptions(newOptions)
  }, [])


  
  
  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "all") {
      setSelected(selected.length === options.length ? [] : options);

      return;
    }
    // added below code to update selected options
    const list = [...selected];
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    setSelected(list);
  };


  const notify = () => {
    toast.error(" Please select any passenger", { position: toast.POSITION.TOP_CENTER })
  }

  const [item, setItem] = useState()
  const [passName, setpassName] = useState()
  const Getuser = (id) => {
    SelectedValue.map((elem, index) => {
      if (index + 1 === id) {

        if (toggleBtn === false) {
          setToggleBtn(true)
        }
        setItem(id)
        setpassName(elem.name)

      }
    });
  }

  const HealthPage = () => {
    
    localStorage.setItem("add-on","")

    Router.push({
      pathname: "/BookFlightPages/HealthDeclarations",

    })
  }

  const notifyForAddon = () => {
    toast.error(" Please select any add-on", { position: toast.POSITION.TOP_CENTER })
  }

  // For baggage 
  const [selectedBag, setSelectedBag] = useState([]);
  const [Baggage, setBaggage] = useState();
  const inputBags = { 0: null, 1: null, 2: null }

  const Baggagehandle = (event, index) => {

  };


  const [BagTag, setBagTag] = useState(false)
  const BagTagFunction = () => {
    setBagTag(true)
  }

    const ButtonShowHide=()=>{
      setshowhide(!showhide)
      if(showhide===false){
        localStorage.setItem("add-on","")
      }else{
        localStorage.setItem("add-on","499")
      }
    }

    const HealthPage1 = () => {
    if(showhide===true){

    
        notifyForAddon()
      }else{
        Router.push({
          pathname: "/BookFlightPages/HealthDeclarations",
    
        })
      }
    }

    
  return (
    <div>
      <Header />
      <Container maxWidth="xl" >

        <div className={isActive && ShowBaggagePage === "false" ? "active" : "deactivate"}>
          <p id="od">{Values[0]?.origin[0]?.iata_code}<AiOutlineArrowRight /> {Values[0]?.destination[0]?.iata_code} </p>
          <p>  {Values[0]?.origin[0]?.area_name}({Values[0]?.origin[0]?.terminal_no})<AiOutlineArrowRight />{Values[0]?.destination[0]?.area_name}({Values[0]?.destination[0]?.terminal_no})*{Values[0]?.time}*{Values[0]?.flight_number}  *  {Values[0]?.pnr} </p>
        </div>

        <div className={isActive && ShowBaggagePage === "false" ? "active" : "deactivate"} >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, mx: "auto" }} style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} aria-label="simple table">
              <TableHead >
                <TableRow sx={{}} style={{ background: "rgb(255, 99, 0)" }}>
                  {/* <TableCell className="TableRowCenter"><input type="checkbox" /></TableCell> */}
                  <TableCell className="TableRowCenter t1"><Checkbox value="all" onChange={handleChange} checked={isAllSelected} /></TableCell>
                  <TableCell className="TableRowCenter t1">PAX NO</TableCell>
                  <TableCell className="TableRowCenter t1">PASSENGER NAME</TableCell>
                  <TableCell className="TableRowCenter t1">SEAT NO</TableCell>
                  <TableCell className="TableRowCenter t1">ADD-ONS</TableCell>
                  <TableCell className="TableRowCenter t1">BOARDING PASS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {Values[0]?.list_of_passengers?.map((elem, index) =>

                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {/* <TableCell className="TableRowCenter"><input type="checkbox" onChange={e => handleCheck(e ,index+1)} />  </TableCell> */}
                    <TableCell className="TableRowCenter "><Checkbox value={elem.last_name} onChange={handleChange} checked={selected.includes(elem.last_name)} /></TableCell>

                    <TableCell className="TableRowCenter" component="th" scope="row">{index + 1}</TableCell>
                    <TableCell className="TableRowCenter" component="th" scope="row">{elem.last_name}</TableCell>
                    <TableCell className="TableRowCenter" align="right">{elem.seat_no}</TableCell>
                    <TableCell className="TableRowCenter" align="right">{elem.add_ons}</TableCell>
                    <TableCell className="TableRowCenter" align="right">{elem.boarding_pass}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>



            <Button className="btncheckin blackbtn" onClick={() => {
              selected.length > 0 ? setIsActive(false) : notify()
            }} variant="contained">Check-in through auto assigned seat</Button>
            <Button className="btncheckin blackbtn" style={{ color: "rgb(172 168 168)" }} disabled>Select seat(s)</Button>
          </TableContainer>
        </div>
        <div className={!isActive && ShowBaggagePage === "false" ? "active" : "deactivate"}>
          <div className="addon_header">
            <p>ADD-ONS</p>
          </div>
          <div className="flight_details">
            <p id="od">{Values[0]?.origin[0]?.iata_code}<AiOutlineArrowRight /> {Values[0]?.destination[0]?.iata_code} </p>
            <p>Add ons</p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}>
              <div className="passengerDetails">
                {
                  selected?.map((elem, index) =>
                    <div style={{ cursor: "pointer" }} key={index} onClick={() => { Getuser(index + 1) }}
                      className={toggleBtn && index + 1 === item ? "btnClick" : "btnClose"}>
                      <div>
                        <p>Passenger {index + 1}</p>
                        <p id="passengername">{elem}</p>
                      </div>
                    </div>
                  )
                }

              </div>

            </div>
            <div style={{ flex: "4", margin: "auto", marginLeft: "10px" }}>
              {passName ? <div className="passName" >{passName} Add-on</div> : ""}
              {/* <div style={{ display: "flex", marginBottom: "10px", background: "lightgray", }} >
                <div className="paragraphInAddon"><p>Seat & Eat</p>
                  <p>Sit,snack,and relax! Book a seat + snack combo* and save up to 30% on your flight.</p></div>
                <div className="buttonAddon">  <Button className="btnAddon"><BiPlusCircle /> &nbsp;Add for &nbsp; <BiRupee />499 </Button></div>
              </div>
              <div style={{ display: "flex", background: "lightgray" }}>
                <div className="paragraphInAddon"><p>QuickBoard</p>
                  <p>Skip the queue at the boarding gate and enjoy the convenience of early boarding.</p></div>
                <div className="buttonAddon"><Button className="btnAddon"><BiPlusCircle /> &nbsp;Add To Trip </Button></div>
              </div> */}
              <Box
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                    }}
                    boxShadow={3}
                  >
                    <div
                      className=" "
                      style={{ width: "160px", height: "121px" }}
                    >
                      <Image src={seating} />
                    </div>
                    <div className="paragraphInAddon">
                      <p>Seat & Eat</p>
                      <p>
                        Sit,snack,and relax! Book a seat + snack combo* and save
                        up to 30% on your flight.
                      </p>
                    </div>
                    <div
                      className="buttonAddon"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginInlineEnd: "1%",
                      }}
                    >
                      {" "}
                      {
                        showhide?<Button onClick={ButtonShowHide} className="btnAddon">
                        <BiPlusCircle /> &nbsp;Add for &nbsp; <BiRupee />
                        499{" "}
                      </Button>:
                      <>
                      <Button onClick={ButtonShowHide}> <AiFillCloseCircle /></Button>
                      <Button   style={{background: "lightgrey"}} className="btnAddon">
                        <AiOutlineCheckCircle /> &nbsp;Added &nbsp; 
                      
                      </Button></>
                      }
                      
                      
                    </div>
                  </Box>
                  <Box
                    style={{ display: "flex", flexDirection: "row" }}
                    boxShadow={3}
                  >
                    <div
                      className=""
                      style={{ width: "160px", height: "121px" }}
                    >
                      <Image src={QuickBoard} />
                    </div>
                    <div className="paragraphInAddon">
                      <p>QuickBoard</p>
                      <p>
                        Skip the queue at the boarding gate and enjoy the
                        convenience of early boarding.
                      </p>
                    </div>
                    <div
                      className="buttonAddon"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginInlineEnd: "1%",
                      }}
                    >
                      <Button className="btnAddon">
                        <BiPlusCircle /> &nbsp;Add To Trip{" "}
                      </Button>
                    </div>
                  </Box>
                  

            </div>
          </div>

          <div className="Buttonsection">
            <Button className="btncheckin blackbtn" style={{ background: "rgb(255, 99, 0)" }} variant="contained" onClick={HealthPage1} >Continue</Button>

            <Button className="btncheckin blackbtn" variant="contained" onClick={HealthPage}>skip all addon</Button>

          </div>

        </div>
        <div className={ShowBaggagePage === "true" ? "active" : "deactivate"}>
          <div className={BagTag === false ? "active" : "deactivate"} >
            <p id="od">{Values[0]?.origin[0]?.iata_code}<AiOutlineArrowRight /> {Values[0]?.destination[0]?.iata_code} </p>
            <p>  {Values[0]?.origin[0]?.area_name}({Values[0]?.origin[0]?.terminal_no})<AiOutlineArrowRight />{Values[0]?.destination[0]?.area_name}({Values[0]?.destination[0]?.terminal_no})*{Values[0]?.time}*{Values[0]?.flight_number}  *  {Values[0]?.pnr} </p>
          </div>

          <TableContainer className={BagTag === false ? "active" : "deactivate"} component={Paper}>
            <Table sx={{ minWidth: 650, mx: "auto" }} style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }} aria-label="simple table">
              <TableHead >
                <TableRow sx={{}} style={{ background: "rgb(255, 99, 0)" }}>
                  {/* <TableCell className="TableRowCenter"><input type="checkbox" /></TableCell> */}
                  {/* <TableCell className="TableRowCenter t1"><Checkbox  value="all" onChange={handleChange} checked={isAllSelected} /></TableCell> */}
                  <TableCell className="TableRowCenter t1">PAX NO</TableCell>
                  <TableCell className="TableRowCenter t1">PASSENGER NAME</TableCell>
                  <TableCell className="TableRowCenter t1">No. of Bags</TableCell>
                  {/* <TableCell className="TableRowCenter t1">ADD-ONS</TableCell>
                  <TableCell className="TableRowCenter t1">BOARDING PASS</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody >
                {Values[0]?.list_of_passengers?.map((elem, index) =>

                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {/* <TableCell className="TableRowCenter"><input type="checkbox" onChange={e => handleCheck(e ,index+1)} />  </TableCell> */}
                    {/* <TableCell className="TableRowCenter "><Checkbox   value={elem.last_name} onChange={handleChange} checked={selected.includes(elem.last_name)} /></TableCell> */}

                    <TableCell className="TableRowCenter" component="th" scope="row">{index + 1}</TableCell>
                    <TableCell className="TableRowCenter" component="th" scope="row">{elem.last_name}</TableCell>
                    <TableCell className="TableRowCenter" align="right">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Bags</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={Baggage}
                          label="Bag"
                          onChange={(event, index) => Baggagehandle(event, index)}
                        >
                          <MenuItem className="dropdown" value={10}>1</MenuItem>
                          <MenuItem className="dropdown" value={20}>2</MenuItem>
                          <MenuItem className="dropdown" value={30}>3</MenuItem>
                        </Select>
                      </FormControl>


                    </TableCell>
                    {/* <TableCell className="TableRowCenter" align="right">{elem.add_ons}</TableCell>
                    <TableCell className="TableRowCenter" align="right">{elem.boarding_pass}</TableCell> */}
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

              <div style={{ display: "flex", margin: "19px 12px" }}>
                <div><Image src="/images/suitcase.png" width="25" height="28" alt="image not found " /></div>
                <div><span className="SpanText">Baggage Allowance</span> <span>Cabin 7kg • Check-in 15kg</span> </div>
              </div>
              <div>
                <Button className="btncheckin blackbtn" variant="contained" onClick={BagTagFunction}>Generate Bag Tags</Button>

              </div>
            </div>



          </TableContainer>

          <div className={BagTag === true ? "active" : "deactivate"}>
            <div style={{ display: "flex", marginBottom: " -20px" }}>

              <div><p className="successText" >Your Baggage tag has been successfully generated</p></div>
              <div className="popupicon">
                <BsFillCheckCircleFill />
              </div>
            </div>

            <div>  <div >
              <p id="od"> {Values[0]?.origin[0]?.area_name}({Values[0]?.origin[0]?.terminal_no})<AiOutlineArrowRight />{Values[0]?.destination[0]?.area_name}({Values[0]?.destination[0]?.terminal_no}) </p>
              <p> {Values[0]?.time}*{Values[0]?.flight_number}  *  {Values[0]?.pnr} </p>
            </div>
            </div>
            <div>
              {/* <p>View Boarding Pass</p> */}
            </div>
            <div>

              <div style={{ display: "flex" }}>
                <div className="ImgBorder"><Image src="/images/bagTag.png" width="505" height="400" alt="image not found " /></div>
                <div className="ImgBorder"><Image src="/images/bagTag.png" width="505" height="408" alt="image not found " /></div>
              </div>
              <div>
                <div style={{ display: "flow-root" }}>
                  <div style={{ float: "right", margin: "25px" }} className="ButtonGrp">
                    <Button ><AiOutlineDownload className="LinkBtm" /><p className="ButtonSection">Download</p></Button>
                    <Button ><AiOutlineMail className="LinkBtm" /><p className="ButtonSection">Email</p></Button>
                    <Button ><AiOutlinePrinter className="LinkBtm" /><p className="ButtonSection">Print</p></Button>
                  </div>
                </div>
              </div>

            </div>
            <div >
            <div><p className="successText">Folding Instructions</p></div>

              <div className="ImgBorder">   <div ><Image src="/images/BagTagIns.png" width="1350" height="400" alt="image not found " /></div>
             <div className="flex">

             <div className="tagStep">
                <div >
                  <p className="SemiBolt">Step 1</p>
                </div>
                <div>
                  <p>Print each baggage tag on a thick paper and fold it from the centre horizontally as shown in picture(1).</p>
                </div>
              </div>
              <div className="tagStep">
                <div>
                <p className="SemiBolt">Step 2</p>
                </div>
                <div>
                  <p>Fold the paper once again from the centre, as shown in the picture(2), making sure that the bar codes are clearly visible.</p>
                </div>
              </div>
              <div className="tagStep">
                <div>
                <p className="SemiBolt">Step 3</p>
                </div>
                <div>
                  <p>
                  Ask for a tag holder at the airport and insert the printed tag as shown in picture(3).
                  </p>
                </div>
              </div>
             </div></div>
           
              
            </div>

          </div>
        </div>

      </Container>

      <style>
        {`
        .SemiBolt{
          font-weight: 500;
        }
        .tagStep{
          margin:0px 15px
        }
        .flex{
          display:flex
        }
        .successText{

          font-style: normal;
          font-weight: 700;
          font-size: 32px;
        }
        .ImgBorder{
          border:2px solid black;
          padding:4px;
          margin-right: 20px;
        }
        .LinkBtm{
          color:#4a90d6;
          font-size: 18px;
          margin-left:5px
        }
          .ButtonSection{
            margin-top: 0;
            margin-bottom: 0;
            padding: 0px 7px;
            color:#4a90d6;
        }
          .ButtonGrp{
            border: 1px solid #4a90d6;                   }
          .popupicon{
            text-align: center;
            font-size: 43px;
            color: green;
            margin-left: 10px;
            margin-top: -13px;
           }
        .SpanText{
          font-size: 20px;
          padding: 0px 10px 0px 10px;
          /* margin-top: -19px; */
          font-weight: 400;
        }
        .dropdown{
          display:block;
          text-align:center
        }
        /* Simple Way */
        .diagonalCross2 {
          width:100px;
          background: linear-gradient(to top right, #fff calc(50% - 1px), black , #fff calc(50% + 1px) )
        }
        .MuiSvgIcon-root{
          background:white;
          
          padding: 1px;
        }
       
        .t1{
          color:white;
        }
        .blackbtn{
          background: rgb(255, 99, 0);
          color: white;
          padding: 8px 14px;
        }
        .passName{
          text-align: center;
          font-size: larger;
          background: lightgray;
          color: black;
          margin-bottom: 10px;
        }
        .btnClick{
          background: gray;
          padding: 20px;
          font-size: 15px;
          font-weight: 400;
          margin-bottom:10px;
        }
        .btnClose{
          background: lightgray;
          padding: 20px;
          font-size: 15px;
          font-weight: 400;
          margin-bottom:10px;
        }
        .btnAddon{
          border: 1px solid;
          padding: 3px 12px;
        } 
        .imgAddon{
          flex: 1;
    background: darkgray;
        }
        .paragraphInAddon{
          flex: 2;
          padding: 12px;
        }
        .buttonAddon{
          flex:1;
          margin: auto;
          text-align: center;
        }
        #passengername{
          font-weight: 800;
          margin-top:-10px;
        }
        .PassengerDiv{
          background: lightgray;
          padding: 20px;
          font-size: 15px;
          font-weight: 400;
          margin-bottom:10px;
        }
        .btncheckin{
          float: right;
          
            margin: 15px;
        }
        .btncheckin:hover{
          background:rgb(247, 112, 29);
        }
       .TableRowCenter{
         text-align:center;
       }
       #od{
        font-size: 20px;
        font-weight: 800;
        margin: 20px 0px 0px 0px;
       }

       .addon_header{
        background: rgb(255, 99, 0);
        color: white;
        padding: 10px;
    }
    .active{
      display:block;
    }
    .deactivate{
      display:none;
    }
       `}
      </style>
    </div>

  )
}

export default CheckInFlow