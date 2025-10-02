import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
/*
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react course</h2>
      <User name={"Bharat Kumar (function)"} />
      <UserClass name={"Bharat Kumar (class)"} />
    </div>
  );
};
*/
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react course</h2>
        {/* <User name={"Bharat Kumar (function)"} /> */}
        <UserClass name={"Bharat Kumar (class)"} />
      </div>
    );
  }
}

export default About;
