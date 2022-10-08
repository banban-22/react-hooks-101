import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>Event Creating Form</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input type="text" className="form-control" id="formEventTitle" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Content</label>
          <textarea type="text" className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary">Create Event</button>
        <button className="btn btn-danger">Delete All Events</button>
      </form>

      <h4>See Events</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
