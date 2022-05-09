import {useState} from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="army">Armed Forces</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          sx={{marginInlineStart:'8px'}}
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="doctors">Doctors & Nurses</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          sx={{marginInlineStart:'8px'}}
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="minor">Unaccompained Minor</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          sx={{marginInlineStart:'8px'}}
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="senior">Senior Citizen</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          sx={{marginInlineStart:'8px'}}
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="students">Students</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <style>
        {`
        .css-ueukts-MuiButtonBase-root-MuiToggleButton-root{
          border-radius: 16px;
          padding-top: 0;
          padding-bottom: 0;
          text-transform: none;
        }
        .css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover{
          border: 1px solid #CCC;
          background: transparent;
        }
        .css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected{
          border: 1px solid #CCC;
          background: transparent;
        }
        .css-ueukts-MuiButtonBase-root-MuiToggleButton-root{
          background: #F0F3F5;
          color: #000;
          border: none;
        }
        `}
      </style>
    </>
  );
}
