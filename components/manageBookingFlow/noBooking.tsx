import  Box  from "@mui/material/Box";
import React from "react";
import Image from 'next/image';
import { Button, Typography } from "@mui/material";
import styles from "./manageBookingEmpty.module.css";
import NoBooking from "../../public/svg/NoBooking.svg";

function NoBookings(){
    return(
            <Box className={styles.cont}>
                <Image src={NoBooking} alt="No Booking"/>
                <Typography className={styles.title}>
                    No bookings found
                </Typography>
                <Typography className={styles.content}>
                     Book flights to see them here or retrieve 
                </Typography>
                <Typography>
                    an existing booking
                </Typography>
                <Button className={styles.orBtn}>
                    Retrieve A booking
                </Button>
            </Box>
    )
}
export default NoBookings;