import React,{useState} from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import OneWayTrip from './OneWay';
import ReturnTrip from './Return';
import MultiCityTrip from './Multi';
import Radio from '@mui/material/Radio';



const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  // font-family: Poppins; 
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #595959;;
  cursor: pointer;
  background-color: transparent;
  margin: 6px 6px;
  border:transparent;
  justify-content: center;
  // padding: 12px, 20px, 12px, 20px;


  &:focus {
    color: #FF6300;
    // border-radius: 45px;
    // outline: 2px solid #908BA6;
    // outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    // background: #000000;
    color: #FF6300;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  // font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: space-between;
  gap:16px;
`;

export default function BookingSearchWidget() {

  const [selectedValue, setSelectedValue] = useState('oneway');

  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item:any) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <>
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab><span  ><Radio {...controlProps('oneway')} sx={{'&.Mui-checked': {color: "#FF6300"},}} id="oneway" /> <label htmlFor="oneway" className="Pointer" >One Way</label></span></Tab>
        <Tab><span ><Radio {...controlProps('roundtrip')}  sx={{'&.Mui-checked': {color: "#FF6300"},}} id="roundtrip" /> <label htmlFor="roundtrip" className="Pointer" >Round Trip</label></span></Tab>
        <Tab><span ><Radio {...controlProps('Multi')} sx={{'&.Mui-checked': {color: "#FF6300"},}} id="Multi" /> <label htmlFor="Multi" className="Pointer" >Multi-City</label></span></Tab>
      </TabsList>
      <TabPanel value={0}><OneWayTrip/></TabPanel>
      <TabPanel value={1}><ReturnTrip/></TabPanel>
      <TabPanel value={2}><MultiCityTrip/></TabPanel>
    </TabsUnstyled>
    <style>
      {

        `
      .Pointer{
        cursor:pointer;
      }
        
        `
      }
    </style>
    </>
  );
}
