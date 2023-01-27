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

//reducer to hold favorites table from DB
const favorites = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
        default: 
            return state;
    }
}

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

//get request to update favorites page
function* getFavorites() {
    const response = yield axios ({
        method: 'GET',
        url: `/api/favorite`
    })
    yield put({
        type: 'SET_FAVORITE',
        payload: response.data
    })
}

//post request
//we need to access action.payload so we have to the function 'action' as a parameter
function* addToFavorites(action) {
    //declare action.payload as a const so we we know what we're sending to the server
    const newFavorite = action.payload;
    //console.log newFavorite to to see if we're recieving the right thing from ListItem.jsx
    console.log(newFavorite)
    const response = yield axios({
        method: 'POST',
        url: `/api/favorite`,
        data: {newFavorite}
    })
    //call saga get function usng something like :
    yield put({
        //update the favorites page
        type: 'SAGA/GET_FAVORITES'
    })
}
function* deleteFavorite(action){
    const idToDelete = action.payload;
    console.log(idToDelete)
    const response = yield axios({
        method: 'DELETE',
        url:`/api/favorite/${idToDelete}`,
    })
    yield put({
        type: 'SAGA/GET_FAVORITES'
    })
}

//root generator
function* rootSaga() {
    yield takeEvery ('SAGA/GET_FAVORITES', getFavorites);
    yield takeEvery('SAGA/ADD_FAVORITES', addToFavorites);
    yield takeEvery('SAGA/GET_GIF', searchResult);
    yield takeEvery('SAGA/DELETE_FAVORITE', deleteFavorite)
}


//declare sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//create store
const store = createStore(
    combineReducers({ 
        gifsArray,
        favorites
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
