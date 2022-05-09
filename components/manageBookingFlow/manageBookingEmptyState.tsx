import { makeStyles } from '@material-ui/styles';
import { Button, Container, Paper, Typography } from '@mui/material';
import  Box  from "@mui/material/Box";
import React,{useEffect, useState} from 'react'
import styles from "./manageBookingEmpty.module.css";
import Image from 'next/image';
import NoBooking from './NoBooking.svg';
import NoBookings from './noBooking';

// const useStyles = makeStyles({
//     btnm:{
//         backgroundColor:'#FFFFFF',
//         color:'#FF6300 !important',
       
//         textAlign:'center',
//         widht:'9.625rem !important',
//         '&:hover':{
//             backgroundColor:'#FFFFFF'
//         },
//         '&:focus':{
//             paddingBottom:'8px',

//             border:'4px solid red',
//             borderTop:'none',
//             borderLeft:'none',
//             borderRight:'none',
//         }
//     }
// })

const ManageBookingEmptyState = () => {
    const [up,setUp]=useState()
    const updateUpcomming=(e)=>{
        let upComming = document.getElementById('upComming');
        if(e.target.value=='upComming'){
            // setUp(<NoBookings/>)
        }
    }
    const updatePast =(e)=>{
        let past = document.getElementById('past');
        if(e.target.value=='past'){
            setUp((ps)=>{
                return ps=null
            })
        }
    }
    // const classes = useStyles();
  return (
    <>
        <Container>
            <Paper  className={styles.outerBox} elevation={1}>
                <Box className={styles.box}>
                    <Button onClick={updateUpcomming} value='upComming' id="upComming" className={styles.btnm}>
                        Upcoming
                    </Button>
                    <Button className={styles.btnm} value='past' id="past" onClick={updatePast}>
                        Past
                    </Button>
                    <hr className={styles.hr}/>
                </Box>
                {up}
            </Paper>
        </Container>
    </>
  )
}

export default ManageBookingEmptyState