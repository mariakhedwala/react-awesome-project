import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Maria', age: '22', qualification: 'Engineer', id: 1 },
      { name: 'Fiza', age: '18', qualification: 'Student', id: 2 },
      { name: 'Joe', age: '20', qualification: 'Doctor', id: 3 },
      { name: 'John', age: '25', qualification: 'Doctor', id: 4 },
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('didmount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did updated');
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="app">
        <h1>My app</h1>
        <p>welcome</p>
        <Ninjas deleteNinja= {this.deleteNinja} ninjas = { this.state.ninjas } />
        <AddNinja addNinja= {this.addNinja} />
      </div>
    );
  }
}

export default App;
