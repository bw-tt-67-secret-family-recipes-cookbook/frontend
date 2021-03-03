import React, { useEffect, useState } from 'react'
import axiosWithAuth from "./../helpers/axiosWithAuth"
import { useParams } from "react-router-dom";
import Search from "./search"





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

    console.log(recipes)

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
        <button onClick={deleteRecipe}></button>
        {
            recipes.map(recipe => {
                return (
                <div className="recipe">{recipe}</div>
                )
            })
        }
        <Search recipes={recipes} />
    
        </div>)
}

export default Recipe