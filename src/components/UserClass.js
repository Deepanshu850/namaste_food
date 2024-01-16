import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy-name",
                location: "Default",

            },
        }
    }
    async componentDidMount() {
        // use for api call in class basesd  Components
        // just like we use useeffect in functional based componenets
        const data = await fetch("https://api.github.com/users/Deepanshu850");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });


    };

    render() {

        return (<div className="user-card-class">
            <h1> {this.state.userInfo.name}</h1>
            <h2> {this.state.userInfo.location}</h2>
            <img src={this.state.userInfo.avatar_url} />
            {/* <h1>Count:{this.state.count2}</h1> */}

            <h3>contact : 95998408734</h3>
            <h3> Btech : CSE</h3>
        </div>);
    }
};
export default UserClass;