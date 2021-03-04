import React from "react";




const EditMenu = ({recipeToEdit, saveEdit, setRecipeToEdit, setEditing}) => {
    
 




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
         <label>Recipe Ingredients:</label>
        <input
            name="recipeIngredients"
            onChange={ (e) =>
                setRecipeToEdit({...recipeToEdit, ingredients: e.target.value})
            }
            value={recipeToEdit.ingredients}
            />
        <label>Recipe Instructions:</label>
        <input
            name="recipeInstructions"
            onChange={ (e) =>
                setRecipeToEdit({...recipeToEdit, instructions: e.target.value})
            }
            value={recipeToEdit.instructions}
            />
        <label>Recipe Category:</label>
        <input
            name="recipeCategory"
            onChange={ (e) =>
                setRecipeToEdit({...recipeToEdit, category: e.target.value})
            }
            value={recipeToEdit.category}
            />
        <button type="submit">save</button>
        <button onClick={() => setEditing(false)}>cancel</button>
    </form>);
}

export default EditMenu;