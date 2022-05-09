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
          <ToggleButton value="E1" aria-label="E1">
            xl
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E2" aria-label="E2">
              100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E3" aria-label="E3">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="E4" aria-label="E4" >
            100
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E5" aria-label="E5">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E6" aria-label="E6">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E7" aria-label="E7">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="E8" aria-label="E8" >
            xl
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E9" aria-label="E9">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E10" aria-label="E10">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E11" aria-label="E11">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="E12" aria-label="E12" >
            100
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E13" aria-label="E13">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E14" aria-label="E14">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="E15" aria-label="E15">
            100
          </ToggleButton>
          </StyledToggleButtonGroup>
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting">
          <ToggleButton value="E16" aria-label="E16" style={{paddingInline:"14px"}} >
            
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
