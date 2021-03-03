import React, { useEffect, useState } from 'react'
import axiosWithAuth from "./../helpers/axiosWithAuth"
import { useParams } from "react-router-dom";






function Recipe() {

    const initialValue = {
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:'',
        user_id: id,
    } 


    const { id } = useParams();

    const [ recipes, setRecipes ] = useState(initialValue)



    const getRecipes = () => {
        axiosWithAuth()
          .get('/api/users/:id/recipes')
          .then((res) => {
            console.log(res)
            setRecipes(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      
      const postRecipes = newRecipe => {
        axiosWithAuth()
          .post(`/api/users/${id}/recipes`, newRecipe)
          .then((res) => {
            console.log(res)
            setRecipes(res)
          })
          .catch((err) => {
            console.log(err)
          })
          postRecipes(recipes)
      }

      useEffect(() => {
        getRecipes()
      }, [])





    return(
        <div>
        <h1>Recipes</h1>
        {
            recipes.map(recipe => {
                return (
                <div className="recipe">{recipe}</div>
                )
            })
        }
    
    
        </div>)
}

export default Recipe