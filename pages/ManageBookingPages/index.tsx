import Button from "@mui/material/Button";
import React from "react";
import { Header, Header1 } from "../../components";
import PrivateRoute from "../../components/PrivateRoute";

import Managecontent from "../../components/searchWidgetPanel/managebooking/Managecontent";
const ManageBookingPages = () => {
  return (
    <>
      {/* <Header1/> */}

      <div className="common_container">
        <div className="banner">
          <div style={{ height: "475px" }}>
            <Header1 />
          </div>
          <div className="searchWidget1">
            <div className="Text1">
              <p>
                Powering India <br />
                Growth Engine
              </p>

              <Button
                variant="contained"
                className="btnviewAll"
                style={{
                  color: "white",
                  backgroundColor: "rgba(51, 51, 51, 0.16)",
                  borderRadius: "8px 0px 8px 8px",
                  width: "208px",
                  height: "48px",
                  textTransform: "none",
                  padding: " 12px 16px",
                }}
              >
                View All
              </Button>
            </div>{" "}
          </div>
          <div className="searchWidget">
            <div className="InnerWidget">
              <Managecontent />
            </div>
          </div>
        </div>

        <div>
          {/* <PlacesToGoNearBy/>
      <Footer/>  */}
        </div>

        <style>
          {`
        .searchWidget1{
          position:absolute;
            top: 20%;
            left: 11%;}
        .Text1{
      
    font-weight: 600;
font-size: 40px;
line-height: 47px;

/* white */

color: #FFFFFF;
        }
 .btnviewAll{
  color: white;
  background-color: rgba(51, 51, 51, 0.16);
  border-radius: 8px 0px 8px 8px;
  width: 177px;
  height: 48px;
  text-transform: none;
  padding: 12px 16px;
  border: 1px solid #FFFFFF;
 }
 .InnerWidget{
  width: 79%;
  margin: auto;
 }
      .searchWidget{
        
        width: 100%;
        margin: auto;
        position: absolute;
        background: transparent;
        top: 350px;
      }
      .banner{
background-image: url('/images/banner.jpg');
height: 100% !important;
width:100% !important;
background-size: cover;
background-repeat: no-repeat;
      }
      .common_container{
        max-width: 100%;
      }
    `}
        </style>
      </div>
    </>
  );
};

export default PrivateRoute(ManageBookingPages);
