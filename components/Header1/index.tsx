import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Image from 'next/image'
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  Router  from 'next/router';

const Header = () => {

  const logout =()=>{
    localStorage.clear();
    Router.push({
      pathname: "/",
    })
  }
  return (
    <>
<div className='header_css'>
<nav id="navv" className="navbar navbar-expand-lg navbar-transparent bg-transparent"> 
 <Sidebar/>
<Link href="/">
<a style={{margin: "0px 21px -15px 21px"}} className="navbar-brand"  id='h1' data-abc="true">
<Image src="/images/Group 58.png" width="130" height="45"  alt="image not found " className='navbar-brand' /></a>
</Link>
   
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
             <a className="nav-link" data-abc="true">Book <span className="sr-only"></span></a>
             </Link>
             </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Manage</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Add-ons</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Offers</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Club Akasa </a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">Support</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">P H  - 1</a> </li>
            {/* <li className="nav-item"> <a className="nav-link" href="#" data-abc="true"> P H -  2</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true">P H -  3</a> </li> */}
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true"><SearchIcon/> </a> </li>
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true"><NotificationsIcon/> </a> </li>
            <li className="nav-item"> <a className="nav-link" data-abc="true"><AccountCircleIcon/> <span style={{cursor:"pointer"}} onClick={logout}>Logout</span></a> </li>
            
            <li className="nav-item"> <a className="nav-link" href="#" data-abc="true"><MobileScreenShareIcon/></a> </li>



            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">English</a></li>
              <li><a className="dropdown-item" href="#">Hindi</a></li>
            </ul>
        </li> */}
        </ul>
        
    </div>
    </div>
</nav>

</div>

<style>
  {
    `
    #navv a {
      color: white;
    }
    .dropdown-menu[data-bs-popper] {
      left: -100px !important;
    }
    .header_css{
      margin:10px;
    }
    `
  }
</style>



    
    </>
  )
}

export default Header




// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Image from 'next/image'
// import Link from 'next/link';

// export default function Header() {
//   return (
//     <Box sx={{ flexGrow: 1 ,background:"#212121"}}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//            <Link href="/">
//     <a style={{margin: "0px 21px -15px 21px"}} className="navbar-brand"  id='h1' data-abc="true">
//      <Image src="/images/logo.jpeg" width="120" height="50"  alt="image not found " className='navbar-brand' /></a>
//         </Link>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
          
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <Button color="inherit">Login</Button>
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
