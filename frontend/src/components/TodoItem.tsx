interface TodoItemProps {
  todo: string;
  onDelete: () => void;
}

export const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between p-3 bg-white text-black border rounded shadow-sm">
      <span>{todo}</span>
      <button 
        onClick={onDelete}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};