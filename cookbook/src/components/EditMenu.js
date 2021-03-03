import React, {useState}from "react";
import axiosWithAuth from "./../helpers/axiosWithAuth";
import {useParams} from "react-router-dom";

const initialValue = {
    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:'',
} 


const EditMenu = () => {

    const [editing, setEditing] = useState(false)
    const [recipeToEdit, setRecipeToEdit] = useState(initialValue)
    const { id } = useParams();


    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/users/${id}/recipes`, recipeToEdit)
        .then( res => {
            setEditing(false)

        })
        .catch( err => {
            console.log(err)
        })
    }




    return (<form onSubmit={saveEdit}>
        <h2>Edit Recipe</h2>
        <label>Recipe Title:</label>
        <input 
            name="recipeTitle"
            onChange={ (e) => 
                setRecipeToEdit({...recipeToEdit, title: e.target.value})
            }
            value={recipeToEdit.title}
            />
        <label>Recipe Source:</label>
        <input
            name="recipeSource"
            onChange={ (e) =>
                setRecipeToEdit({...recipeToEdit, source: e.target.value})
            }
            value={recipeToEdit.source}
            />
    </form>)
}

export default EditMenu;