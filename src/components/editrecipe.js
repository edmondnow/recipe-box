import React, { Component } from 'react';

const editRecipe = (props) =>{

  return(
    <div className="modal fade" id="editmodal" tabIndex="-1" role="dialog" aria-labelledby='' aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="edit">some name</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <label htmlFor="#recipenameedit" >Recipe Name</label><br/>
              <input type="text" id="recipenameedit" className="form-control"/><br/>
              <label htmlFor="#ingredientedit" >Ingredients (separate by comma)</label><br/>
              <input type="text" id="ingredientsedit" className="form-control"/>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-info">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default editRecipe;