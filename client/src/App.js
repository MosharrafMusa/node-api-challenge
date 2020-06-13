import React, { Component } from "react";
import Project from "./components/Project";

class App extends Component {
  render() {
    return <Project projects={this.state.projects} />;
  }

  state = {
    projects: [],
  };

  componentDidMount() {
    fetch("http://localhost:8000/project")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ projects: data });
      })
      .catch(console.log);
  }
}

export default App;
