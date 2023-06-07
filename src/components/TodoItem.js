import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.scss';
import DefaultProps from '../PropTypes';

const TodoItem = ({
  itemprops, handleChange, deleteTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemprops.title);
  const editMode = {};
  const viewMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const updateDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemprops.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemprops.completed}
          onChange={() => handleChange(itemprops.id)}
        />
        <span style={itemprops.completed ? completedStyle : null}>{updateInput}</span>
        <button type="button" onClick={handleEdit} aria-label="edit"><AiFillEdit size={20} /></button>
        <button type="button" onClick={() => deleteTodo(itemprops.id)} aria-label="delete"><FaTrash size={20} /></button>
      </div>
      <input
        style={editMode}
        type="text"
        value={updateInput}
        className={styles.textInput}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={updateDone}
      />
    </li>
  );
};

TodoItem.propTypes = DefaultProps;

export default TodoItem;
