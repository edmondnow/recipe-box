import React, { Component } from 'react';

const MakeRecipes = (props) => {
  return(
    props.recipes.map(recipe=>{
      return (
      <div>
        <li key={recipe.id}  onClick={props.setCurrentRecipe} className="list-group-item list-group-item-warning" data-toggle="collapse" data-target={`#${recipe.id}_card`} aria-expanded="true" aria-controls="collapseOne">
          { recipe.name }
        </li>
        <div id={`${recipe.id}_card`} className="collapse card card-body" aria-labelledby="headingOne" data-parent="#accordion">
          <h4>Ingredients</h4>
          <ol className="list-group">
            {
              recipe.ingredients.map(ingredient =>{
                return <li key={`${recipe.id}_${ingredient}`} className="list-group-item">{ingredient}</li>
              })
            }
          </ol>
          <div className="buttonCont">
            <button className="btn btn-danger">Delete</button>
            <button type="button" id={recipe.id} onClick={props.setCurrentRecipe} className="btn btn-info" data-toggle="modal" data-target="#editrecipe">
            Edit Recipe
            </button>
          </div>
        </div>
      </div>
      )
    })
  )
}
export default MakeRecipes;