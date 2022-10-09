import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const { id, title, content } = event;
  const handleClickDeleteButton = () => {
    const DELETE_EVENT = 'DELETE_EVENT';
    dispatch({ type: DELETE_EVENT, id });
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleClickDeleteButton}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Event;
