import React, { Component } from 'react';

const EditRecipe = (props) => {
    return(
      <div className="modal fade" id="editrecipe" tabIndex="-1" role="dialog" aria-labelledby="editrecipe" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Recipe</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="editrecipeform" onSubmit={props.handleSubmit}> 
                <label htmlFor="#editrecipe">Recipe Name</label><br/>
                <input type="text" className="form-control" id="editrecipe" onChange={props.handleChange} value={props.editrecipe}/>
                <label htmlFor="#editingredients" >Ingredients (separate by comma)</label>
                <input type="text" id="editingredients" className="form-control" onChange={props.handleChange} value={props.editingredients}/>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit"  form="editrecipeform" className="btn btn-info" >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default EditRecipe;