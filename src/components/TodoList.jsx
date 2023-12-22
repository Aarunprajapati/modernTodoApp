import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/Todo/TodoSlice';

function TodoList() {
  const [editedTodo, setEditedTodo] = useState({ id: null, text: '' });
  const todos = useSelector(state => state.todos);
  // console.log(todos)
// Corrected access to the todos slice
  const dispatch = useDispatch();

  const handleEdit = (id, text) => {
    setEditedTodo({ id, text });
  };

  const handleSave = () => {
    if (editedTodo.text.trim() !== '') {
      dispatch(updateTodo({
        id: editedTodo.id,
        text: editedTodo.text.trim()
      }));
      setEditedTodo({ id: null, text: '' });
    }
  };

  return (
    <>
      <div className='my-3 text-2xl font-semibold'>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <input
              type="text"
              className={`border outline-none w-full text-white bg-transparent rounded-lg ${
                editedTodo.id === todo.id ? "border-black/10 px-2" : "border-transparent"
              }`}
              value={editedTodo.id === todo.id ? editedTodo.text : todo.text}
              onChange={(e) => setEditedTodo({
                ...editedTodo,
                text: e.target.value
              })}
              readOnly={editedTodo.id !== todo.id}
            />
            {/* Edit, Save Button */}
            {editedTodo.id === todo.id ? (
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border mx-3  border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={handleSave}
              >
                📁
              </button>
            ) : (
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border mx-3 border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                ✏️
              </button>
            )}
            {/* Delete Todo Button */}
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
