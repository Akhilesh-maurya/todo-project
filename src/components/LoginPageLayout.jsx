import {
  Box,
  Button,
  Checkbox,
  Divider,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

function LoginPageLayout(props) {
  const {
    title = "Login",
    subTitle = "Do not have an account?",
    children,
    btnTitle = "Login",
  } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      boxSizing="border-box"
      p={5}
      component={Paper}
    >
      <Box display="flex" flexDirection="column" gap={1.5}>
        <Typography variant="subtitle1" color="textPrimary">
          {title}
        </Typography>
        {subTitle && (
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="caption" color="textSecondary">
              {subTitle}
            </Typography>
            <Typography
              variant="caption"
              color="primary"
              component={Link}
              style={{ cursor: "pointer" }}
            >
              Create an account
            </Typography>
          </Box>
        )}
        <Box>{children}</Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Checkbox size="small" />
            <Typography variant="caption" color="textSecondary">
              Remember me
            </Typography>
          </Box>
          <Typography
            variant="caption"
            color="primary"
            component={Link}
            style={{ cursor: "pointer" }}
          >
            Forgot my password
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ borderRadius: "50%" }}
        >
          {btnTitle}
        </Button>
      </Box>
      <Box flex={1} />
      <Divider />
      <Box
        display="flex"
        p={0.5}
        alignItems="center"
        justifyContent="space-between"
        mt={2}
      >
        <Typography variant="caption" color="textSecondary">
          &#169; 2024. AP pvt.All right reserve.
        </Typography>
        <Typography
          variant="caption"
          color="primary"
          component={Link}
          style={{ cursor: "pointer" }}
        >
          Privacy policy
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPageLayout;
