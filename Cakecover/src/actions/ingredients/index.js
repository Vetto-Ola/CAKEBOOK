export function showIngredients(ingredientList){
    return {
        type: 'SHOW_INGREDIENTS',
        payload: {
            ingredientList,
        }
    }
}

export function showSearchResult(searchResult){
    return {
        type: 'SEARCH_INGREDIENT',
        payload: {
            searchResult,
        }
    }
}

export function openCreate(){
    return {
        type: 'SHOW_CREATE_WINDOW',
        payload: {
            createPopUpVisible: true,
        }
    }
}

export function closeCreate(){
    return {
        type: 'SHOW_CREATE_WINDOW',
        payload: {
            createPopUpVisible: false,
        }
    }
}

export function openUpdate(){
    return {
        type: 'SHOW_UPDATE_WINDOW',
        payload: {
            updatePopUpVisible: true,
        }
    }
}

export function closeUpdate(){
    return {
        type: 'SHOW_UPDATE_WINDOW',
        payload: {
            updatePopUpVisible: false,
        }
    }
}