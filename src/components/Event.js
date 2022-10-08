import React from 'react';

const Event = ({ event, dispatch }) => {
  const { id, title, content } = event;
  const handleClickDeleteButton = () => {
    dispatch({ type: 'DELETE_EVENT', id });
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
