import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import Events from './Events';
import OperationLogs from './OperationLogs';
import EventForm from './EventForm';

const App = () => {
  const appState = localStorage.getItem('appWithRedux');
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const string = JSON.stringify(state);
    localStorage.setItem('appWithRedux', string);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
