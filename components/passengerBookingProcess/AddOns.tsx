import React from 'react';
import Typography from '@mui/material/Typography';
import { BiRupee, BiPlusCircle } from "react-icons/bi";
import Image from 'next/image';
import { Box , Button } from '@mui/material';
import styles from './passengerBookingJourney.module.css';
import seatImage from '../../public/svg/seatImage.svg';
import PriorityBoarding from '../../public/svg/PriorityBoarding.svg';

const AddOns = () => {
  return (
    <Box>
        <Box>
              <Box
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                className="accBlock"
              >
                <Typography className={styles.passHeadBlock}>
                  <h5 style={{ paddingLeft: "20px" }}>Akasa Add-ons</h5>
                </Typography>
              </Box>
              <Box>
                <Typography>
                  <Box
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                    }}
                    boxShadow={3}
                  >
                    <Box
                      className=" "
                      style={{ width: "160px", height: "121px" }}
                    >
                      <Image src={seatImage} height='100px' width="100px"/>
                    </Box>
                    <Box className="paragraphInAddon" >
                      <p>Seat & Eat</p>
                      <p>
                        Sit,snack,and relax! Book a seat + snack combo* and save
                        up to 30% on your flight.
                      </p>
                    </Box>
                    <Box
                      className="buttonAddon"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginInlineStart: "10%",
                        border: '1px solid #ff6300',
                        height: 'max-content',
                        margin: 'auto',
                        background: '#ff6300'
                      }}
                    >
                      {" "}
                      <Button className={styles.btnAddon} style={{color:'#ffffff'}}>
                        <BiPlusCircle /> &nbsp;Add for &nbsp; <BiRupee />
                        499{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    style={{ display: "flex", flexDirection: "row" }}
                    boxShadow={3}
                  >
                    <Box
                      className=""
                      style={{ width: "160px", height: "121px" }}
                    >
                      <Image src={PriorityBoarding} height='130px' width="130px" />
                    </Box>
                    <Box className="paragraphInAddon">
                      <p>QuickBoard</p>
                      <p>
                        Skip the queue at the boarding gate and enjoy the
                        convenience of early boarding.
                      </p>
                    </Box>
                    <Box
                      className="buttonAddon"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginInlineStart: "12%",
                        border: '1px solid #ff6300',
                        height: 'max-content',
                        background: '#ff6300',
                        position:'relative',
                        top:'2rem',
                      }}
                    >
                      <Button className={styles.btnAddon} style={{color:'#ffffff'}} >
                        <BiPlusCircle /> &nbsp;Add To Trip{" "}
                      </Button>
                    </Box>
                  </Box>
                </Typography>
              </Box>
            </Box>
    </Box>
  )
}

export default AddOns