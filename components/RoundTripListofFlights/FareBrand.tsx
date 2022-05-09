import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiRupee, BiPlusCircle } from "react-icons/bi";
import  Box  from "@mui/material/Box";
import Image from 'next/image';
import Available from '../../public/svg/Available.svg';
import NotAvailable from '../../public/svg/NotAvailable.svg';


export default function FareBrand() {
  return (
    <>
      <TableContainer component={Paper} className='tableContainer' >
        <Table aria-label="simple table" style={{width:'98.8%'}}>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#EEE7FA", width: "364px" , height:"116.76px" , }}
              >
                <span  className="fareSection"><input id="akasasaver" type="radio" name='fareBrand' value="2200" className="fareRadio"  /><label className="farePrice" htmlFor="akasasaver" ><BiRupee/>2,200</label></span><br/>                <span className="brandName">Akasa Saver</span> <br />
                <span className="points">Earn 150 Pts </span> <br />
                <span className="seatsLeft"> 1 Seat left</span>
              </TableCell>
              <TableCell
                align="center"
                sx={{  width: "364px" , height:"116.76px" ,borderInlineEnd:'1.48px solid #E1E1DF' }}
              >
                <span className="fareSection"><input id="akasapremium" type="radio" name='fareBrand' value="2500" className="fareRadio" /><label className="farePrice" htmlFor="akasapremium" ><BiRupee/>2,500</label></span><br/>
                <span className="brandName">Akasa Premium</span> <br />
                <span className="points">Earn 175 Pts </span> <br />
                <span className="seatsLeft"> 1 Seat left</span>
              </TableCell>
              <TableCell
                align="center"
                sx={{  width: "364px" , height:"116.76px" }}
                className='Disabled'
              >
                <span className="fareSection"><input id="akasaluxe" type="radio" name='fareBrand' value="2200" className="fareRadio" /><label className="farePrice" htmlFor="akasaluxe" ><BiRupee/>2,200</label></span><br/>
                <span className="brandName">Akasa Luxe</span> <br />
                <span className="points">Earn 150 Pts </span> <br />
                <span className="seatsLeft"> 1 Seat left</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Box className="BrandOffers" >Meals</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" >
                  <Image src={Available} alt="available"/>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Seat Select</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" >
                <Image src={Available} alt="available"/>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Priority Check-in</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" >
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Priority Baggage</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" >
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Date Change Charges</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                  <span className="textDesign" >
                  upto <BiRupee/>3,000
                  </span>
                </TableCell>
                <TableCell align="center" >
                  <span className="textDesign" >
                  4 days & above:<BiRupee/>1,000<br/>
                  3 days & above:<BiRupee/>1,500
                  </span>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <span className="textDesign" >
                4 days & above:<BiRupee/>1,500<br/>
                  3 days & above:<BiRupee/>2,000
                </span>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Cancellation Charges</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                <span className="textDesign" >
                upto <BiRupee/>3,000
                </span>
                </TableCell>
                <TableCell align="center" >
                <span className="textDesign" >
                4 days & above:<BiRupee/>1,000<br/>
                  3 days & above:<BiRupee/>1,500
                </span>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <span className="textDesign" >
                4 days & above:<BiRupee/>1,500<br/>
                  3 days & above:<BiRupee/>2,000
                </span>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Premium Seats</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" sx={{ backgroundColor: "#EEE7FA" }}>
                <span className="textDesign" >
                <BiRupee/>500 onwards
                </span>
                </TableCell>
                <TableCell align="center" >
                  <span className="textDesign" >upto 30% discount</span>
                </TableCell>
                <TableCell align="center" className="Disabled" >
                <span className="textDesign" >upto 40% discount</span>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <style>
        {`
        .tableContainer{
          width:99.9%;
        }
        .tableWidth{
          width:364px;
        }
        .brandName{
          font-size: 16px;
          font-weight: 600 ;
          line-height:24px;
        }
        .points{
          font-size:12px;
          font-weight: 500;
          color: #FF6300;
        }
        .seatsLeft{
          font-size:10px;
          font-weight: 500;
          color: #333333;
        }
        .fareSection{
          cursor-pointer;
        }
        .fareRadio{
          height: 20px;
          width: 20px;
          position:relative;
          top:3px;
      }
        .farePrice{
          font-size: 16px;
          font-weight:500;
          color:#333333;
        }

        .fareSection input[type='radio']:checked {
          background-color:#FF6300;
        }
        .BrandOffers{
          height:1 className="tableRow"8px;
          width: 300%;
          background-color:#F0F3F5;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase
        }
        .tableRow{
          height:38px !important;
        }
        .textDesign {
          font-size:12px;
          font-weight:400;
          color :#666666;
        }
        .Disabled{
          opacity:.3;
          pointer-events:none;
        }
        `}
      </style>
    </>
  );
}
