import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let list = ["brijesh", "priyanka", "soni"];
    return (
      <ol key="relativeList">
        {" "}
        {list.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    );
  }
}

export default App;
