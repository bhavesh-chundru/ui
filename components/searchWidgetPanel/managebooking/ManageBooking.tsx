import React, { useState } from "react";
import {  Button, Grid,  } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import  Box  from "@mui/material/Box";
import Validation from "../../common/Validation";
import Link from "next/link";
import styled from "styled-components";

const ManageBooking = () => {
  const [values, setValues] = useState({
    pnr: "",
    email: "",
  });

  const [errors, setErrors] = useState<any>("");

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value, 
    });
    if (values.pnr !== undefined && values.pnr.length > 6) {
      setErrors("");
    }
    if (values.email !== undefined) {
      setErrors("");
    }
  };

  const HandleSubmit = (event: any) => {
    event.preventDefault();

    setErrors(Validation(values));
    
  };

  const DivAlignment = styled.div`

  display: inline;
 `

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <DivAlignment>
      
        <p>Retrieve your booking using PNR</p>

        </DivAlignment>
      
        <form onSubmit={HandleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="PNR"
                type="text"
                name="pnr"
                value={values.pnr}
                id="name-input"
                onChange={handleChange}
                inputProps={{ maxLength: 6 }}
                variant="outlined"
              />
              {errors.pnr && <p className="text-danger">{errors.pnr}</p>}
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="text"
                name="email"
                onChange={handleChange}
                value={values.email}
                variant="outlined"
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </Grid>
          </Grid>
          <Grid  container spacing={2} style={{margin:"30px"}}>
          
            <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#FF6300",
              color: "#fff",
              textTransform: "none",
              borderRadius: "8px 0px 8px 8px",
              paddingInline: "35px",
            }}
          >
             Email Itinerary
       
          </Button>
            
          
          <Link  href="/ManageBookingPages">
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#FF6300",
              color: "#fff",
              textTransform: "none",
              borderRadius: "8px 0px 8px 8px",
              marginInlineStart: "375px",
              paddingInline: "35px",
              position:"relative",
              right:"175px"
            }}
          >
            Get Itinerary{" "}
          </Button>
          </Link>

          </Grid>
          
        </form>
      </Box>
      <style>
       {`
        #name-input:valid {
          text-transform: uppercase;
        }
      //   .btn-secondary{
      //     color: #fff;
      //     background-color: #5c636a;
      //     border-color: #565e64;
      //     width: 170px;
      // }
      .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
        width:150%;
        border-radius:8px 0px 8px 8px;
      }
        `}
      </style>
    </>
  );
};

export default ManageBooking;
