import React from 'react';
import { Typography , Box } from '@mui/material';
import AisleSeating from "../searchWidgetPanel/bookFlight/seating/AisleSeating";
import AisleSeatingTwo from "../searchWidgetPanel/bookFlight/seating/AisleSeatingTwo";
import WindowSeating from "../searchWidgetPanel/bookFlight/seating/WindowSeating";
import WindowSeatingTwo from "../searchWidgetPanel/bookFlight/seating/WindowSeatingTwo";
import SideSeating from "../searchWidgetPanel/bookFlight/seating/SideSeating";
import SideSeatingTwo from "../searchWidgetPanel/bookFlight/seating/SideSeatingTwo";

const SeatSelection = () => {
    return(
        <>
                <Box>
              <Box
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                className="accBlock"
              >
                <Typography style={{backgroundColor:"#ff6300" , color:'#FFFFFF',}}>
                  <h5 style={{ padding: "2px 0px 2px 20px"  }}>Seat Select</h5>
                </Typography>
              </Box>
              <Box sx={{ width: 'max-content', margin: 'auto' , padding:'20px 0px'}}>
                <Typography>
                  Select your seat here
                  <Box className="seatMap" boxShadow={2}>
                    <Box style={{ display: "flex", fontSize: "12px" }}>
                      <span
                        style={{
                          marginTop: "4px",
                          paddingInline: "2px",
                          color: "#222",
                        }}
                      >
                        A
                      </span>{" "}
                      <WindowSeating />
                    </Box>
                    <Box style={{ display: "flex", fontSize: "12px" }}>
                      <span
                        style={{
                          marginTop: "4px",
                          paddingInline: "2px",
                          color: "#222",
                        }}
                      >
                        B
                      </span>
                      <AisleSeating />
                    </Box>
                    <Box style={{ display: "flex", fontSize: "12px" }}>
                      <span
                        style={{
                          marginTop: "4px",
                          paddingInline: "2px",
                          color: "#222",
                        }}
                      >
                        C
                      </span>
                      <SideSeating />
                    </Box>
                    <Box>
                      <Box style={{ color: "#222", fontSize: "14px", display:'flex',justifyContent:'space-around' }}>
                          <span style={{marginLeft: '14px'}}>1</span>
                          <span >2</span>
                          <span style={{marginLeft: '3px'}}>3</span>
                          <span style={{marginLeft: '6px'}}>4</span>
                          <span style={{marginLeft: '5px'}}>5</span>
                          <span style={{marginLeft: '5px'}} >6</span>
                          <span style={{marginLeft: '7px'}} >7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                          <span>13</span>
                          <span>14</span>
                          <span>15</span>
                          <span>16</span>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16 */}
                      </Box>
                
                    </Box>
                    <Box style={{ display: "flex", fontSize: "12px" }}>
                      <span
                        style={{
                          marginTop: "4px",
                          paddingInline: "2px",
                          color: "#222",
                        }}
                      >
                        D
                      </span>
                      <SideSeatingTwo />
                    </Box>
                    <Box style={{ display: "flex", fontSize: "12px" }}>
                      <span
                        style={{
                          marginTop: "4px",
                          paddingInline: "2px",
                          color: "#222",
                        }}
                      >
                        E
                      </span>
                      <AisleSeatingTwo />
                    </Box>
                    <Box style={{ display: "flex", fontSize: "12px" }}>
                      <span
                        style={{
                          marginTop: "4px",
                          paddingInline: "2px",
                          color: "#222",
                        }}
                      >
                        F
                      </span>
                      <WindowSeatingTwo />
                    </Box>
                  </Box>
                </Typography>
              </Box>
            </Box>
        </>
    )
}

export default SeatSelection;