import React, { useState } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import  Box  from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useForm , Controller, FormProvider, useFormContext,} from "react-hook-form";
import AddPassengerDetails from '../AddPassengerDetails/AddPassengerDetails'
import AddOns from "./AddOns";
import SeatSelection from './SeatSelection';
import BookingSuccessfull from "./BookingSuccessfull";
import BookingSummary from "./BookingSummary";
import { style } from "@mui/system";
import styles from "./passengerBookingJourney.module.css"
import { useRouter } from 'next/router'
import Router from 'next/router';
declare global {
  interface Window { Razorpay: any; }
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#FF6300 !important',
    color:'#FFFFFF',
    borderRadius:'8px 0 8px 8px !important',
  },
  formfields: {
    borderRadius: '8px 0px 8px 8px !important' ,
    border : '1px solid lightgrey'
  }
}));

function getSteps() {
  return [
    "Who's Traveling?",
    "Select Add-Ons",
    "Seat Selection",
    "Summary",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddPassengerDetails/> ;

    case 1:
      return <AddOns/>;
    case 2:
      return  <SeatSelection/> ;
    case 3:
      return  <BookingSummary/>;
      case 4:
      return  "payment";
    default:
      return "unknown step";
  }
}

const PassengerBookingJourney = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [paymentStatus,setPaymentStatus]=useState(false)
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    if (activeStep == steps.length - 1) {
     
          setActiveStep(activeStep + 1);
       
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };


  const fares:any = useRouter();
  const fareToPay = fares?.query?.flightFare?.replace(/[^a-zA-Z0-9 ]/g, '');

  
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
      setPaymentStatus(true)
      Router.push({
        pathname: "/BookingSuccessful",

    })
 
    },
    prefill: {
      name: "satya"
    }

  }
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
}
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps:any = {};
          const stepProps:any = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {paymentStatus? (
        <Typography variant="h3" align="center">
          
        </Typography>
      ) : (
        <>
        
          <FormProvider {...methods}>
            
            <form onSubmit={methods.handleSubmit(handleNext)}>
              <Box>
              {getStepContent(activeStep)} 
              </Box>
              <Box boxShadow={3} sx={{bgcolor:"#FFFFFF" , padding: "48px 0px", display: "flex", flexDirection: "row" ,justifyContent: "flex-end" }}>
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              {/* <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continue"}
              </Button> */}
            <Box>
              <Box className={styles.rupees}> {fares.query.flightFare}</Box>
              <Box className={styles.summary}>View Summary</Box>
            </Box>
            <Box>
            {activeStep===0?
               <Button
               className={classes.button}
               variant="contained"
               color="primary"
               // onClick={handleNext}
               type="submit"
             >
               Select Add-Ons
             </Button>:activeStep===1? 
              <Button
              className={classes.button}
              variant="contained"
              color="primary"
              // onClick={handleNext}
              type="submit"
            >
            Select Seat
            </Button>:activeStep===2?
             <Button
             className={classes.button}
             variant="contained"
             color="primary"
             // onClick={handleNext}
             type="submit"
           >
            Confirm Seats
           </Button>
           :activeStep===3?
           <Button
           className={classes.button}
           variant="contained"
           color="primary"
           onClick={()=>displayRazorpay(fareToPay)}
           type="submit"
         >
         Make Payment
         </Button>:null
            

            }
            </Box>

        
              </Box>
            </form>
          </FormProvider>
            
          
        </>
      )}
      <style>
        {
          `
          .MuiStepIcon-root.MuiStepIcon-completed {
            color: #FF6300;
        }
        .MuiStepIcon-root.MuiStepIcon-active {
          color: #FF6300;
      }
          `
        }
      </style>
    </>
  );
};

export default PassengerBookingJourney;
