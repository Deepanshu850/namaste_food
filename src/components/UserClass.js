import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        // use for api call in class basesd  Components
        // just like we use useeffect in functional based componenets
    };

    render() {
        const { name, location } = this.props;
        return (<div className="user-card-class">
            <h1>Count:{this.state.count}</h1>
            <button onClick={() => {
                // never update state direct state varible directly
                this.setState({
                    count: this.state.count + 1,
                });
            }}>Button</button>
            {/* <h1>Count:{this.state.count2}</h1> */}
            <h2> Name:  {name}</h2>
            <h3>Location: {location}</h3>
            <h3>contact : 95998408734</h3>
            <h3> Btech : CSE</h3>
        </div>);
    }
};
export default UserClass;