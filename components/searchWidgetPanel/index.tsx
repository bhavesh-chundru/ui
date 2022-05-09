import  {useState} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookingSearchWidget from "./bookFlight";
import Checkin from './Check-in';
// import FlightStatusTab from './Flight-status';
var SwipeableViews = require('react-swipeable-views').default;
import Bookingtab from './managebooking';
// import ManageBooking from "./managebooking/index"
function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }):JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}


const SearchWidget=() =>{
  const theme = useTheme();
  const [value, setValue] = useState(0);


  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index:any) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };


  return (
   <>
   <div style={{margin:"3% 0"}}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          // position: 'relative',
          margin:"auto",
          width: '100%',
          maxHeight:'100%',
          left:'120px',
          // blend :'Pass through',
          border: '1.5px solid grey',
          borderRadius : "16px 0px 16px 16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1);"
        }}
      >
        <AppBar position="static" color="default" style={{borderRadius:"16px 0 0 0"}}>
          <Tabs 
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab style={{borderRadius:"16px 0 0 0"}} label="Book a Flight" {...a11yProps(0)} />
            <Tab  label="Checkin" {...a11yProps(1)} />
            <Tab  label="My Bookings" {...a11yProps(2)}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
           index={value}
           onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <BookingSearchWidget />

          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Checkin/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
           <Bookingtab/>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
    <style>
        {`
        .css-18p26rm{
          border:none;
        }
        .css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected {
          color:#FF6300;
          // font-family: Poppins;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
          background-color:#fff;
      }
      .css-1ujykiq-MuiButtonBase-root-MuiTab-root{
        background-color: #fff;
        color:#333333;
        // font-family: Poppins;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
          text-transform: none;
      }
      .css-1aquho2-MuiTabs-indicator {
        position: absolute;
        height: 2px;
        bottom: 0px;
        width: 30%;
        background-color: #FF6300;
    }
          `}
          </style>
   </> 
  );
}

export default SearchWidget;
