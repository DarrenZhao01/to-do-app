'use client';

import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

export default function Home() {
  const { todos, inputMessage, setInputMessage, addTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="w-full max-w-md">
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