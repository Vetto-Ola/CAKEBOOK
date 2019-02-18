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
        default:
            return state
    }
}

export default data;