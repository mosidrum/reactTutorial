import PropTypes from 'prop-types';

const DefaultProps = {
  todos: PropTypes.array,
  task: PropTypes.string,
  id: PropTypes.number,
  todoprops: PropTypes.array,
  handleChange: PropTypes.func,
  deleteTodo: PropTypes.func,
  setUpdate: PropTypes.func,
  itemprops: PropTypes.string,
  addTodoItem: PropTypes.func,
};

export default DefaultProps;
