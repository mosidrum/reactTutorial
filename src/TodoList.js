import TodoItem from "./TodoItem";

const TodoList = ({ todoprops, handleChange, deleteTodo, setUpdate }) => {
  return (
    <ul>
      {todoprops.map((todo) => (
        <TodoItem key={todo.id} itemprops={todo} handleChange={handleChange} deleteTodo={deleteTodo} setUpdate={setUpdate} />
      ))}
    </ul>
  );
}


export default TodoList;
