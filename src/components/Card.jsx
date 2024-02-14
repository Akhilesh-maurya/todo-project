import React from "react";
import MuiDrawer from "./wrapper/Wrapper";
import { Box, TextField } from "@mui/material";
// import { Text, Page, Document } from "react-pdf/renderer";

export default function Card() {
  return (
    <MuiDrawer open title="Akhilesh" width={600} showCloseBtn>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        gap={2.5}
        overflow="hidden"
      >
        <TextField variant="standard" label="ap" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
        <TextField variant="standard" fullWidth />
      </Box>
    </MuiDrawer>
  );
}
