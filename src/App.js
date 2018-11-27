import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "madleine", age: 26 },
      { name: "madmax", age: 29 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "maximilian", age: 28 },
        { name: "madleine", age: 26 },
        { name: "madmax", age: 45 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "max", age: 28 },
        { name: event.target.value, age: 26 },
        { name: "madmax", age: 45 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    return (
      <div className="App">
        <h1>Hi!!!</h1>
        <p>super hjhgh</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Maximilian")}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Max")}
          change={this.nameChangeHandler}
        >
          My hobby
        </Person>
      </div>
    );
    //return React.createElement("div", { className: "App" }, "h1", "Hi!!!");
  }
}

export default App;
