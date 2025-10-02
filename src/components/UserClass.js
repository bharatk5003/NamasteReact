import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
      count1: 0,
      count2: 5,
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child component Did Mount");
    //Api call after component is rendered
    const data = await fetch("https://api.github.com/users/bharatk5003");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component Did Update called");
  }
  componentWillUnmount() {
    console.log("componet will unmount called");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: bharatk503@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
