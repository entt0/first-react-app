import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'My first post: "Hallo, World"', likes: 2},
    {id: 2, message: 'I want to be a programmer', likes: 5},
    {id: 2, message: 'YO', likes: 4},
]

let dialogues = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Kris'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Tor'},
    {id: 5, name: 'Klim'},
    {id: 6, name: 'Dron'}
]

let messages = [
    {id: 1, message: 'Hi,bro'},
    {id: 2, message: 'How is your exam?'},
    {id: 3, message: 'Kein Kommentar'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={posts} messagesData={messages} dialoguesData={dialogues}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
