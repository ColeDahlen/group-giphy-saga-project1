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
    if (action.type === 'SET_GIF_ARRAY'){
        return action.payload
    }
    return state;
}

function* searchResult(action) {
    try {
    const userInput = action.payload
    const response = yield axios({
        method: 'GET',
        url: `/api/search/${userInput}`
    })
    console.log(response.data.data)
    yield put({
        type: 'SET_GIF_ARRAY',
        payload: response.data.data
    })
    } catch (error) {
        console.log('GET search fail', error)
    }
}

//root generator
function* rootSaga() {
    yield takeEvery('SAGA/GET_GIF', searchResult)
}

//declare sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//create store
const store = createStore(
    combineReducers({ 
        gifsArray
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
