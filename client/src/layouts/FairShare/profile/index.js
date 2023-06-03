import PageLayout from "examples/LayoutContainers/PageLayout";
import React from "react";
import axios from "axios";
import "./index.css"
import Supplier from "./supplier";
import Reciever from "./reciever";

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    // componentDidMount() {
    //     /* fetch user from database */
    //     this.setState({user: response.user});
    // }
    render() {
        const { user } = this.state;

        if (user === null) {
            return <Reciever/>;
        }
        if (user.role === 'Supplier') {
            return <Supplier user={user}/>;
        }
        return <Reciever/>;
    }
}
export default Profile;

