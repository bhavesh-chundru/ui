import { Button } from "@mui/material";
import  Box  from "@mui/material/Box";
import React from "react";
import styles from "./oneWayManageBookingFlow.module.css"

function FlightDetailsButton(){
    return(
        <Box className={styles.flight}>
            <Button  className={styles.flightTex}>
                Flight details
            </Button>
        </Box>
    )
}
export default FlightDetailsButton;