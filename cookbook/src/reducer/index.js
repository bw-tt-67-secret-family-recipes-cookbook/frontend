import {EDIT_RECIPE_START,EDIT_RECIPE_SUCCESS,FETCHING_RECIPE_SUCCESS,FETCHING_RECIPE_START,ADDING_RECIPE_START, ADDING_RECIPE_SUCCESS, HANDLE_ERROR} from './../action';

const initialState = {
    recipe: {},
    userRecipe: [],
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCHING_RECIPE_START):
            return({
                ...state,
                isFetching:false
            })
        case(FETCHING_RECIPE_SUCCESS):
            return({
                ...state,
                userRecipe:action.payload,
                isFetching:false,
            })
        case(EDIT_RECIPE_START):
            return({
                ...state,
            })
        case(EDIT_RECIPE_SUCCESS):
            return({
                ...state,
                recipe:action.payload
            })
        case(ADDING_RECIPE_START):
            return({
                ...state,
            })
        case(ADDING_RECIPE_SUCCESS):
            return({
                ...state,
                recipe:action.payload,
                userRecipe:[...state.userRecipe]
            })
        case(HANDLE_ERROR):
            return({
                ...state,
                error: action.payload
            })
        default: 
            return state
    }
}