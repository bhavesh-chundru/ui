import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  ListItem,
  ListItemText,
  Popover,
  Divider,
} from "@mui/material";
import PaxCategories from "../../containers/PaxCategories";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../redux/hooks";
import { oneWay } from "../../redux/slices/bookingDataSlice";
function ConfirmationDialogRaw(props: any) {
  const { onClose, value: valueProp, open, ...other } = props;

  const radioGroupRef = useRef(null);
  const [value, setValue] = useState(valueProp);
  const [adultValue, setAdultValue] = useState(1);
  const [childValue, setChildValue] = useState(0);
  const [infantValue, setInfantValue] = useState(0);
  const [seniorcitizen, setSeniorcitizen] = useState(0);

  const [isIncAdultDisable, setIsIncAdultDisable] = useState(false);
  const [isDescAdultDisable, setIsDescAdultDisable] = useState(true);
  const [isIncChildDisable, setIsIncChildDisable] = useState(false);
  const [isDescChildDisable, setIsDescChildDisable] = useState(true);
  const [isIncInfantDisable, setIsIncInfantDisable] = useState(false);
  const [isDescInfantDisable, setIsDescInfantDisable] = useState(true);
  const [isIncSeniorCitizenDisable, setIsIncSeniorCitizenDisable] =
    useState(false);
  const [isDescSeniorCitizenDisable, setIsDescSeniorCitizenDisable] =
    useState(true);

  useEffect(() => {
    DisableFunction();
  });

  const DisableFunction = () => {
    if (adultValue + seniorcitizen + childValue >= 9) {
      setIsIncAdultDisable(true);
      setIsIncChildDisable(true);
      setIsIncSeniorCitizenDisable(true);
      if (seniorcitizen === 0) {
        setIsDescSeniorCitizenDisable(true);
      } else {
        setIsDescSeniorCitizenDisable(false);
      }
      if (childValue === 0) {
        setIsDescChildDisable(true);
      } else {
        setIsDescChildDisable(false);
      }
      if (adultValue === 0) {
        setIsDescAdultDisable(true);
      } else {
        setIsDescAdultDisable(false);
      }
    } else {
      if (adultValue === 0 || adultValue + seniorcitizen === 1) {
        setIsDescAdultDisable(true);
        setIsIncAdultDisable(false);
      } else {
        setIsIncAdultDisable(false);
        setIsDescAdultDisable(false);
      }
      if (seniorcitizen === 0) {
        setIsDescSeniorCitizenDisable(true);
        setIsIncSeniorCitizenDisable(false);
      } else {
        setIsIncSeniorCitizenDisable(false);
        setIsDescSeniorCitizenDisable(false);
      }

      if (childValue === 0) {
        setIsDescChildDisable(true);
        setIsIncChildDisable(false);
      } else {
        setIsIncChildDisable(false);
        setIsDescChildDisable(false);
      }
      if (childValue >= 4) {
        setIsIncChildDisable(true);
      }
    }
    if (infantValue < 4 && seniorcitizen + adultValue > infantValue) {
      setIsIncInfantDisable(false);
      if (infantValue > 0 && infantValue < seniorcitizen + adultValue) {
        setIsDescInfantDisable(false);
        if (infantValue === 0) {
          setIsDescInfantDisable(true);
          setIsIncInfantDisable(false);
        }
      } else {
        setIsDescInfantDisable(true);
      }
    } else if (infantValue === 4 || seniorcitizen + adultValue <= infantValue) {
      setIsIncInfantDisable(true);
      setIsDescInfantDisable(false);
    }
  };

  const IncrementADT = () => {
    if (adultValue + seniorcitizen + childValue < 9) {
      setAdultValue(adultValue + 1);
    }
  };

  const DecrementADT = () => {
    if (adultValue > 0) {
      if (adultValue + seniorcitizen > 1) setAdultValue(adultValue - 1);
    }
    if (infantValue >= adultValue + seniorcitizen) {
      setInfantValue(infantValue - 1);
    }
  };
  const IncrementChild = () => {
    if (childValue <= 8 || childValue !== 0) {
      setChildValue(childValue + 1);
    }
  };

  const DecrementChild = () => {
    if (childValue + adultValue + seniorcitizen < 9) {
    }
    if (childValue > 0) {
      setChildValue(childValue - 1);
    }
  };
  // ======senior citizen code =====
  const IncseniorValue = () => {
    if (seniorcitizen <= 8 || seniorcitizen !== 0) {
      setSeniorcitizen(seniorcitizen + 1);
    }
  };
  const DecsenioValue = () => {
    if (adultValue + seniorcitizen > 1) {
      setSeniorcitizen(seniorcitizen - 1);
    }
    // if (seniorcitizen - 1 > 0) {

    // }
    // else {
    //   setSeniorcitizen(0);
    //   setIsDescSeniorCitizenDisable(true)

    // }
    // Compare infant value
    if (infantValue >= adultValue + seniorcitizen) {
      setInfantValue(infantValue - 1);
    }
    if (infantValue >= infantValue && infantValue <= 4) {
    } else if (infantValue == 0) {
      // setIsDescInfantDisable(true)
    }
    if (seniorcitizen == 0 && adultValue > 1) {
      // setIsDescChildDisable(true)
    }
  };
  // end of senior citizen code====

  const DecrementInfant = () => {
    if (infantValue > 0) {
      setInfantValue(infantValue - 1);
    }
  };

  const IncrementInfant = () => {
    if (infantValue < adultValue) {
      setInfantValue(infantValue + 1);
    }

    ///for senior value
    if (infantValue < seniorcitizen) {
      setInfantValue(infantValue + 1);
    }

    if (adultValue <= 3 && seniorcitizen <= 3) {
      setInfantValue(infantValue + 1);
    }
  };

  // end of experiment code here
  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    onClose();
  };

  const dispatch = useAppDispatch();
  const handleOk = (event) => {
    event.stopPropagation();
    let passenger={
      child: childValue,
      adult: adultValue,
      seniorcitizen: seniorcitizen,
      infant: infantValue,
      total:childValue+adultValue+seniorcitizen
    }
    dispatch(oneWay(passenger))
    // const adultInfo =
    //   adultValue > 0 ? `${adultValue} Adult${adultValue > 1 ? "s" : ""}` : "";
    // const seniorCitizenInfo = seniorcitizen > 0 ? `${seniorcitizen} SC` : "";
    // const childInfo = childValue > 0 ? `${childValue} Children` : "";

    if (childValue >= 1 && adultValue >= 1) {
      onClose(`${+childValue} Children ,${+adultValue} Adults`);
    } else if (childValue >= 1 && seniorcitizen >= 1) {
      onClose(`${+childValue} Children,${+seniorcitizen} SC`);
    }
    if (adultValue >= 1 && seniorcitizen >= 1) {
      onClose(`${+adultValue} Adults,${+seniorcitizen} SC`);
    } else if (adultValue >= 1 && childValue >= 1) {
      onClose(`${+adultValue} Adult,${+childValue} Children`);
    }
    if (seniorcitizen >= 1 && childValue >= 1) {
      onClose(`${+seniorcitizen} SC,${+childValue} Children`);
    } else if (seniorcitizen >= 1 && adultValue >= 1) {
      onClose(`${+seniorcitizen} SC,${+adultValue} Adult`);
    }
    if (adultValue == 1 || seniorcitizen == 1) {
      onClose(`${+adultValue} Adults,${+seniorcitizen} SC`);
    }
    if (seniorcitizen < 1 && childValue < 1) {
      onClose(`${+adultValue} Adults`);
    } else if (adultValue == 0 && seniorcitizen > adultValue) {
      onClose(`${+seniorcitizen} SC,${+childValue} Children`);
    }
    if (adultValue >= 1 && childValue >= 1 && seniorcitizen >= 1) {
      onClose(
        `${+adultValue} Adults,${+childValue} Children,${+seniorcitizen} SC`
      );
    }

    if (adultValue >= 1 && childValue >= 1 && seniorcitizen == 0) {
      onClose(`${+adultValue} Adults,${+childValue} Children`);
    }
    if (adultValue == 0 && childValue == 0 && seniorcitizen >= 1) {
      onClose(`${+seniorcitizen} SC `);
    }
  };

  const handleChange = () => {
    setValue(adultValue + childValue + infantValue);
  };

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);

  let data = {
    startDate: "2022-04-06",
    endDate: "2022-04-10",
    origin: "AMS",
    destination: "LHR",
    currencyCode: "INR",
    includeTaxesAndFees: true,
    noOfPassengers: "1",
  };


  const passengersCategories = [
    {
      ageGroup: "Adult(s)",
      ageInfo: "Age 12 and above",
      onClickIncFn: IncrementADT,
      onClickDescFn: DecrementADT,
      value: adultValue,
      isIncDisable: isIncAdultDisable,
      isDescDisable: isDescAdultDisable,
    },
    {
      ageGroup: "Senior Citizen(s)",
      ageInfo: "Age 60 and above",
      onClickIncFn: IncseniorValue,
      onClickDescFn: DecsenioValue,
      value: seniorcitizen,
      isIncDisable: isIncSeniorCitizenDisable,
      isDescDisable: isDescSeniorCitizenDisable,
    },
    {
      ageGroup: "Children",
      ageInfo: "Age 2 to 12",
      onClickIncFn: IncrementChild,
      onClickDescFn: DecrementChild,
      value: childValue,
      isIncDisable: isIncChildDisable,
      isDescDisable: isDescChildDisable,
    },
    {
      ageGroup: "Infant(s)",
      ageInfo: "3 days to 2 years. No seat",
      onClickIncFn: IncrementInfant,
      onClickDescFn: DecrementInfant,
      value: infantValue,
      isIncDisable: isIncInfantDisable,
      isDescDisable: isDescInfantDisable,
    },
  ];

  return (
    <>
      <Popover
        onClose={handleCancel}
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        {...other}
        anchorOrigin={{
          vertical: "bottom",
        }}
      >
        <Box sx={{ padding: "8px 16px 8px 16px", minWidth: "400px" }}>
          {passengersCategories.map((item, index) => (
            <PaxCategories key={uuidv4(index)} {...item} />
          ))}
        </Box>
        <Divider />
        <Box
          sx={{
            padding: "8px 16px 8px 16px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={handleOk}
            variant="contained"
            style={{ background: "#FF6300", borderRadius: "8px 0px 8px 8px" }}
          >
            Apply
          </Button>
        </Box>
      </Popover>
    </>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  keepMounted: PropTypes.bool,
  id: PropTypes.string,
  anchorEl: PropTypes.any,
};

export default function Passengers() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(`${1} Adult`);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newValue: any) => {
    setAnchorEl(null);

    if (newValue) {
      setValue(newValue);
    }
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}>
        {/* <List > */}
        <ListItem
          button
          divider
          aria-haspopup="true"
          onClick={handleClickListItem}
        >
          <>
            <ListItemText
              primary="Passengers"
              secondary={value}
              style={{ fontWeight: "bolder" }}
            />
            <ConfirmationDialogRaw
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              value={value}
            />
          </>
        </ListItem>
        {/* </List> */}
      </Box>
      <style>
        {`
      .css-1ghby9w-MuiButtonBase-root-MuiListItem-root{
    width:205px;
    height:45px;
    border:1px solid #E1E1DF;
    border-radius:8px 0px 8px 8px;
    bottom:0px;
  }`}
      </style>
    </>
  );
}
