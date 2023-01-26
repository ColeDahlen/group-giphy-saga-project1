import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
//saga imports
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'

const gifsArray = (state = [], action) => {
    return state;
}

//root generator
function* rootSaga() {

}

//declare sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//create store
const store = createStore(
    combineReducers({ 

     }),
    applyMiddleware(logger, sagaMiddleware)
  );

//run saga middleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById('root'));
