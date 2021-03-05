import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe } from "./../action/index";


const initialState = {
    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:'',
 }

const RecipeForm = () => {
    const [recipe, setRecipe] = useState(initialState);

    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addRecipe(recipe))
        history.push(`/${params.id}/recipe`)
        console.log("here")
    } 

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div className="recipeForm">
            <h1>Add The Secret Recipe</h1>
            <form onSubmit={onSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={recipe.title} onChange={handleChange}/>
                <label>Source:</label>
                <input type="text" name="source" value={recipe.source} onChange={handleChange}/>
                <label>Ingredients:</label>
                <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange}/>
                <label>Instructions:</label>
                <input type="text" name="instructions" value={recipe.instructions} onChange={handleChange}/>
                <label>Category:</label>
                <input type="text" name="category" value={recipe.category} onChange={handleChange}/>
                <button type="submit">Add Recipe</button>
            </form>

        </div>
    )

}
export default RecipeForm;