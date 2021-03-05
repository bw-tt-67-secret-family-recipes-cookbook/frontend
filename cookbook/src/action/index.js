
import axiosWithAuth from "./../helpers/axiosWithAuth"


export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const FETCHING_RECIPE_SUCCESS = "FETCHING_RECIPE_SUCCESS";
export const FETCHING_RECIPE_START= "FETCHING_RECIPE_START";
export const HANDLE_ERROR = "HANDLE_ERROR";
export const ADDING_RECIPE_START = "ADDING_RECIPE_START";
export const ADDING_RECIPE_SUCCESS = "ADDING_RECIPE_SUCCESS";

export const getRecipes = (id) => dispatch => {
    dispatch({type: FETCHING_RECIPE_START});
    
    axiosWithAuth()
        .get(`/api/users/${id}/recipes`)
        .then( res => {
            console.log(res)
            dispatch({type:FETCHING_RECIPE_SUCCESS, payload:res.data})
        })
        .catch( err => {
            console.log(err)
            dispatch({type:HANDLE_ERROR, payload: err.reponse});
        })
}

export const addRecipe = (newRecipe) => dispatch => {
    dispatch({type:ADDING_RECIPE_START});
    axiosWithAuth()
        .post(`/api/users/:id/recipes`, newRecipe)
        .then( res => {
            console.log(res)
            dispatch({type:ADDING_RECIPE_SUCCESS, payload:res.data})
        })
        .catch( err => {
            console.log(err)
            dispatch({type:HANDLE_ERROR, payload: err.reponse});
        })
}

export const editRecipe = (newRecipe) => dispatch => {
    dispatch({type:EDIT_RECIPE_START});
    axiosWithAuth()
    .put(`/api/users/${newRecipe.id}`, newRecipe)
    .then( res => {
        console.log(res)
        dispatch({type:EDIT_RECIPE_SUCCESS, payload:res.data});
    })
    .catch( err => {
        console.log(err)
        dispatch({type:HANDLE_ERROR, payload:err.reponse});
    })
}

