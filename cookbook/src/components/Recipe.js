import React, { useEffect, useState } from 'react';

import RecipeForm from "./RecipeForm";
import { Link, useParams, useHistory } from "react-router-dom";
import { getRecipes, editRecipe, deleteRecipe } from "../action/index";
import { connect, useDispatch } from 'react-redux';
import Search from "../components/search";
import styled from "styled-components";

const Title = styled.h1`
text-align:center;
`
const ImgOne = styled.img`
  background-image: url('https://static01.nyt.com/images/2018/10/23/dining/as-white-bean-tomato/as-white-bean-tomato-superJumbo-v2.jpg');
  height: 40vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  
`
const ImgContainer = styled.div`
  display:flex;
  align-content:center;
`

const RecipeDisplay = styled.div`
  
  text-align: center;
  background: white;
  margin: 10px;
  border-radius:8%;
`
const RecipeList = styled.ul`
  display:flex;
  justify-content: center;
  align-content:center;
`

const RecipeWrapper = styled.div`
  text-align: center;
  margin: 20px;
  
  
`

const RecipeButton= styled.div`
  
  margin: 15px;
  display: inline-block;
  cursor: pointer;
  color:white;
  padding: 5px;
  border-radius:8%;
  background:#aa6639;
  transition: .25s ease-in-out;
  justify-content: center;
  width: 45px;
  
  &:hover {
      cursor: pointer;
      background: white;
      color: black;
      border: none;
  }
`

const Container = styled.div`
  & > a {
    text-decoration: none;
    color: white;
    
  }
  
`
const Alink = styled.a`
  display:flex;
  justify-content: center;
  width: max-content;
  margin: 18px auto auto auto;
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



const Recipe = ({getRecipes, editRecipe, userRecipe}) => { 

  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();


  const initialValue = {
    title:'',
    source:'',
    ingredients:'',
    instructions:'',
    category:'',
    user_id: params.id,
  }

      useEffect(() => {
        getRecipes(params.id)
    }, [])
    
    
    


    return(
        <Container>
         
        <Title>Recipes</Title>
        <ImgContainer>
        <ImgOne></ImgOne>
        </ImgContainer>
        {/* <Search userRecipe={userRecipe}/> */}
        <Link to={`/add-recipe/${params.id}`}><Alink>Recipe Form</Alink></Link>
        <RecipeList>

        {
            userRecipe.map(recipe => {
                return (
                  <RecipeDisplay>
                  <RecipeWrapper>
                    <h2>{recipe.title}</h2>
                    <h4>Source: {recipe.source}</h4>
                    <div><b>Ingredients: </b>{recipe.ingredients}</div>
                    <div><b>Instructions:</b> {recipe.instructions}</div>
                    <div><b>Category: </b>{recipe.category}</div>
                    <RecipeButton onClick={(event) => {
                      event.preventDefault()
                      history.push(`/edit-recipe/${params.id}/${recipe.recipe_id}`)
                    }}>
                    Edit
                    </RecipeButton>
                    <RecipeButton onClick={() => {
                      dispatch(deleteRecipe(params.id, recipe))
                    }}>
                    Delete
                    </RecipeButton>
                  </RecipeWrapper>
                  </RecipeDisplay>
                )
                // <li className="recipe" onClick={() => editRecipe(recipe)}>{recipe.title}</li>
            
            })
        }

        </RecipeList>
            {/* {  editing && <EditMenu recipeToEdit={recipeToEdit} setEditing={setEditing} setRecipeToEdit={setRecipeToEdit}/>
            }     */}
              
        </Container>)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userRecipe: state.userRecipe, isFetching: state.isFetching, error: state.error
    }
}

export default connect(mapStateToProps, {getRecipes, editRecipe})(Recipe);