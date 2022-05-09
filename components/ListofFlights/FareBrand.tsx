import React,{useState} from "react";
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
import {convertedCurrency} from '../../helper/currencyConverter';



function FareBrand(flightfares:any){


  const [saverFare, premiumFare, luxeFare, arrivalTime, departureTime, flightNumber, originStation, destinationStation] = flightfares.flightFare

  const [activeSaver,setActiveSaver] = useState(true);
  const [activePremium,setActivePremium] = useState(false);
  const [activeLuxe,setActiveLuxe] = useState(false);



  const getFareSelected = (...fareType) =>{
    flightfares.getFare(fareType)
  }

//fares to display when accordian is expanded 
 const akasaSaver=flightfares.allfares[0]?.discountedTotal?convertedCurrency( flightfares.allfares[0].discountedTotal,"INR"):'';
 const akasaPremium=flightfares.allfares[1]?.discountedTotal?convertedCurrency( flightfares.allfares[1].discountedTotal,"INR"):'';
 const akasaLuxe=flightfares.allfares[2]?.discountedTotal?convertedCurrency( flightfares.allfares[2].discountedTotal,"INR"):'';

 return (
    <>
      <TableContainer component={Paper} className='tableContainer' >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {akasaSaver && 
                <TableCell
                className= {akasaSaver ? 'nonEnable' : 'Disabled'}
                id={activeSaver ? 'enable' : null}
                  onClick={()=>{
                    getFareSelected(akasaSaver, arrivalTime, departureTime, flightNumber, originStation, destinationStation,"Book Saver")
                    setActiveSaver(true)
                    setActivePremium(false)
                    setActiveLuxe(false)
                    }}>
                  <label className="farePrice" htmlFor="akasasaver" >
                  <span  className="fareSection"><input id="akasasaver" type="radio" name='fareBrand'  value={flightfares.index} defaultChecked={flightfares.index === 0} className="fareRadio"  />{akasaSaver}</span><br/>                <span className="brandName">Akasa Saver</span> <br />
                  <span className="points">Earn 150 Pts </span> <br />
                  <span className="seatsLeft"> 1 Seat left</span></label>
                </TableCell>
              }
              <TableCell
               className= {akasaPremium ? '' : 'Disabled'}
               id={activePremium ? 'enable' : null}
                align="center"
                onClick={()=>{
                  getFareSelected(akasaPremium, arrivalTime, departureTime, flightNumber, originStation, destinationStation,"Book Premium")
                    setActiveSaver(false)
                    setActivePremium(true)
                    setActiveLuxe(false)
                  }}>
                <label className="farePrice" htmlFor="akasapremium" >
                <span className="fareSection"><input id="akasapremium" type="radio" name='fareBrand' value="2500" className="fareRadio" />{akasaPremium}</span><br/>
                <span className="brandName">Akasa Premium</span> <br />
                <span className="points">Earn 175 Pts </span> <br />
                <span className="seatsLeft"> 1 Seat left</span></label>
              </TableCell>
              <TableCell
               className= {akasaLuxe ? '' : 'Disabled'}
               id={activeLuxe ? 'enable' : null}
                align="center"
                onClick={()=>{
                  getFareSelected(akasaLuxe, arrivalTime, departureTime, flightNumber, originStation, destinationStation,"Book Luxe")
                  setActiveSaver(false)
                    setActivePremium(false)
                    setActiveLuxe(true)
                }}>
                <label className="farePrice" htmlFor="akasaluxe" >
                <span className="fareSection"><input id="akasaluxe" type="radio" name='fareBrand' value="2200" className="fareRadio" />{akasaLuxe}</span><br/>
                <span className="brandName">Akasa Luxe</span> <br />
                <span className="points">Earn 150 Pts </span> <br />
                <span className="seatsLeft"> 1 Seat left</span></label>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Box className="BrandOffers" >Meals</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                  <Image src={Available} alt="available"/>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Seat Select</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                <Image src={Available} alt="available"/>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Priority Check-in</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Priority Baggage</Box>
              <TableRow className="tableRow">
                <TableCell align="center"  className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                <Image src={NotAvailable} alt="not available"/>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
                <Image src={Available} alt="available"/>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Date Change Charges</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                  <span className="textDesign" >
                  upto ₹3,000
                  </span>
                </TableCell>
                <TableCell align="center" className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                  <span className="textDesign" >
                  4 days & above:₹1,000<br/>
                  3 days & above:₹1,500
                  </span>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
                <span className="textDesign" >
                4 days & above:₹1,500<br/>
                  3 days & above:₹2,000
                </span>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Cancellation Charges</Box>
              <TableRow className="tableRow" >
                <TableCell align="center" className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                <span className="textDesign" >
                upto ₹3,000
                </span>
                </TableCell>
                <TableCell align="center" className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                <span className="textDesign" >
                4 days & above:₹1,000<br/>
                  3 days & above:₹1,500
                </span>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
                <span className="textDesign" >
                4 days & above:₹1,500<br/>
                  3 days & above:₹2,000
                </span>
                </TableCell>
              </TableRow>
              <Box className="BrandOffers" >Premium Seats</Box>
              <TableRow className="tableRow" >
                <TableCell align="center"className= {akasaSaver ? '' : 'Disabled'} id={activeSaver ? 'enable' : null}>
                <span className="textDesign" >
                ₹500 onwards
                </span>
                </TableCell>
                <TableCell align="center"className= {akasaPremium ? '' : 'Disabled'} id={activePremium ? 'enable' : null}>
                  <span className="textDesign" >upto 30% discount</span>
                </TableCell>
                <TableCell align="center" className= {akasaLuxe ? '' : 'Disabled'} id={activeLuxe ? 'enable' : null}>
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
        #enable{
          background-color: #EEE7FA;
          text-align: center;
        }
        .Disabled{
          opacity:.3;
          pointer-events:none;
          text-align: center;
        }
        .nonEnable{
          text-align: center;
          width: 364px;
           height:116.76px;
        }
        .farePrice{
          cursor:pointer;
        }




        `}
      </style>
    </>
  );
}

export default FareBrand;