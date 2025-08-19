'use client';

import { useEffect, useState } from 'react';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';
import { api } from '../services/api';

export default function Home() {
  const { todos, inputMessage, setInputMessage, addTodo, deleteTodo } = useTodos();
  const [backendMessage, setBackendMessage] = useState<string>('');
  const [backendError, setBackendError] = useState<string>('');

  useEffect(() => {
    api
      .getMessage()
      .then((res) => setBackendMessage(res.message))
      .catch(() => setBackendError('Failed to reach backend API'));
  }, []);

  const sendToBackend = async () => {
    try {
      const res = await api.sendMessage(inputMessage || 'Hello from frontend');
      setBackendMessage(res.message);
      setBackendError('');
    } catch (err) {
      setBackendError('Failed to send message to backend');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="w-full max-w-md">
        <div className="p-3 mb-4 bg-white text-black border rounded">
          <p className="mb-2">
            <span className="font-semibold">Backend message:</span>{' '}
            {backendMessage || '—'}
          </p>
          {backendError && (
            <p className="text-red-500 text-sm mb-2">{backendError}</p>
          )}
          <button
            onClick={sendToBackend}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send to Backend
          </button>
        </div>
        <TodoInput
          value={inputMessage}
          onChange={setInputMessage}
          onAdd={addTodo}
        />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}