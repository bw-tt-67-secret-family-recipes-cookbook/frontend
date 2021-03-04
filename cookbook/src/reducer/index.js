import {EDIT_RECIPE_START,EDIT_RECIPE_SUCCESS,FETCHING_RECIPE_SUCCESS,FETCHING_RECIPE_START,ADDING_RECIPE_START, ADDING_RECIPE_SUCCESS, HANDLE_ERROR} from './../action';

const initialState = {
    recipe: {
        title:"",
        source:"",
        ingredients:"",
        instructions:"",
        category:""
    },
    userRecipe: [],
    isFetching: false,
    error:''
}

const recipeReducer = (state = initialState, action) => {
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
    }
}

export default recipeReducer;