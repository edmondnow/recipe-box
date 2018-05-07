import React, { Component } from 'react';
import {Glyphicon, Button, Well, ListGroupItem, ListGroup, Collapse } from 'react-bootstrap';
import uniqid from 'uniqid';
import Modal from './modal';




class ListItemDropdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  

  render() {
    const recipe = this.props.recipe;
    return (
      <div>
        <ListGroupItem key={recipe.id} bsStyle={recipe.style} onClick={() => this.setState({ open: !this.state.open })}>{ recipe.name }
          <div className="glyphs" id={recipe.id}>
            <Glyphicon glyph="asterisk" className='text-danger'  id='danger' onClick={this.props.changecolor}/>
            <Glyphicon glyph="asterisk" className='text-info'  id='info' onClick={this.props.changecolor}/>
            <Glyphicon glyph="asterisk" className='text-success' id='success' onClick={this.props.changecolor}/>
            <Glyphicon glyph="asterisk" className='text-warning' id='warning' onClick={this.props.changecolor}/>
          </div>
        </ListGroupItem>
        <Collapse in={this.state.open}>
          <Well className="innerwell">
            <ListGroup>
              {
                recipe.ingredients.map(ingredient =>{
                  return (
                    <ListGroupItem key={uniqid()}>{ingredient}
                    </ListGroupItem>
                  )
                })
              }
            </ListGroup>
            <Button bsStyle="danger" id={recipe.id} onClick={this.props.deleterecipe}> Delete Recipe</Button>
            <Modal name="Edit Recipe" recipe={this.props.recipe} editrecipe={this.props.editrecipe}/>
          </Well>
        </Collapse>
      </div>
    )
  }
}

export default ListItemDropdown;