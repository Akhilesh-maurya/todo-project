import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const initControls = [
  {
    id: "cancel",
    label: "Cancel",
    color: "secondary",
    variant: "outlined",
    disabled: false,
  },
  {
    id: "save",
    label: "Save",
    color: "primary",
    variant: "contained",
    disabled: false,
  },
];

function MuiDialog(props) {
  const {
    open,
    title,
    controls = initControls,
    children,
    width = 600,
    fitHeight = true,
    onClose,
    onClick = () => {},
  } = props;
  return (
    <Dialog
      open={open}
      style={{ width: "100%" }}
      sx={{
        "& .MuiPaper-root": {
          height: fitHeight ? "fit-content" : "100%",
          maxWidth: width,
          width: "100%",
          overflow: "hidden",
        },
        overflow: "hidden",
      }}
      aria-labelledby="customized-dialog-title"
      onClose={onClose}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        id="customized-dialog-title"
      >
        {title}
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton onClick={onClose}>
            <ClearIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
      {controls.length > 0 && (
        <>
          <Divider />
          <DialogActions>
            {controls.map((control) => {
              const { id, label, variant, color, disabled } = control;
              return (
                <Button
                  key={id}
                  color={color}
                  variant={variant}
                  disabled={disabled}
                  onClick={(e) => onClick(id, e)}
                  style={{ borderRadius: "20px" }}
                >
                  {label}
                </Button>
              );
            })}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default MuiDialog;
