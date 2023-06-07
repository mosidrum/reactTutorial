import DefaultProps from '../PropTypes';
import TodoItem from './TodoItem';

const TodoList = ({
  todoprops, handleChange, deleteTodo, setUpdate,
}) => (
  <ul>
    {todoprops.map((todo) => (
      <TodoItem
        key={todo.id}
        itemprops={todo}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodoList.propTypes = DefaultProps;

export default TodoList;
