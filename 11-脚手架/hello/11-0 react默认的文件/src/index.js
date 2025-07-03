import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// React.StrictMode：检查这个组件以及子组件，是否符合react规范
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//React.StrictMode：检查这个组件以及子组件，是否符合react规范
reportWebVitals();
