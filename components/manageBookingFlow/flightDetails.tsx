import { Typography } from "@mui/material";
import  Box  from "@mui/material/Box";
import React from "react";
import styles from "./oneWayManageBookingFlow.module.css";
import Image from "next/image";
import Union from "../../public/svg/Union.svg";
import Flight_90 from "../../public/svg/Flight_90.svg";
import AkasaLogoSmall from "../../public/svg/AkasaLogoSmall.svg";

function FlightDetails(){
    return(
        <>
        <Box className={styles.flyBook}>
            <Box>
                <Box className={styles.flyDet}>
                    <Typography variant="h3" component='h1' className={styles.flyTime}>
                        06:00 AM
                    </Typography>
                    <Typography variant='h6' component='h6' className={styles.flyDate}>
                        Thu,18 Feb
                    </Typography>       
                </Box> 
            </Box>
            <Box>
                <Box>
                    <Typography className={styles.flyMidTim} variant="body1">
                        4h 40min
                    </Typography>
                </Box>
                <Box className={styles.rel}>
                    <Box>
                        <Image className={styles.ibar} src={Union} alt="Union"/>
                    </Box>
                    <Box className={styles.positionPlain}>
                        <Image className={styles.iplain} src={Flight_90} alt="Flight_90"/>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box className={styles.flyDet}>
                        <Typography variant="h3" component='h1' className={styles.flyTime}>
                            11:40 AM
                        </Typography>
                        <Typography variant='h6' component='h6' className={styles.flyDate}>
                            09:30 DEL-T1
                        </Typography>       
                    </Box>
            </Box>
        </Box>

        <Box className={styles.flyRoot}>
            <Box className={styles.flyRootSt}>
                <Box sx={{marginTop:'1rem'}}>
                    <Typography variant="h3" component='h1' className={styles.flyRootCity}>
                        Bengaluru
                    </Typography>
                </Box>
                {/* not used maxwidth */}
                <Box className={styles.flyRootAdd}>
                    <Typography sx={{color:'#666666',fontSize:'16px',marginTop:'0.25rem'}}>
                        BLR(T1),Gate 14,
                        Kempegawda International Airport
                    </Typography>
                </Box>
                    <Typography variant="body1" className={styles.flyRootStop}>
                        2 Stops  • BOM,NAG 
                    </Typography>
            </Box>
            <Box className={styles.flyRootDes}>
                <Box className={styles.flyRootDCit}>
                    <Typography variant="h3" component='h1' className={styles.flyRootDtext}>
                        Delhi
                    </Typography>
                </Box>
                <Box className={styles.flyDesAdd}>
                    <Typography className={styles.flyDesAddt}>
                        BOM(T1),Gate 5, Indira Gandhi International Airport
                    </Typography>
                    <Box className={styles.flyNo}>
                        <Image src={AkasaLogoSmall} alt="AkasaLogoSmall"/>
                        <span>
                            AK3947
                        </span>
                    </Box>
                </Box>
            </Box>   
        </Box>
    </>    
    )
}
export default FlightDetails;