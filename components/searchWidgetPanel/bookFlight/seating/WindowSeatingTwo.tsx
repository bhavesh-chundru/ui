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
  const [alignment, setAlignment] =useState('');
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
          <ToggleButton value="F1" aria-label="F1">
            xl
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F2" aria-label="F2">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F3" aria-label="F3">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="F4" aria-label="F4" >
            250
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F5" aria-label="F5">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F6" aria-label="F6">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F7" aria-label="F7">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="F8" aria-label="F8" disabled style={{backgroundColor:'#E1E1E1'}}>
            xl
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F9" aria-label="F9">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F10" aria-label="F10">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F11" aria-label="F11">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="F12" aria-label="F12" >
            250
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F13" aria-label="F13">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F14" aria-label="F14">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="F15" aria-label="F15">
            250
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="F16" aria-label="F16" >
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
