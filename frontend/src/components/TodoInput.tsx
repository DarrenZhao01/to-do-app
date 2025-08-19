interface TodoInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

export const TodoInput = ({ value, onChange, onAdd }: TodoInputProps) => {
  return (
    <div className="flex gap-2 mb-4">
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter a todo item" 
        className="flex-1 px-4 py-2 border rounded"
        onKeyDown={(e) => e.key === 'Enter' && onAdd()}
      />
      <button 
        onClick={onAdd}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Todo
      </button>
    </div>
  );
};