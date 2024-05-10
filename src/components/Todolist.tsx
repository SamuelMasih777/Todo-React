import React, { useState, useEffect } from "react";
import Button from "./Button";
import TodoRow from "./TodoRow";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Todo {
  id: number;
  label: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = { id: Date.now(), label: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
      toast.success('Todo added successfully');
    }
  };

  const toggleTodo = (id: number) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    if (!todoToToggle) return;  
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);  
    if (!todoToToggle.completed) {
      toast.info('Todo marked as completed');
    } else {
      toast.warning('Todo marked as incomplete');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error('Todo deleted successfully');
  };

  return (    
    <div className="max-w-md mx-auto mt-8 mb-4 shadow-xl rounded-lg">      
      <div className="scrollbar-container">
        <div className="bg-white px-5 py-2 border-b-2 border-gray-300 min-h-[296px] max-h-[496px] overflow-y-auto">
          <h1 className="font-bold text-xl mb-2">Todo</h1>
          {todos.length === 0 ? (
            <p className="text-center text-lg">No todos to display<br></br>Kindly add some</p>
          ) : (
            todos.map((todo) => (
              <TodoRow
                key={todo.id}
                label={todo.label}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex m-2 p-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="bg-gray-200 flex-1 mr-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          placeholder="Add new task . . ."
        />
        <Button variant="big" onClick={addTodo}>
          Add
        </Button>
      </div>      
    </div>
  );
};

export default TodoList;
