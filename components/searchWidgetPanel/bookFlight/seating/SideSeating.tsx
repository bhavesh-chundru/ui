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
          <ToggleButton value="C1" aria-label="C1">
            xl
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C2" aria-label="C2">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C3" aria-label="C3">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="C4" aria-label="C4" >
            150
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C5" aria-label="C5">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C6" aria-label="C6">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C7" aria-label="C7">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="C8" aria-label="C8" >
            xl
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C9" aria-label="C9">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C10" aria-label="C10">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C11" aria-label="C11">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="C12" aria-label="C12" >
            150
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C13" aria-label="C13">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C14" aria-label="C14">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="C15" aria-label="C15">
            150
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="C16" aria-label="C16" >
            150
          </ToggleButton>
        </StyledToggleButtonGroup>
     </div>
     <style>
         {`
        //  .css-1x4vipr-MuiButtonBase-root-MuiToggleButton-root{
        //     border: 1px solid grey;
        //     padding: 0px 7px;

        //  }
         .css-1x4vipr-MuiButtonBase-root-MuiToggleButton-root.Mui-selected{
           background-color:#FF6300;
         }
         `}
     </style>
     </>
  );
}
