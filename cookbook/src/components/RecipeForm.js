import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe, editRecipe } from "./../action/index";
import axios from "axios";


const initialState = {
    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:'',
    user_id:"",
 }

const RecipeForm = () => {
    const [recipe, setRecipe] = useState(initialState);
  
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault()
        if(history.location.pathname === `/edit-recipe/${params.id}/${recipe.recipe_id}`){
            dispatch(editRecipe({...recipe,id: params.id}))
            history.push(`/${params.id}/recipe`)
        } else if (history.location.pathname === `/add-recipe/${params.id}`){
            recipe.user_id = params.id
            dispatch(addRecipe(params.id, recipe))
            history.push(`/${params.id}/recipe`)
        }
        // dispatch(addRecipe(recipe))
        // history.push(`/${params.id}/recipe`)
        // console.log("here")
        console.log("here")
    } 

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]:e.target.value
        })
    }

    useEffect(() => {
        if(history.location.pathname === `/edit-recipe/${params.id}/${params.cipe}`){
           axios
            .get(`https://tt67recipes.herokuapp.com/api/users/${params.id}/recipes/${params.cipe}`)
            .then( res => {
                console.log(res.data)
                setRecipe(res.data)
            })
            .catch( err => {
                console.log(err.response)
            })
        }
    },[]) 

    return(
        <div className="recipeForm">
            {console.log(params)}
            <h1>Add The Secret Recipe</h1>
            <form onSubmit={onSubmit}>
                <label>Title:
                <input type="text" name="title" value={recipe.title} onChange={handleChange}/></label>
                <label>Source:
                <input type="text" name="source" value={recipe.source} onChange={handleChange}/></label>
                <label>Ingredients:
                <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange}/></label>
                <label>Instructions:
                <input type="text" name="instructions" value={recipe.instructions} onChange={handleChange}/></label>
                <label>Category:
                <input type="text" name="category" value={recipe.category} onChange={handleChange}/></label>
                <button>Add Recipe</button>
            </form>

        </div>
    )

}
export default RecipeForm;