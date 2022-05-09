import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import { GiRadioactive } from "react-icons/gi";
import MuiPhoneNumber from 'material-ui-phone-number';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { BsChatRightText, BsFillCheckCircleFill } from "react-icons/bs";
import Link from 'next/link';
import Router from 'next/router';
//npm install material-ui-phone-number --save

toast.configure()
const min =5;
const max = 100;
const HealthDeclaration = () => {
    const [isActive, setIsActive] = useState(false);
    const [agevalue, setageValue] = useState<number>();


    // const [checkvalue,setCheckvalue]=useState([])
    var valuec = []
    const HandleCheck = (e) => {
        if (e.target.checked) {

            valuec.push(e.target.checked)

        } else {
            valuec.pop();

        }
    }
    const notify = () => {
        toast.error(" Please read and agree", { position: toast.POSITION.TOP_CENTER })
    }
//Baggage 
const BaggagePage = () => {
    localStorage.setItem("ShowBaggagePage","true")
    Router.push({
      pathname: "/BookFlightPages/CheckIn",
      

    })
  }
//payment
const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
const displayRazorpay = async (amount:any) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert("you are ofline ... Failed to load Razorpay SDK")
      return
    }
    const conv_amount = amount
    const options = {
      key: 'rzp_test_67ZRagMu7VM2mv',
      currency: "INR",
      amount: conv_amount * 100,
      name: "Demo Payment",
      description: "Thanks for purchasing",
      image: 'https://logos-world.net/wp-content/uploads/2022/01/Akasa-Air-Emblem.png',
      handler: function (response:any) {
        
        // alert(response.razorpay_payment_id)
        // alert("Payment is successfully")
        toast.success(`Razorpay payment id:${response.razorpay_payment_id} & Payment is successfull`, { position: toast.POSITION.TOP_CENTER })
        // toast.success(`Payment is successfull`, { position: toast.POSITION.TOP_CENTER })
        // Router.push({
        //   pathname: '/BookFlightPages/Payment',
        //   query:{
        //     dtime: dtime,
        //     atime: atime,
        //     flightno:flightno,
        //     hours: hours,
           
        //     flightfare: flightfare,
        //     fareType: fareType,
        //   }
          
        // })
        setIsActive(true)
      },
      prefill: {
        name: "satya"
      }

    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
  let AddON
  useEffect(() => {
    AddON=localStorage?.getItem?.("add-on")
  }, [])
 

    return (
        <div>
            <Container className={isActive ? "deactivate" : "active"} maxWidth="xl" >

                <div>
                    <div className="headerHealth">
                        <p>
                        Health & Contact Declaration
                        </p>
                    </div>
                    <div className="p1">
                        <ul>
                            <li>
                                <p>The boarding pass with your alloted seat will be sent via e-mail <span>12 Hours prior to your departure</span></p>
                            </li>
                            <li>
                                <p>You will be alloted a seat as per the availability. However, you may pick a preferred seat until <span>12 hours prior to your departure</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="headerHealth">
                            Share your details
                        </p>
                        <p className="p8">
                            *Your boarding pass will be sent to this mobile number and email address.
                        </p>
                    </div>
                    <div>
                        <Grid container >

                            <Grid className="p4 p5" item xs={3}>
                                {/* <MuiPhoneNumber variant="outlined" defaultCountry={'in'} label="Enter Mobile Number" fullWidth /> */}

                            </Grid>
                            <Grid className="p4" item xs={3}>
                                <TextField
                                    label="Email Id"
                                    type="email"
                                    name="email"
                                    // value={values.pnr}
                                    id="name-input"

                                    // onChange={handleChange}


                                    variant="outlined" fullWidth />
                            </Grid>
                            <Grid className="p4" item xs={3}>
                                <TextField
                                    label="Age"
                                    type="number"
                                    name="age"
                                    // value={values.pnr}
                                    id="name-input"
                                    // onChange={handleChange}
                                    inputProps={{ min, max }}     
                                    value={agevalue}                               variant="outlined"
                                    onChange={(e) => {
                                        var value = parseInt(e.target.value, 10);
                              
                                        if (agevalue > max) value = max;
                                        if (agevalue < min) value = min;
                              
                                        setageValue(value);
                                      }}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={3}></Grid>



                        </Grid>
                        <div>
                            <Grid container >
                                <Grid className="p4 p5" item xs={4}>
                                    <TextField
                                        label="Destination address*"
                                        type="text"
                                        name="email"
                                        // value={values.pnr}
                                        id="name-input"
                                        // onChange={handleChange}


                                        variant="outlined" fullWidth />
                                </Grid>
                                <Grid className="p4" item xs={4}>
                                    <TextField
                                        label="Destination pincode*"
                                        type="number"
                                        name="age"
                                        // value={values.pnr}
                                        id="name-input"
                                        // onChange={handleChange}

                                        variant="outlined" fullWidth />
                                </Grid>
                            </Grid>
                        </div>
                    </div>


                </div>

                <div>
                    <div className="a2">
                        <div className="p9">
                            <div><Checkbox onChange={HandleCheck} /></div>
                            <div className="a1">I declare that</div>

                        </div>
                        <div>
                            <ul>
                                <li>I am not residing in any containment Zone. </li>
                                <li>I am not suffering from any fever, cough or any respiratory distress.</li>
                                <li>I am not under quarantine.</li>
                                <li>I have not tested COVID-19 positive in the last three weeks.</li>
                                <li>I am eligible to travel as per the extant norms.</li>
                                <li>I will adhere to the health protocol prescribed by the destination state/union territory.</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="a2">
                    <div >
                        <p className="headerHealth">Dangerous goods & restricted articles</p>
                        <p className="p8">Do not carry dangerous goods in your baggage or on your person </p>
                    </div>
                    <div className="p6">
                        <div className="p7 ">
                            Radioactive Img</div>
                        <div className="p7">Explosives Img</div>
                        <div className="p7">Weapons Img</div>
                        <div className="p7">Misc. Goods Img</div>
                        <div className="p7">Flamable
                            liquid Img</div>
                        <div className="p7">Flamable
                            Solid Img</div>
                        <div className="p7"> Toxic &
                            Infectious Img</div>
                        <div className="p7">Power
                            Bank Img</div>
                    </div>

                    <div className="p9" style={{ justifyContent: "space-between" }}>
                        <div style={{ display: "flex" }}> <div><Checkbox onChange={HandleCheck} /></div>
                            <div className="a1">I agree and understood all the important security information.</div>
                        </div>

                        <div>
                            {/* <Button onClick={() => {
                            valuec.length !== 2 ? notify() : setIsActive(true)
                        }} className="blackbtn">Agree & Continue</Button> */}
                           <Button onClick={() => {
                            valuec.length !== 2 ? notify() : AddON? displayRazorpay(499) : setIsActive(true)
                        }} className="blackbtn">Agree & Continue</Button>
                        </div>

                    </div>
                </div>


            </Container>
            <Container className={isActive ? "active" : "deactivate"} maxWidth="xl" >
                <div style={{ display: "flow-root" }}>
                    <div style={{ float: "right", marginTop: "25px" }} className="ButtonGrp">
                        <Button ><AiOutlineDownload style={{ fontSize: "18px" }} /><p className="ButtonSection">Download</p></Button>
                        <Button ><AiOutlineMail style={{ fontSize: "18px" }} /><p className="ButtonSection">Email</p></Button>
                        <Button ><BsChatRightText style={{ fontSize: "18px" }} /><p className="ButtonSection">SMS</p></Button>
                    </div>
                </div>

                <div>
                    <div className="popupicon">
                        <BsFillCheckCircleFill />
                    </div>
                    <div><p className="headerHealth center">Web check-in successful</p></div>
                    <div className="center"><p>Your boarding pass with the auto-assigned seat(s) will be sent via email, 12-6 hours prior to the flight departure.
                    </p><p> Thank you for your patience</p></div>
                    <div className="center">
                        <Link href="/">
                            <Button>Go to Web Check-in Home</Button>
                        </Link>
                        <Button onClick={BaggagePage}>Baggage Check-In</Button>

                    </div>
                </div>
            </Container>
            <style>
                {`
                   .ButtonGrp{
                    border: 1px solid #4a90d6;                   }
                    .ButtonSection{
                        margin-top: 0;
                        margin-bottom: 0;
                        padding: 0px 7px;
                    }
   .popupicon{
    text-align: center;
    font-size: 75px;
    color: green;
   }
   .center{
    text-align: center;
   }
   .active{
    display:block;
  }
  .deactivate{
    display:none;
  }
  .blackbtn{
    background: #000000;
    color: white;
    padding: 8px 14px;
}
.blackbtn:hover{
    background: #202020;
    
}
.a2{
    background: gainsboro;
    padding: 13px 10px;
    margin-top: 10px;
}
.a1{
    font-size: 25px;
   

    font-weight: 600; 
}
.p9{
    display:flex;
    background: darkgray;
}
.p8{
    margin: 10px;
color: #8c8686;
}
.p7{
    width: 150px;
    height: 150px;
    background: darkgray;
    margin:5px;
    
}
.p6{
    display:flex;
}
.p4{
padding: 5px;
}
.p5{
margin-left:4%;
}
.headerHealth{
font-size: 25px;
margin: 15px;

font-weight: 600;
}
.p1{
  background: lightgoldenrodyellow;
line-height: 10px;
padding: 28px 13px 9px 10px;
margin: 10px 0 15px 0;
}
p2{
color: #9a9797;
margin-left: 10px;
line-height: 7px;
}
textField: {
width: 'auto'
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
               `}
            </style>

        </div>
    )
}

export default HealthDeclaration