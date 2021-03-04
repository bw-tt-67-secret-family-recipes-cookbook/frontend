import React, { useEffect, useState } from 'react'


import { useParams, useHistory } from "react-router-dom";
import EditMenu from "./EditMenu";
import {getRecipes, editRecipe} from "./../action/index"
import { connect, useDispatch, useSelector } from 'react-redux';

import axiosWithAuth from "./../helpers/axiosWithAuth"







function Recipe({getRecipes, editRecipe, userRecipe}) {
    const userRecipes = useSelector(state => state.userRecipe)
    console.log(userRecipe)

  const initialValue = {
    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:'',
    user_id: id,
  } 
    
    const history = useHistory();
    const { id } = useParams();

    const [ recipes, setRecipes ] = useState(initialValue)



    const [editing, setEditing] = useState(false)
    const [recipeToEdit, setRecipeToEdit] = useState(initialValue)
    



    // const editRecipe = recipe => {
    //     setEditing(true);
    //     setRecipeToEdit(recipe);
    // }

    // const saveEdit = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .put(`/api/users/${recipeToEdit.id}/recipes`, recipeToEdit)
    //     .then( res => {
    //         setEditing(false)
    //         history.push(`/`)
    //     })
    //     .catch( err => {
    //         console.log(err)
    //     })
    // }
  const dispatch = useDispatch();




    // const getRecipes = () => {
    //     axiosWithAuth()
    //       .get('/api/users/:id/recipes')
    //       .then((res) => {
    //         console.log(res)
    //         setRecipes(res)
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    // }
      
    // const postRecipes = newRecipe => {
    //     axiosWithAuth()
    //       .post(`/api/users/${id}/recipes`, newRecipe)
    //       .then((res) => {
    //         console.log(res)
    //         setRecipes(res)
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //       postRecipes(recipes)
    // }


    useEffect(() => {
        dispatch(getRecipes(id))
    }, [])

      const deleteRecipe = () => {
        axiosWithAuth()
          .delete(`/api/users/${id}/recipes/${recipes.id}`)
          .then((res) => {
            console.log(res)
            setRecipes(res.data)
          })
          .catch((err) => {
            console.log(err)
          })





      }



    return(
        <div>
        <h1>Recipes</h1>

        <ul>

        {
            userRecipe.map(recipe => {
                <li className="recipe" onClick={() => editRecipe(recipe)}>{recipe.title}</li>
            
            })
        }

        </ul>
            { editing && <EditMenu recipeToEdit={recipeToEdit} setEditing={setEditing} setRecipeToEdit={setRecipeToEdit}/>
            }    

        </div>)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userRecipe: state.userRecipe, isFetching: state.isFetching, error: state.error
    }
}

export default connect(mapStateToProps, {getRecipes, editRecipe})(Recipe);