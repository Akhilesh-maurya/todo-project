import React, { useState } from "react";
import MainLayout from "./MainLayout";
import LoginPageLayout from "./LoginPageLayout";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <MainLayout>
      <LoginPageLayout
        title="Login"
        btnTitle="Login"
        account="Create an account"
        remember="Remember me"
        forgot="Forgot my password"
      >
        <Stack display="flex" gap={2.5}>
          <TextField
            label="Email"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleVisible}>
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </LoginPageLayout>
    </MainLayout>
  );
}

export default Login;
