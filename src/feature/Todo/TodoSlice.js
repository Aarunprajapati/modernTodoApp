// todoSlice.js

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
    removeTodo: (state, action) => {
      const idToRemove = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== idToRemove);
    },
  },
});
// console.log(todoSlice.state)
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
