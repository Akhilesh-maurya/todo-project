import React, { useState } from "react";
import MuiDialog from "./Dialog";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const fields = [
  {
    id: "1",
    label: "Facebook",
  },
  {
    id: "2",
    label: "Ap",
  },
];
function MapFields() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (btnId) => {
    console.log({ btnId });
    if (btnId === "cancel") {
      setOpen(false);
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>open</Button>
      <MuiDialog
        open={open}
        title="Map facebook fields to Ap fields"
        onClose={handleOpen}
        onClick={handleClick}
        width={800}
      >
        <Stack display="flex" direction="column" gap={1.5}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="textSecondary">
              Facebook field
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ap Field
            </Typography>
          </Box>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            flex={1}
            gap={2.5}
          >
            {fields.map((field) => (
              <TextField
                key={field.id}
                label={field.label}
                variant="standard"
                InputLabelProps={{ shrink: true }}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <>
                      {expanded ? (
                        <IconButton
                          onClick={() => setExpanded((prev) => !prev)}
                        >
                          <ExpandLessIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          onClick={() => setExpanded((prev) => !prev)}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      )}
                    </>
                  ),
                }}
              />
            ))}
            {fields.length > 0 && (
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </MuiDialog>
    </>
  );
}

export default MapFields;
