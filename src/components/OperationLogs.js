import React, { useContext } from 'react';
import OperationLog from './OperationLog';
import AppContext from '../contexts/AppContext';

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4>Show Operation Logs</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Contents</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => {
            return <OperationLog key={index} operationLog={operationLog} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
