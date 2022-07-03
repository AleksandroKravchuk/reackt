import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// const element = React.createElement('div', { a: 5, b: 10, children: 'Hello' });
// console.log(element)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// const jsxElement = <div>Hello</div>;
// console.log(jsxElement)
// ReactDOM.render(element, document.querySelector('#root'));
// ReactDOM.render(element, document.querySelector('#root'))