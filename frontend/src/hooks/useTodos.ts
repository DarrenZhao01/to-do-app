import { useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const addTodo = () => {
    if (inputMessage.trim() !== '') {
      setTodos([...todos, inputMessage]);
      setInputMessage('');
    } else {
      alert('Please enter a message');
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return {
    todos,
    inputMessage,
    setInputMessage,
    addTodo,
    deleteTodo,
  };
};