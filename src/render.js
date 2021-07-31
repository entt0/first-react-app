import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {addAnswer} from './redux/state';


export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} addAnswer={addAnswer}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

reportWebVitals();
