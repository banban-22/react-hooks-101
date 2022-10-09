import React from 'react';
import Event from './Event';

const Events = ({ state, dispatch }) => {
  return (
    <>
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
    </>
  );
};

export default Events;
