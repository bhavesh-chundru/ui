import {useState} from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = useState('');
  const [formats, setFormats] = useState(() => ['']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
      <>
    <div style={{display:"flex", justifyContent:"center" , textTransform:'none' }}>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A1" aria-label="A1">
            xl
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A2" aria-label="A2">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A3" aria-label="A3">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="A4" aria-label="A4" >
            250
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A5" aria-label="A5">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A6" aria-label="A6">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A7" aria-label="A7">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="A8" aria-label="A8" disabled style={{backgroundColor:'#E1E1E1'}}>
            xl
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A9" aria-label="A9">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A10" aria-label="A10">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A11" aria-label="A11">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="A12" aria-label="A12" >
            250
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A13" aria-label="A13">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A14" aria-label="A14">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="A15" aria-label="A15">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="A16" aria-label="A16" >
            200
          </ToggleButton>
        </StyledToggleButtonGroup>
     </div>
     <style>
         {`
         .css-1x4vipr-MuiButtonBase-root-MuiToggleButton-root{
            border: 1px solid grey !important;
            padding: 0px 7px;
            font-size: 8px;
            background-color:#F0F0F0;

         }
         .css-1x4vipr-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover{
           background-color:#FF6300;
         }
         `}
     </style>
     </>
  );
}
