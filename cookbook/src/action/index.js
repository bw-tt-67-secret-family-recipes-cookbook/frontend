
import axiosWithAuth from "./../helpers/axiosWithAuth"


export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const FETCHING_RECIPE_SUCCESS = "FETCHING_RECIPE_SUCCESS";
export const FETCHING_RECIPE_START= "FETCHING_RECIPE_START";
export const HANDLE_ERROR = "HANDLE_ERROR";
export const ADDING_RECIPE_START = "ADDING_RECIPE_START";
export const ADDING_RECIPE_SUCCESS = "ADDING_RECIPE_SUCCESS";
export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";


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

export const addRecipe = (id, newRecipe) => dispatch => {
    dispatch({type:ADDING_RECIPE_START});
    axiosWithAuth()
        .post(`/api/users/${id}/recipes`, newRecipe)
        .then( res => {
            console.log(res)
            dispatch({type:ADDING_RECIPE_SUCCESS, payload:res.data})
        })
        .catch( err => {
            console.error(err.response);
            dispatch({type:HANDLE_ERROR, payload: err.reponse});
        })
}

export const editRecipe = (newRecipe) => dispatch => {
    dispatch({type:EDIT_RECIPE_START});
    axiosWithAuth()
    .put(`/api/users/${newRecipe.user_id}/recipes/${newRecipe.recipe_id}`, newRecipe)
    .then( res => {
        console.log(res)
        dispatch({type:EDIT_RECIPE_SUCCESS, payload:res.data});
    })
    .catch( err => {
        console.log(err)
        dispatch({type:HANDLE_ERROR, payload:err.reponse});
    })
}

export const deleteRecipe = (id, recipe) => dispatch => {
    dispatch({type:DELETE_RECIPE_START});
    axiosWithAuth()
    .delete(`/api/users/${id}/recipes/${recipe.recipe_id}`)
    .then( res => {
        console.log(res)
        dispatch({type:DELETE_RECIPE_SUCCESS, payload: recipe})
        window.location.reload();
    })
    .catch( err => {
        console.log(err.response)
        dispatch({type:HANDLE_ERROR, payload: err.response})
    })

}
