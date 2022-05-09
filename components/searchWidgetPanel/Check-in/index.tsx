
import React, { createContext, useState } from "react";
import TextField from '@mui/material/TextField';
import * as mockData from '../../../mock/checkinInfo';
import Router from 'next/router';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from "@mui/material/Button";
import Link from "next/link"
import Validation from "../../common/Validation";
import { Grid } from "@material-ui/core";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import { AiOutlineExclamationCircle, AiOutlineClose } from "react-icons/ai";

toast.configure()

const Checkin = () => {

    const notify = () => {
        toast.error(" Details entered by you are incorrect. Please verify your Booking reference and Last name or email id you have used during booking. ", { position: toast.POSITION.TOP_CENTER })
    }
    const [values, setValues] = useState({
        pnr: "",
        email: "",
    });


    const [errors, setErrors] = useState<any>('');
    const [EarlyPnr,setEarlyPnr]=useState();
    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        if (values.pnr !== undefined && values.pnr.length > 6) {
            setErrors('')
        }
        if (values.email !== undefined) {
            setErrors('')
        }

    };
    var bookingDetails: { pnr: string; list_of_passengers: { email: string; last_name: string; }[]; }[];
    // const HandleSubmit = (data: any) => {
    //     localStorage.setItem("ShowBaggagePage", "false")
    //     data.preventDefault();
    //     setErrors(Validation(values))
    //     mockData.data.map((elem) => {
    //         if (values.pnr == elem.pnr) {
    //             elem.list_of_passengers.map((check) => {
    //                 if (values.email === check.last_name || values.email === check.email) {
    //                     bookingDetails.push(elem);
    //                     localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails[0]));
    //                     if (bookingDetails[0].pnr === "AK23P3") {
    //                         setEarlyPnr(bookingDetails[0]?.pnr);
    //                         handleClickOpen()
    //                     } else {
    //                         Router.push({
    //                             pathname: "/BookFlightPages/CheckIn",
    //                             query: bookingDetails[0]

    //                         })
    //                     }

    //                 }
    //             })
    //         }
    //     });

    //     if (bookingDetails.length != 1 && values.pnr != "" && values.email != "") {
    //         notify();
    //     } else {
    //         return bookingDetails;
    //     }

    // };
    //for early check in pop up
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        Router.push({
            pathname: '/',

        })

    };
    return (
        <>
            <div>
                <div className="card-body">
                    <form >
                        {/* <h4 className="m-2">Mandatory web check-in</h4> */}
                        <div >
                            <p className="checkboxText"> Online check-in opens 48 hours before your flight and is available online or via our app <br /> up to one hour before you’re scheduled to fly.    </p>
                        </div>
                        <Grid container spacing={2}>

                            <Grid item xs={4}>
                                <div className="form-floating">
                                    <TextField
                                        label="PNR/Booking Reference"
                                        type="text"
                                        name="pnr"
                                        value={values.pnr}
                                        id="name-input"
                                        onChange={handleChange}
                                        fullWidth
                                        variant="outlined" />
                                    {errors.pnr && <p className="text-danger">{errors.pnr}</p>}
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="form-floating">
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Email/last name"
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        fullWidth
                                        variant="outlined" />
                                    {errors.email && (
                                        <p className="text-danger">{errors.email}</p>
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                            <div className="link">
                                <Link href="#">Where can I find this?</Link>
                            </div>
                        </Grid>
                        <div style={{ marginTop: "15px", background: "#F1F1F1" }} className="card-footer text-muted d-flex flex-row-reverse">

                            <Button variant="contained" className="blackbtn" type="submit" >
                                Check-in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Early checkin */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Container maxWidth="xl" >

                    <div style={{ display: "flow-root" }}>
                        <div onClick={handleClose} style={{ float: "left", marginTop: "25px",cursor:"pointer" }}>
                            <AiOutlineClose style={{ fontSize: "30px" }} />

                        </div>
                        <div style={{ float: "right", marginTop: "25px" }} className="ButtonGrp">

                            <Link href="/">
                                <Button onClick={handleClose}>Check-in with another PNR</Button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="popupicon">
                            <AiOutlineExclamationCircle />
                        </div>
                        <div><p className="headerHealth center">Unable to web check-in <span style={{ background: "lightcyan" }}>PNR-{EarlyPnr}</span> due to <br />
                            one of the following reasons:</p></div>
                        <div className="center"><p>1. Your flight departure time is beyond 48 hours from now.

                        </p><p>2. In case you have a connecting flight, the flight departure time of one of
                            your connections is beyond 48 hours from now.</p></div>
                        <div className="center" style={{padding:"0px 0px 15px 0px"}}>
                            <Link href="/">
                                <Button onClick={handleClose}>Check-in with another PNR</Button>
                            </Link>


                        </div>
                    </div>
                    <style>
                        {`
            
        `}
                    </style>
                </Container>
            </Dialog>
            <style>
                {`
                .ButtonGrp{
                    border: 1px solid #4a90d6;                   }
                    .popupicon{
                        text-align: center;
                        font-size: 75px;
                        color: orange;
                       }
                       .headerHealth{
                        font-size: 25px;
                        margin: 15px;
                        
                        font-weight: 600;
                        }
                        .center{
                            text-align: center;
                           }
                .blackbtn{
                    background: #FF6300;
                    color: white;
                    padding: 8px 14px;
                    border-radius:8px 0px 8px 8px;
                    text-transform:none;
                }
                .blackbtn:hover{
                    background: #FF6300;
                    
                }
              a{
                  color:black
              }
                .link{
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0px;
                color: black;
                margin-left: 10px;

                }
                .checkboxText{
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 24px;
                  letter-spacing: 0px;
                  text-align: left;

                }
        #name-input:valid { 
          text-transform: uppercase;
        }
        .btn-secondary{
          color: #fff;
          background-color: #5c636a;
          border-color: #565e64;
          width: 170px;
      }
      .card-footer {
        /* background-color: rgba(0, 0, 0, 0.03); */
    }

    .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
        border-radius:8px 0px 8px 8px;
    }
        `}
            </style>



        </>
    );
};

export default Checkin;

