import axios from 'axios';

function data(state, action){
    switch (action.type){
        case 'SEARCH_INGREDIENT':{
            // action.payload.query
            return {...state, searchResults: action.payload.searchResult}
        }
        case 'SHOW_INGREDIENTS':{
            // action.payload.query
            return {...state, ingredientList: action.payload.ingredientList}
        }
        case 'SHOW_CREATE_WINDOW':{
            // action.payload.query
            return {...state, createPopUpVisible: action.payload.createPopUpVisible}
        }
        case 'SHOW_UPDATE_WINDOW':{
            // action.payload.query
            return {...state, updatePopUpVisible: action.payload.updatePopUpVisible}
        }
        default:
            return state
    }
}

export default data;