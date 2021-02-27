# frontend

==========================================================================================================
ENDPOINTS
==========================================================================================================
POST | https://tt67recipes.herokuapp.com/api/users/register | register user {username: '', password: ''}
----------------------------------------------------------------------------------------------------------
POST | https://tt67recipes.herokuapp.com/api/users/login    | login user {username: '', password: ''}
----------------------------------------------------------------------------------------------------------
GET  | https://tt67recipes.herokuapp.com/api/users/:id/recipes | fetch recipes
----------------------------------------------------------------------------------------------------------
POST | https://tt67recipes.herokuapp.com/api/users/:id/recipes | post recipe {title: '', source: '', 
     |                                                          |   ingredients: '', instructions: '', 
     |                                                          |   category: '', user_id: ''}
----------------------------------------------------------------------------------------------------------
PUT  | https://tt67recipes.herokuapp.com/api/users/:id/recipes/:recipe_id | update recipe {title: '', 
     |                                                                    | source: '', ingredients: '', 
     |                                                                    |instructions: '', category: ''}
----------------------------------------------------------------------------------------------------------
DELETE | https://tt67recipes.herokuapp.com/api/users/:id/recipes/:recipe_id | delete recipe
