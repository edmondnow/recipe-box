import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from './form';


class MakeModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkType = this.checkType.bind(this);
    this.state = {
      recipe: '',
      ingredients: '',
      id: undefined,
      show: false
    };

    
  }
  
  checkType(){
    if(this.props.recipe){
      this.setState({id: this.props.recipe.id, recipe: this.props.recipe.name, ingredients: this.props.recipe.ingredients.toString()});
    }
  }

  handleClose() {
    
    this.setState({ 
      show: false,
      recipe: '',
      ingredients: '',
      id: undefined
    })

  }

  handleShow() {
    this.checkType();
    this.setState({ show: true });
  }

  handleSubmit(){
    if(this.state.id){
      this.props.editrecipe(this.state.id, this.state.recipe, this.state.ingredients);
    } else {
      this.props.addrecipe(this.state.recipe, this.state.ingredients);
    }
    
    this.handleClose();
  }

  handleChange(e) {
    switch(e.target.id){
      case 'recipe':
        this.setState({ recipe: e.target.value });
        break;
      case 'ingredients':
        this.setState({ ingredients: e.target.value });
    }
  }

  render() {
    return (
      <div className="nested-div">

        <Button bsStyle="info" onClick={this.handleShow}>
          {this.props.name}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Form handleChange={this.handleChange} recipe={this.state.recipe} ingredients={this.state.ingredients}/>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-info" onClick={this.handleSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MakeModal;