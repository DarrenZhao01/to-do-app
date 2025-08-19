import { renderHook, act } from '@testing-library/react';
import { useTodos } from './useTodos';

describe('useTodos', () => {
  it('should add a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setInputMessage('Test todo');
      result.current.addTodo();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0]).toBe('Test todo');
    expect(result.current.inputMessage).toBe('');
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setInputMessage('Test todo');
      result.current.addTodo();
    });

    expect(result.current.todos).toHaveLength(1);

    act(() => {
      result.current.deleteTodo(0);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should not add empty todo', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setInputMessage('');
      result.current.addTodo();
    });

    expect(result.current.todos).toHaveLength(0);
    expect(mockAlert).toHaveBeenCalledWith('Please enter a message');
    mockAlert.mockRestore();
  });
});