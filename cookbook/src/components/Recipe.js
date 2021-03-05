import React, { useEffect, useState } from 'react';

import RecipeForm from "./RecipeForm";
import { Link, useParams, useHistory } from "react-router-dom";
import EditMenu from "./EditMenu";
import { getRecipes, editRecipe, deleteRecipe } from "../action/index";
import { connect, useDispatch } from 'react-redux';
import Search from "../components/search";
import axiosWithAuth from "./../helpers/axiosWithAuth";
import styled from "styled-components";

const RecipeDisplay = styled.div`
  


  
`
const RecipeList = styled.ul`
  display:flex;

`

const RecipeWrapper = styled.div`
  
  
  margin: 20px;

`

const RecipeButton= styled.div`
  
  margin: 20px;
  display: flex;
  
`

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
  const history = useHistory();
  const dispatch = useDispatch();


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
    
    
    


    // const [ recipes, setRecipes ] = useState(initialValue)



    // const [editing, setEditing] = useState(false)
    // const [recipeToEdit, setRecipeToEdit] = useState(initialValue)
    



    // const changeRecipe = recipe => {
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

      // const deleteRecipe = () => {
      //   axiosWithAuth()
      //     .delete(`/api/users/${params.id}/recipes/${recipes.id}`)
      //     .then((res) => {
      //       console.log(res)
      //       setRecipes(res.data)
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })

      // }



    return(
        <div>
         
        <h1>Recipes</h1>

        {/* <Search userRecipe={userRecipe}/> */}
        <Link to={`/add-recipe/${params.id}`}>Recipe Form</Link>
        <RecipeList>

        {
            userRecipe.map(recipe => {
                return (
                  <RecipeDisplay>
                  <RecipeWrapper>
                    <h2>{recipe.title}</h2>
                    <h4>Source: {recipe.source}</h4>
                    <div><b>Ingredients: </b>{recipe.ingredients}</div>
                    <div><b>Instructions:</b> {recipe.instructions}</div>
                    <div><b>Category: </b>{recipe.category}</div>
                    <RecipeButton onClick={(event) => {
                      event.preventDefault()
                      history.push(`/edit-recipe/${params.id}/${recipe.recipe_id}`)
                    }}>
                    Edit
                    </RecipeButton>
                    <RecipeButton onClick={() => {
                      dispatch(deleteRecipe(params.id, recipe))
                    }}>
                    Delete
                    </RecipeButton>
                  </RecipeWrapper>
                  </RecipeDisplay>
                )
                // <li className="recipe" onClick={() => editRecipe(recipe)}>{recipe.title}</li>
            
            })
        }

        </RecipeList>
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