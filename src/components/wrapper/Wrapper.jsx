import {
  Box,
  Button,
  DialogActions,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const initActionData = [
  { id: "cancel", label: "Cancel", color: "secondary", variant: "outlined" },
  { id: "save", label: "Save", color: "primary", variant: "contained" },
];

const useStyles = makeStyles({
  root: ({ width = 500, maxWidth = 600 }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width,
    maxWidth,
    flex: 1,
  }),
  head: {
    display: "flex",
    flexDirection: "row",
    padding: "0 16px",
    height: 40,
    justifyContent: "space-between",
    borderBottom: "1px solid",
    borderBottomColor: "1px solid black",
    alignItems: "center",
  },
  body: ({ noPadding }) => ({
    display: "flex",
    flex: 1,
    overflow: "auto",
    padding: noPadding || 16,
  }),
  button: {
    display: "flex",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  buttons: {
    borderTop: `1px solid black`,
    backgroundColor: "lightgray",
  },
  group: {
    display: "flex",
    width: "inherit",
  },
});

function MuiDrawer(props) {
  const {
    noDrawer,
    children,
    open,
    width,
    title,
    onClose = () => {},
    maxWidth,
    actionData = initActionData,
    noPadding,
    noActionData,
    onClick = () => {},
    showCloseBtn,
  } = props;
  const classes = useStyles({ width, maxWidth, noPadding });
  const Wrapper = noDrawer ? Box : Drawer;
  return (
    <Wrapper
      width={width}
      elevation={1}
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
    >
      <Box className={classes.root}>
        <Box className={classes.head}>
          {title && <Typography>{title}</Typography>}
          {showCloseBtn && (
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <Box className={classes.body}>{children}</Box>
        <Box flex={1} />
        {!noActionData && (
          <Box className={classes.buttons}>
            <Box className={classes.button}>
              <DialogActions className={classes.group}>
                {actionData.map((action) => {
                  const { id, color, label, variant, disabled } = action;
                  return (
                    <Button
                      key={id}
                      color={color}
                      disabled={disabled}
                      variant={variant}
                      onClick={(e) => onClick(id, e)}
                      style={{ borderRadius: "20px" }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </DialogActions>
            </Box>
          </Box>
        )}
      </Box>
    </Wrapper>
  );
}

export default MuiDrawer;
