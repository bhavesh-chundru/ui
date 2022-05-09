import * as React from "react";
import {  Grid, Container } from "@material-ui/core";
import  Box  from "@mui/material/Box";
import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModifyWidget from "../searchWidgetPanel/bookFlight";
import styles from "./modifySearch.module.css";
import { useAppSelector } from "../../redux/hooks";
import moment from "moment";

const Paragraph = styled.b`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;

const ModifySearch = () => {
  const origin = useAppSelector((state) => state.bookingData.origin);
  const destination = useAppSelector((state) => state.bookingData.destination);
  const originCity = useAppSelector((state) => state.bookingData.origincity);
  const destinationCity = useAppSelector((state) => state.bookingData.destinationcity);
  const passenger=useAppSelector((state)=>state.bookingData.passenger);
  const date=localStorage.getItem("Date")
  // const  passenger={
  //   child: child,
  //   adult:adult ,
  //   seniorcitizen:seniorcitizen ,
  //   infant: infant,
  //   total: totalPassenger
  // }
  // const passengerDetails=useAppSelector((state)=>state.bookingData.passenger);


  return (
    <>
      <Container>
        <Accordion
          style={{ borderRadius: "16px 0px 16px 16px", margin: " 0 57px" }}
        >
          <Box boxShadow={5} className={styles.modifyBlock}>
            <Grid container spacing={3}>
              <Grid item xs={10} style={{ padding: "30px 0px 0px 50px" }}>
                <Paragraph>
                  One Way: {originCity}-{destinationCity} &#9679; { moment(date).format('D MMM')} &#9679; {passenger.total}  
                  &nbsp; Passengers
                </Paragraph>
              </Grid>

              <Grid
                item
                xs={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "15px 0px 0px 0px",
                }}
              >
                <AccordionSummary style={{ width: "300px" }}>
                  <Box className={styles.modifyBtnBlock}>Modify</Box>
                </AccordionSummary>
              </Grid>
            </Grid>
          </Box>

          <Box boxShadow={5} style={{ margin: "5px" }}>
            <AccordionDetails style={{ padding: "1%" }}>
              <ModifyWidget />
            </AccordionDetails>
          </Box>
        </Accordion>
      </Container>
    </>
  );
};

export default ModifySearch;
