import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="user-card-class">
            <h2> Name:  {this.props.name}</h2>
            <h3>Location: Delhi</h3>
            <h3>contact : 95998408734</h3>
            <h3> Btech : CSE</h3>
        </div>);
    }
};
export default UserClass;