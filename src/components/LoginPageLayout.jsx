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
import SendIcon from "@mui/icons-material/Send";

function LoginPageLayout(props) {
  const {
    title,
    subTitle,
    children,
    btnTitle,
    account,
    forgot,
    remember,
    onClick,
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
              {account}
            </Typography>
          </Box>
        )}
        <Box>{children}</Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {remember && (
            <Box>
              <Checkbox size="small" />
              <Typography variant="caption" color="textSecondary">
                {remember}
              </Typography>
            </Box>
          )}
          <Typography
            variant="caption"
            color="primary"
            component={Link}
            style={{ cursor: "pointer" }}
          >
            {forgot}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ borderRadius: "50%" }}
          onClick={onClick}
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
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
        >
          Privacy policy <SendIcon style={{ width: 18, height: 18 }} />
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPageLayout;
