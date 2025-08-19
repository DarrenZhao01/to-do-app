import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

export const TodoList = ({ todos, onDelete }: TodoListProps) => {
  return (
    <>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index}
            todo={todo}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-500 text-center mt-4">
          No todos yet. Add some above!
        </p>
      )}
    </>
  );
};