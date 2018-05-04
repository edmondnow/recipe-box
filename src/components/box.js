import React, { Component } from 'react';
import MakeRecipes from './makerecipes';


class MakeRecipeBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      addrecipe: '',
      addingredients: '',
      recipes:[
        { name: 'Pumpkin Soup',
          ingredients: ['pumpkin', 'cream', 'onion']

        }
      ]
    }//state

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault()
    let ingredients = this.state.addingredients.split(',');
    ingredients = ingredients.map(ingredient =>{
      return ingredient.trim();
    })
    let recipe = {name: this.state.addrecipe, ingredients: [...ingredients]};
    this.setState({recipes: [...this.state.recipes, recipe], addingredients: '', addrecipe: ''})
    console.log(this.state)
  }

  handleChange(e){
    switch(e.target.id){
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
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#addrecipe">
            Add Recipe
          </button>
        <div className="modal fade" id="addrecipe" tabIndex="-1" role="dialog" aria-labelledby="AddRecipeLAbel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Recipe</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="addrecipeform" onSubmit={this.handleSubmit}>
                  <label htmlFor="#addrecipe" >Recipe Name</label><br/>
                  <input type="text" id="addrecipe" onChange={this.handleChange} className="form-control" value={this.state.addrecipe}/><br/>
                  <label htmlFor="#addrecipe" >Ingredients (separate by comma)</label><br/>
                  <input type="text" id="addingredients" onChange={this.handleChange} className="form-control" value={this.state.addingredients}/>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" form="addrecipeform" className="btn btn-info">Add Recipe</button>
              </div>
            </div>``
          </div>
        </div>
      </div>
    )
  }
}

export default MakeRecipeBox;