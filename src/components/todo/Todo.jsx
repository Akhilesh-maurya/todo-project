import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  handleAddTodo,
  handleRemoveTodo,
  updateTodo,
} from "../../slice/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg),url(https://cdn.pixabay.com/photo/2018/03/04/09/51/space-3197611_640.jpg)",

    backgroundColor: "#31511f",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    padding: 20,
    overflow: "hidden",
  },
  todo: {
    display: "flex",
    alignItems: "center",
    maxWidth: 600,
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    gap: 15,
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2018/03/04/09/51/space-3197611_640.jpg)",
    backgroundColor: "#00ff6f",
    padding: 10,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    gap: 12,
    boxSizing: "border-box",
    padding: 25,
  },
  box2: {
    display: "flex",
    width: "100%",
    height: "100%",
    padding: 8,
    maxWidth: "600px",
    gap: 12,
    boxSizing: "border-box",
    flexDirection: "column",
    overflow: "auto",
    backgroundImage:
      "url(https://media.istockphoto.com/id/684133544/photo/white-brick-wall-background-photo.webp?b=1&s=170667a&w=0&k=20&c=D1USdg4iW9eg43tpFxfspT3MRf_nMoHQtSnlZPhn8nQ=)",
    backgroundColor: "#cccccc",
  },
  icon: {
    width: 18,
    height: 18,
  },
});

function Todo() {
  const todos = useSelector((state) => state.data.todoData);

  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const classes = useStyles();
  const handleTodoAdd = (e) => {
    e.preventDefault();
    dispatch(handleAddTodo(value));
    setValue("");
  };

  const handleRemove = (id) => {
    dispatch(handleRemoveTodo(id));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.todo}>
        <Box className={classes.box}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h3" style={{ color: "rgb(139 8 11 / 90%)" }}>
              Todo
            </Typography>
          </Box>
          <TextField
            variant="standard"
            label="Add todo"
            value={value}
            placeholder="Enter todo...."
            InputLabelProps={{
              shrink: true,
              style: {
                color: "darkblue",
                fontSize: 24,
                fontWeight: 800,
              },
            }}
            sx={{
              input: {
                "&::placeholder": {
                  opacity: 2,
                  color: "black",
                },
              },
            }}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton className={classes.icon} onClick={handleTodoAdd}>
                    <AddCircleOutlineIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box className={classes.box2}>
            {todos.map((todo) => {
              const { label, id } = todo;
              return (
                <TextField
                  key={id}
                  variant="standard"
                  value={label}
                  color="red"
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) =>
                    dispatch(updateTodo({ id, label: e.target.value }))
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="medium"
                          className={classes.icon}
                          onClick={() => handleRemove(id)}
                        >
                          <RemoveCircleOutlineIcon color="primary" />
                        </IconButton>
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    style: {
                      color: "darkblue",
                      fontSize: 18,
                      fontWeight: 800,
                    },
                  }}
                  fullWidth
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Todo;
