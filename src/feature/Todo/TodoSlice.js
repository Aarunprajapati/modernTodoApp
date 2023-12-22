import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            
            // Find the todo to update by its ID
            const todoToUpdate = state.todos.find((todo) => todo.id === id);

            // If the todo is found, update its text
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions

export default todoSlice.reducer
