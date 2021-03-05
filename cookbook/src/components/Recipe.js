import React, { useEffect, useState } from 'react';

import RecipeForm from "./RecipeForm";
import { useParams, useHistory } from "react-router-dom";
import EditMenu from "./EditMenu";
import { getRecipes, editRecipe } from "../action/index";
import { connect, useDispatch, useSelector } from 'react-redux';
import Search from "../components/search";
import axiosWithAuth from "./../helpers/axiosWithAuth";
import styled from "styled-components";





// const Recipe = () => {
//   const params = useParams()
//   const history = useHistory()
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getRecipes(params.id))
//   }, [])
//   return (
//     <div>Recipes</div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     userRecipe: state.userRecipe
//   }
// }

// export default connect(mapStateToProps, { getRecipes, editRecipe })(Recipe)




const Recipe = ({getRecipes, editRecipe, userRecipe}) => { 

    const params = useParams();

  const initialValue = {
    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:'',
    user_id: params.id,
  }

      useEffect(() => {
        getRecipes(params.id)
    }, [])
    
    const history = useHistory();

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




      //   const getRecipes = () => {
      //     axiosWithAuth()
      //       .get('/api/users/:id/recipes')
      //      .then((res) => {
      //         console.log(res)
      //        setRecipes(res)
      //      })
      //       .catch((err) => {
      //        console.log(err)
      //       })
      //  }
      
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

      const deleteRecipe = () => {
        axiosWithAuth()
          .delete(`/api/users/${params.id}/recipes/${recipes.id}`)
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

        <Search className="searchbar" userRecipe={userRecipe}/>
        <RecipeForm/>
        <ul>

        {
            userRecipe.map(recipe => {
                <li className="recipe" onClick={() => editRecipe(recipe)}>{recipe.title}</li>
            
            })
        }

        </ul>
            {/* {  editing && <EditMenu recipeToEdit={recipeToEdit} setEditing={setEditing} setRecipeToEdit={setRecipeToEdit}/>
            }     */}
              
        </div>)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userRecipe: state.userRecipe, isFetching: state.isFetching, error: state.error
    }
}

export default connect(mapStateToProps, {getRecipes, editRecipe})(Recipe);