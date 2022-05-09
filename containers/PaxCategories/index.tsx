import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

function PaxCategories({
  ageGroup,
  ageInfo,
  onClickIncFn,
  onClickDescFn,
  isDescDisable,
  isIncDisable,
  value,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" , flexDirection:'column' , marginBottom:'20px'}}>
        <h5 style={{fontSize:'16px'}}><b>{ageGroup}</b></h5>
        <span className="text-muted" style={{fontSize:'12px' , fontWeight:'400'}}>{ageInfo}</span>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", userSelect: "none" }}>
        <IconButton onClick={onClickDescFn} disabled={isDescDisable}>
          <RemoveCircleOutlineRoundedIcon
            color={isDescDisable ? "disabled" : "warning"}
          />
        </IconButton>
        <Typography sx={{ fontSize: "20px" }}>{value}</Typography>
        <IconButton onClick={onClickIncFn} disabled={isIncDisable}>
          <AddCircleOutlineRoundedIcon
            color={isIncDisable ? "disabled" : "warning"}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default PaxCategories;
