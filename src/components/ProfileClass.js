// import React from "react";

// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     // Create State
//     this.state = {
//       userInfo: {
//         name: "Dummy Name",
//         location: "Dummy Location",
//       },
//     };
//     //console.log("Child - Constructor" + this.props.name);
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("NAMASTE REACT OP ");
//     }, 1000);

//     //console.log("Child - componentDidMount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count !== prevState.count) {
//       //
//     }
//     if (this.state.count2 !== prevState.count2) {
//       // code
//     }
//     console.log("Component Did Update");
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//     //console.log("ComponentWillUnmount");
//   }

//   render() {
//     const { count } = this.state;
//     //console.log("Child - render" + this.props.name);
//     return (
//       <div>
//         <h1> Profile Class Component </h1>
//         <img src={this.state.userInfo.avatar_url} />
//         <h2>Name: {this.state.userInfo.name}</h2>
//         <h2>Location: {this.state.userInfo.location}</h2>
//       </div>
//     );
//   }
// }
// export default Profile;
// /**
//  *
//  *  child constructor
//  *  child render
//  *  child componentDidMount
//  *
//  *  API call
//  *  Set State
//  *
//  *  <UPDATE CYCLES>
//  *  render
//  *
//  *
//  */
import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 0,
      count:0,
    };
    console.log("constructor");
  }
   

  componentDidMount() {
    //best place to api call
console.log("componentDidMount");
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>;<h2>Name: {this.props.name}</h2>;
        <h3>XYZ : {this.props.xyz}</h3>
        <h2>Count: {count}</h2>
        <button>
          onClick=
          {() => {
            this.setState({
              count: count + 1,
            });
          }}
        </button>
      </div>
    );
  }
}
export default Profile;
