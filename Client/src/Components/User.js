import React, { Component } from "react";
import axios from "axios";

class User extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:5000/users/")
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
            .catch(err => console.log(err));
    }

    handleClick = userId => {

        if (userId === this.props.selectedUserId) {
            this.props.onUserSelected(false);
        } else {
            this.props.onUserSelected(userId);
        }
    };

    render() {
        const userData = this.state.users;
        return ( <
            div className = "main_container" >
            <
            div className = "user_container" >
            <
            h1 className = "title" > Users < /h1> {
                !userData ? ( <
                    p > ...Loading < /p>
                ) : ( <
                    ul > {
                        userData.map(userItem => {
                            return ( <
                                div key = { userItem.id }
                                className = "user_box"
                                onClick = {
                                    () => this.handleClick(userItem.id) }
                                style = {
                                    {
                                        backgroundColor: this.props.selectedUserId === userItem.id ?
                                            "lightgreen" :
                                            "white"
                                    }
                                } >
                                { userItem.username } { userItem.id } <
                                /div>
                            );
                        })
                    } <
                    /ul>
                )
            } <
            /div> <
            /div>
        );
    }
}

export default User;