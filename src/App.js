import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: "1", name: "Animesh", age: 23},
      {id: "2", name: "Nargis", age: 24},
      {id: "3", name: "Rohan", age: 24}
    ],
    showPersons: false,
  }

  switchNameHandler = () => {
    // console.log("clicked");
    this.setState({
      persons: [
        {name: "Paul", age: 23},
        {name: "Seikh", age: 23},
        {name: "Dutta", age: 24}
      ]
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    })
  }
  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  deletePerson = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
 render() {

  const style = {
    background: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '2px'
  }

  const classes = [];
  if(this.state.persons.length <= 2) {
    classes.push('red');
  }
  if(this.state.persons.length <= 1) {
    classes.push('bold');
  }
   let persons = null;
   if(this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={this.deletePerson.bind(this, index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            change={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
      </div>
    );
    style.background = 'red';
   }

  return (
    <div className="App">
      <h1>hi, welcome to react app</h1>
      <p className={classes.join(' ')}>it really works</p>
      <button onClick={this.togglePersons} style={style}>Click here</button>
      {persons}
    </div>
  );
 }
}

export default Radium(App);
