import React from 'react';
import ReactDOM from 'react-dom';
import Cakes from '../pages/containers/cakes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
// import data from '../../src/api.json';

const initialState = {
    searchResults: [],
    ingredientList: [],
    createPopUpVisible: false,
    updatePopUpVisible: false,
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <Cakes/>
    </Provider>
, document.getElementById('cakes'));

// console.log(store.getState())