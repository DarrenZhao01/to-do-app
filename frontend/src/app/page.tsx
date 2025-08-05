'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState<string[]>([]); // New state for todo list

  const fetchMessage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:8000/api/message');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error fetching message');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/receive_a_msg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });
      const data = await response.json();
      setMessage(data.message);
      setInputMessage('');
    } catch (error) {
      setMessage('Error sending message');
    }
  };

  // New function to add todo
  const addTodo = () => {
    if (inputMessage.trim() !== '') {
      setTodos([...todos, inputMessage]); // Add new todo to the list
      setInputMessage(''); // Clear input after adding
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="w-full max-w-md">
        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Enter a todo item" 
            className="flex-1 px-4 py-2 border rounded"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()} // Add todo when Enter is pressed
          />
          <button 
            onClick={addTodo}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Todo
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li 
              key={index}
              className="flex items-center justify-between p-3 bg-white text-black border rounded shadow-sm"
            >
              <span>{todo}</span>
              <button 
                onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-gray-500 text-center mt-4">
            No todos yet. Add some above!
          </p>
        )}
      </div>
    </div>
  );
}