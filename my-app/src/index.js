import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// const elem = <div className="ret">hello</div>
const newElement = () => {
  return <ul>
    <li>Текст 1</li>
    <li>Текст 1</li>
    <li>Текст 1</li>
  </ul>
};


ReactDOM.render(
  newElement(),
  document.getElementById('root')
);

