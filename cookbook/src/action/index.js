export const NEW_RECIPE = "NEW_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";


export const newRecipe = () => {
    return({type:NEW_RECIPE});
}

export const editRecipe = () => {
    return({type:EDIT_RECIPE});
}

