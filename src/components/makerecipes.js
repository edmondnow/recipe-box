import React, { Component } from 'react';
import EditRecipe from './editrecipe';

const MakeRecipes = (props) => {
  return(
    props.recipes.map(recipe=>{
      return (
      <div>
        <li key={`${recipe.name}`} className="list-group-item list-group-item-warning" data-toggle="collapse" data-target={`#${recipe.name}`} aria-expanded="true" aria-controls="collapseOne">
          { recipe.name }
        </li>
        <div id={ recipe.name } className="collapse card card-body" aria-labelledby="headingOne" data-parent="#accordion">
          <h4>Ingredients</h4>
          <ol className="list-group">
            {
              recipe.ingredients.map(ingredient =>{
                return <li className="list-group-item">{ingredient}</li>
              })
            }
          </ol>
          <div className="buttonCont">
            <button className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#${recipe.name}`}>
            Edit Recipe
            </button>
          </div>
        </div>
        <EditRecipe recipe={this.props.recipes}/>
      </div>
      )
    })
  )
}
export default MakeRecipes;