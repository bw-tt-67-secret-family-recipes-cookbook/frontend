import React, { useEffect, useState } from 'react'
import axiosWithAuth from "./../helpers/axiosWithAuth"
import { useParams } from "react-router-dom";
import EditMenu from "./EditMenu";





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
        <ul>
        {
            recipes.map(recipe => {
                <li className="recipe">{recipe}</li>
            
            })
        }
        </ul>
         <EditMenu/>
    
        </div>)
}

export default Recipe