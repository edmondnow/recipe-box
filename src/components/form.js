import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';


class MakeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Recipe name</ControlLabel>
          <FormControl
            type="text"
            value={this.props.recipe}
            placeholder="Stake"
            id='recipe'
            onChange={this.props.handleChange}
          /><br />
          <ControlLabel>Ingredients (separated by comma)</ControlLabel>
          <FormControl
            type="text"
            value={this.props.ingredients}
            placeholder="Stake, Salt, Pepper"
            id='ingredients'
            onChange={this.props.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
}

export default MakeForm;