import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function MainLayout(props) {
  const { children, small } = props;
  //   const theme = useTheme();
  //   const small = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box
      p={6}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="lightgray"
      boxSizing="border-box"
      width="100vw"
      height="100vh"
      component={Paper}
      elevation={2}
      gap={1.5}
    >
      <Box>
        <Typography variant="body2">Akhilesh</Typography>
        <Typography variant="caption">Change my discuss role</Typography>
      </Box>
      <Box
        display="flex"
        maxWidth={small ? "100%" : 560}
        width="100%"
        height="100%"
        justifyContent="flex-end"
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;
