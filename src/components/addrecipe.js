import React, { Component } from 'react';

const AddRecipe = (props) => {
    return(
      <div className="modal fade" id="addrecipe" tabIndex="-1" role="dialog" aria-labelledby="addrecipe" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Recipe</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="addrecipeform" onSubmit={props.handleSubmit}> 
                <label htmlFor="#addrecipe">Recipe Name</label><br/>
                <input type="text" className="form-control" id="addrecipe" onChange={props.handleChange} value={props.addrecipe}/>
                <label htmlFor="#addingredients" >Ingredients (separate by comma)</label>
                <input type="text" id="addingredients" className="form-control" onChange={props.handleChange} value={props.addingredients}/>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit"  form="addrecipeform" className="btn btn-info" >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default AddRecipe;