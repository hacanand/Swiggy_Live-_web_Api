import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import React, { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    this.timer=setInterval(() => {
      console.log("setInterval");
    }, 1000);
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count)
      
      if (this.state.count2 !== prevState.count2)
        console.log("componentDidUpdate");
    //console.log("Parent - componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
    //console.log("Parent - componentWillUnmount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>

        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *+
 */
//import { component } from React

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    //console.log("Parent - constructor");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile />
      </div>
    );
  }
}
