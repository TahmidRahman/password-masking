import React, { Component } from 'react';
import './App.css';
import { PasswordInput } from './PasswordInput';

class App extends Component {
  state = { password: '' };
  onToggleType = () => {
    this.setState({ password: !this.state.password });
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { password } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Password Masking with Material UI</h1>
          <PasswordInput
            label="Password"
            name="password"
            value={password}
            onChange={this.onInputChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
