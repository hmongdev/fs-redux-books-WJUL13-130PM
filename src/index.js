import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

//reducer
const bookList = (state = [], action) => {
    //4. - set book list with data from server
    switch (action.type) {
        case 'SET_BOOK_LIST':
            //action.payload of this reducer will be response.data from app.jsx
            //this will replace the value of bookList
            //payload is array of all books
            //don't need spread because we don't need old values
            return action.payload;
        default:
            return state;
    }
};

//store
const reduxStore = createStore(
    combineReducers({
        bookList,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
