import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ['something']
    };
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.term != '') {
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }
  };
  deleteItem = (value, event) => {
    let arr = [...this.state.items];
    let index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
      this.setState({ items: arr });
    }
  };

  render() {
    return (
      <div className='list-container'>
        <div className='form-container'>
          <h1>To Do Example</h1>
          <form className='App' onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <List items={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
