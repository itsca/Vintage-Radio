import React from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-tittle">Music App</div>
        <div>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search for an Artist"
              />
              <InputGroup.Addon>
                  <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <div className="Profile">
            <div>Artis Picture</div>
            <div>Artis Name</div>
          </div>
          <div className="Gallery">
            Gallery
          </div>
        </div>
      </div>
    );
  }
}
