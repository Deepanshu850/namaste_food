import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 3,
        }
    }

    render() {
        const { name, location } = this.props;
        return (<div className="user-card-class">
            <h1>Count:{this.state.count}</h1>
            <h1>Count:{this.state.count2}</h1>
            <h2> Name:  {name}</h2>
            <h3>Location: {location}</h3>
            <h3>contact : 95998408734</h3>
            <h3> Btech : CSE</h3>
        </div>);
    }
};
export default UserClass;