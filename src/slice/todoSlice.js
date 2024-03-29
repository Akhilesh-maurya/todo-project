import { createSlice, nanoid } from "@reduxjs/toolkit";
const name = "todo";
const initialState = {
  todoData: [{ id: "1", label: "Akhilesh" }],
};

const todoSlice = createSlice({
  name,
  initialState,
  reducers: {
    handleAddTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        label: action.payload,
      };
      state.todoData.push(todo);
    },
    handleRemoveTodo: (state, action) => {
      state.todoData = state.todoData.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      const { id, label } = action.payload;
      state.todoData = state.todoData.map((todo) =>
        todo.id === id ? { ...todo, label } : todo
      );
    },
  },
});

export const { handleAddTodo, handleRemoveTodo, updateTodo } =
  todoSlice.actions;
export const selectTodo = (state) => state.data.todoData;
export default todoSlice.reducer;
