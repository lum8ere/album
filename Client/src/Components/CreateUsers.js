import React, { Component } from 'react'
import axios from "axios"

class CreateUsers extends Component {
    state = {
        id: "",
        name: "",
        username: ""
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        axios
            .get("http://localhost:5000/users/")
            .then(res => {
                const data = res.data
                this.setState({ users: data })
            })
            .catch(err => console.log(err));
    }

    handleChannge = ({ target }) => {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    submit = (event) => {
        event.preventDefault();

        const payload = {
            id: this.state.id,
            name: this.state.name,
            username: this.state.username
        }

        axios({
            url: "http://localhost:5000/users/create",
            method: "POST",
            data: payload
        })
            .then(() => {
                alert('User created')
                this.resetUserInputs();
                this.getUser()
            })
            .catch(err => console.log(err));
    }

    Dsubmit = (event => {
        event.preventDefault()

        const Dpayload = {
            id: this.state.id
        }

        axios({
            url: `http://localhost:5000/users/delete?id=${this.state.id}`,
            method: "DELETE",
            data: Dpayload
        })
            .then(() => {
                alert('User deleted')
                this.resetUserInputs();
                this.getUser()
            })
            .catch(err => console.log(err));
    })

    Psubmit = (event => {
        event.preventDefault()

        const Ppayload = {
            id: this.state.id,
            name: this.state.name,
            username: this.state.username
        }

        axios({
            url: `http://localhost:5000/users/put?id=${this.state.id}`,
            method: "PUT",
            data: Ppayload
        })
            .then(() => {
                alert('User changed')
                this.resetUserInputs();
                this.getUser()
            })
            .catch(err => console.log(err));
    })

    resetUserInputs = () => {
        this.setState({
            id: "",
            name: "",
            username: ""
        })
    }

    render() {
        return (
            <div className="app">
                <h3>User settings</h3>
                <a href="#addUser" class="button19">ADD</a>
                <a href="#deleteUser" class="button18">Delete</a>
                <a href="#putUser" class="button20">Edit</a>
                <div id="addUser" class="bmodalbackground">
                    <div class="bmodalwindow">
                        <form onSubmit={this.submit}>
                            <div className="form-input-create">
                                <input
                                    type="text"
                                    name="id"
                                    placeholder="last id + now"
                                    value={this.state.id}
                                    onChange={this.handleChannge}
                                />
                            </div>
                            <div className="form-input-create">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleChannge}
                                />
                            </div>
                            <div className="form-input-create">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChannge}
                                />
                            </div>
                            <button>Create</button>
                        </form>
                        <a href="#" class="button1">Close</a>
                    </div>
                </div>
                <div id="DeleteUser">
                    <div>
                        <div id="deleteUser" class="bmodalbackground">
                            <div class="bmodalwindow">
                                <form onSubmit={this.Dsubmit}>
                                    <div className="form-input-delete">
                                        <input
                                            type="text"
                                            name="id"
                                            placeholder="id users"
                                            value={this.state.id}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <button>Delete</button>
                                </form>
                                <a href="#" class="button1">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ChangeUser">
                    <div>
                        <div id="putUser" class="bmodalbackground">
                            <div class="bmodalwindow">
                                <form onSubmit={this.Psubmit}>
                                    <div className="form-input-delete">
                                        <input
                                            type="text"
                                            name="id"
                                            placeholder="id"
                                            value={this.state.id}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <div className="form-input-delete">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="name"
                                            value={this.state.name}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <div className="form-input-delete">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            value={this.state.username}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <button>Change</button>
                                </form>
                                <a href="#" class="button1">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateUsers