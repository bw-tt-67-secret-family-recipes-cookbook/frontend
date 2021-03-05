import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe, editRecipe } from "./../action/index";
import axios from "axios";
import styled from "styled-components";
import Recipe from "./Recipe";

const RecipeMaker = styled.div`
    & > a {
    text-decoration: none;
    color: white;
    
    }
  

`

const Title = styled.h1`
    text-align:center;
`
const Form = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    height:150px;
`
const ImgOne = styled.img`
 background-image: url(https://www.incredibleegg.org/wp-content/uploads/2020/06/d-pear-spinach-egg-flatbread-2100x963-1.jpg);
 height: 60vh;
 width: 100%;
 background-position: center;
 background-repeat: no-repeat;
 background-size:cover;
`
const SubButton = styled.button`
    
    color:white;
    padding: 5px;
    border-radius:8%;
    background:#aa6639;
    transition: .25s ease-in-out;
    border:none;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: none;
    }
`
const Label = styled.label`

    margin: 20px;
`

const Alink = styled.a`
  display:flex;
  justify-content: center;
  width: max-content;
  margin: 18px auto 10px auto;
  padding: 5px;
  border-radius:8%;
  background:#aa6639;
  transition: .25s ease-in-out;
  

  &:hover {
    cursor: pointer;
    background: white;
    color: #aa6639;
    border: none;
  }
`


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
        <RecipeMaker>
            {console.log(params)}
            <Title>Add The Secret Recipe</Title>
            <Link to={`/${params.id}/recipe`}><Alink>Recipe Home</Alink></Link>
            <ImgOne></ImgOne>
            <Form onSubmit={onSubmit}>
                <Label>Title:
                <input type="text" name="title" value={recipe.title} onChange={handleChange}/></Label>
                <Label>Source:
                <input type="text" name="source" value={recipe.source} onChange={handleChange}/></Label>
                <Label>Ingredients:
                <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange}/></Label>
                <Label>Instructions:
                <input type="text" name="instructions" value={recipe.instructions} onChange={handleChange}/></Label>
                <Label>Category:
                <input type="text" name="category" value={recipe.category} onChange={handleChange}/></Label>
                
               <SubButton>Add Recipe</SubButton>
            </Form>

        </RecipeMaker>
    )

}
export default RecipeForm;