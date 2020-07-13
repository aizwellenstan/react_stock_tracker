import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
