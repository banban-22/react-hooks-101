import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import Event from './Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
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
    <div className="container-fluid">
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
          disabled={state.length === 0}
        >
          Delete All Events
        </button>
      </form>

      <h4>Show Events</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event) => (
            <Event event={event} dispatch={dispatch} key={event.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
