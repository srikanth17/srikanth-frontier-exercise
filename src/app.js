import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const jsx = (
    <App/>
);

ReactDOM.render(jsx, document.getElementById('app'));