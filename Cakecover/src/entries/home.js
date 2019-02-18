import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
// import data from '../../src/api.json';

const initialState = {
    searchResults: [],
    ingredientList: [],
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>
, document.getElementById('home'));

// console.log(store.getState())