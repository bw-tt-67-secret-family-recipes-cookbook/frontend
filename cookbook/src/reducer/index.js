import {NEW_RECIPE, EDIT_RECIPE} from './../action';

const initialState = {
    recipe: {},
    userRecipe: [],
    isFetching: false,
    error:''
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type){
        case(NEW_RECIPE):
            return({
                ...state,
                userRecipe:state.recipe,
                isFetching:false
            })
        case(EDIT_RECIPE):
            return({
                ...state,
                recipe:action.payload,
                isFetching:false,
            })
    }
}

export default recipeReducer;