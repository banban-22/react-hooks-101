import React, { useState, useContext } from 'react';

import AppContext from '../contexts/AppContext';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [content, setcontent] = useState('');

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: 'CREATE_EVENT',
      title,
      content,
    });

    setTitle('');
    setcontent('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('Are you sure to delete all?');
    if (result) {
      dispatch({ type: 'DELETE_ALL_EVENTS' });
    }
  };

  const uncreatable = title === '' || content === '';
  return (
    <>
      <h4>Event Creating Form</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Content</label>
          <textarea
            type="text"
            className="form-control"
            id="formEventBody"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={uncreatable}
        >
          Create Event
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          Delete All Events
        </button>
      </form>
    </>
  );
};

export default EventForm;
