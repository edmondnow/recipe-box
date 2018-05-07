import React, { Component } from 'react';
import { Button, Well, ListGroup } from 'react-bootstrap';
import ListItemDropdown from './ListItemDropdown'
import Modal from './modal';
import Panel from './panel';
import uniqid from 'uniqid';
import _ from 'lodash';





class MakeRecipeBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      recipes:[{
        name: 'Banana Split', id: uniqid(), ingredients: ['Banana', 'Chocolate Sprinkles'], style:'warning'
      }, {
        name: 'Soup', id: uniqid(), ingredients: ['Tomatoes', 'Potatoes'], style: 'info'
      }
      ]
    }

    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  
  addRecipe(name, ingredients){
    ingredients = ingredients.split(',');;
    ingredients = ingredients.map(ingredient => {
      return ingredient.trim();
    });
    let newRecipe = {id: uniqid(), name: name, ingredients: ingredients , style: 'info'}
    this.setState({recipes: [...this.state.recipes, newRecipe]})
  }
  
  editRecipe(id, name, ingredients ){
    let recipes = this.state.recipes;
    ingredients = ingredients.split(',');;
    ingredients = ingredients.map(ingredient => {
      return ingredient.trim();
    });
    let index;
    let color; 
    for(let i = 0; i < recipes.length; i++){
        if(this.state.recipes[i].id == id){
          index = i;
          color = recipes[i].style;
        }
    }  
    let newRecipe = {id: id, name: name, ingredients: ingredients, style:color}
    recipes = [...recipes.slice(0,index), newRecipe, ...recipes.slice(index+1)]
    this.setState({recipes:[...recipes]});
  }
  deleteRecipe(e){
    let index;
    for(let i = 0; i < this.state.recipes.length; i++){
        if(this.state.recipes[i].id == e.target.id){
          index = i;
        }
    }  
    let recipes = [...this.state.recipes.slice(0,index), ...this.state.recipes.slice(index+1)]
    this.setState({recipes: recipes})   
  }

  changeColor(e){
    e.stopPropagation();
    let index;
    let ingredients;
    let name;
    let id = e.target.parentNode.id;
    let color = e.target.id;
    let recipes = this.state.recipes;
    for(let i = 0; i < recipes.length; i++){
        if(recipes[i].id == id){
          index = i;
          ingredients = recipes[i].ingredients;
          name = this.state.recipes[i].name
        }
    } 
    
    let newRecipe = {id: id, name: name, ingredients: ingredients, style:color}
    recipes = [...recipes.slice(0,index), newRecipe, ...recipes.slice(index+1)]
    this.setState({recipes:[...recipes]});
  }
  

  render(){
    return(
      <Well className="outerwell">
        <h1> Recipe Box </h1>
        <ListGroup>
          {
            this.state.recipes.map(recipe=>{
              return <ListItemDropdown recipe={recipe} changecolor={this.changeColor} editrecipe={this.editRecipe} deleterecipe={this.deleteRecipe}/>
            })
          }
        </ListGroup>
        <Modal name={"Add Recipe"} addrecipe={this.addRecipe}/>
      </Well>
    )
  }
}

export default MakeRecipeBox;
