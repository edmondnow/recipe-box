import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddRecipe from './addrecipe';
import EditRecipe from './editrecipe';
import MakeRecipes from './makerecipes';

class MakeRecipeBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      addrecipe: '',
      addingredients: '',
      editrecipe: '',
      editingredients: '',
      recipes:[

        { id: uniqid(),
          name: 'Pumpkin Soup',
          ingredients: ['pumpkin', 'cream', 'onion']

        }
      ]
    }//state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }





  handleSubmit(e){
    e.preventDefault();
    switch(e.target.id){
      case 'editrecipeform':

        
      case 'addrecipeform':
        let addingredients = this.state.addingredients.split(',');
        addingredients = addingredients.map(ingr => {
          return ingr.trim();
        })
        let newrecipe = {id: uniqid(), name: this.state.addrecipe, ingredients: addingredients }
        this.setState({recipes: [...this.state.recipes, newrecipe], addingredients: '', addrecipe: ''});
    }
  }

  handleChange(e){
    switch(e.target.id){
      case 'editrecipe':
        this.setState({editrecipe: e.target.value});
        break;
      case 'editingredients':
        this.setState({editingredients: e.target.value});
        break;
      case 'addrecipe':
        this.setState({addrecipe: e.target.value});
        break;
      case 'addingredients':
        this.setState({addingredients: e.target.value});
        break;        
    }
    
  }
  
  render(){
    return(
      <div>
        <div id="accordion" className="bg-light card card-body">
          <ul className="list-group">
            <MakeRecipes recipes={this.state.recipes}/>
          </ul>
        </div>
          <button type="button" id="addrecipebtn" className="btn btn-info" data-toggle="modal" data-target="#addrecipe">
            Add Recipe
          </button>
          <AddRecipe handleSubmit={this.handleSubmit} handleChange={this.handleChange} addrecipe={this.state.addrecipe} addingredients={this.state.addingredients}/>
          <EditRecipe handleSubmit={this.handleSubmit} handleChange={this.handleChange} editrecipe={this.state.editrecipe} editingredients={this.state.editingredients}/>
      </div>
    )
  }
}

export default MakeRecipeBox;