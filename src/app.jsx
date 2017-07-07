import React from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  search() {
    console.log('state:', this.state);
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
                value={this.state.query}
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.search();
                  }
                }}
              />
              <InputGroup.Addon onClick={() => this.search()}>
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
