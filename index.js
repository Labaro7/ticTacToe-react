import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Table from './Table'
import Title from './Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Table />
  </React.StrictMode>
);