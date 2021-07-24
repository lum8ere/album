import React, { Component } from 'react'
import axios from 'axios'

class CreateAlbum extends Component {
    state = {
        userId: "",
        id: "",
        title: ""
    }

    componentDidMount() {
        this.getAlbum()
    }

    getAlbum = () => {
        axios
            .get("http://localhost:5000/albums/")
            .then(res => {
                const data = res.data
                this.setState({ albums: data })
            })
            .catch(err => console.log(err));
    }

    resetUserInputs = () => {
        this.setState({
            userId: "",
            id: "",
            title: ""
        })
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
            userId: this.state.userId,
            id: this.state.id,
            title: this.state.title
        }

        axios({
            url: "http://localhost:5000/albums/create",
            method: "POST",
            data: payload
        })
            .then(() => {
                alert('Album created')
                this.resetUserInputs();
                this.getAlbum()
            })
            .catch(err => console.log(err));
    }

    Dsubmit = (event => {
        event.preventDefault()

        const Dpayload = {
            id: this.state.id
        }

        axios({
            url: `http://localhost:5000/albums/delete?id=${this.state.id}`,
            method: "DELETE",
            data: Dpayload
        })
            .then(() => {
                alert('Album deleted')
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
            url: `http://localhost:5000/albums/put?id=${this.state.id}`,
            method: "PUT",
            data: Ppayload
        })
            .then(() => {
                alert('Album changed')
                this.resetUserInputs();
                this.getUser()
            })
            .catch(err => console.log(err));
    })


    render() {
        return (
            <div className="app">
                <div id="CreateAlbum">
                    <div>
                        <h3>Album settings</h3>
                        <a href="#addAlbum" class="button19">ADD</a>
                        <a href="#deleteAlbum" class="button18">Delete</a>
                        <a href="#putAlbum" class="button20">Edit</a>
                        <div id="addAlbum" class="bmodalbackground">
                            <div class="bmodalwindow">
                                <form onSubmit={this.submit}>
                                    <div className="form-input-create">
                                        <input
                                            type="text"
                                            name="userId"
                                            placeholder="id users"
                                            value={this.state.userId}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <div className="form-input-create">
                                        <input
                                            type="text"
                                            name="id"
                                            placeholder="id"
                                            value={this.state.id}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <div className="form-input-create">
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="title"
                                            value={this.state.title}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <button>Create</button>
                                </form>
                                <a href="#" class="button1">Close</a> // eslint-disable-next-line
                            </div>
                        </div>
                    </div>
                    <div id="DeleteUser">
                        <div>
                            <div id="deleteAlbum" class="bmodalbackground">
                                <div class="bmodalwindow">
                                    <form onSubmit={this.Dsubmit}>
                                        <div className="form-input-delete">
                                            <input
                                                type="text"
                                                name="id"
                                                placeholder="id albums"
                                                value={this.state.id}
                                                onChange={this.handleChannge}
                                            />
                                        </div>
                                        <button>Delete</button>
                                    </form>
                                    <a href="#" class="button1">Close</a>// eslint-disable-next-line
                                </div>
                            </div>
                        </div>
                        <div id="ChangeUser">
                            <div>
                                <div id="putAlbum" class="bmodalbackground">
                                    <div class="bmodalwindow">
                                        <form onSubmit={this.Psubmit}>
                                            <div className="form-input-delete">
                                                <input
                                                    type="text"
                                                    name="userId"
                                                    placeholder="userId"
                                                    value={this.state.userId}
                                                    onChange={this.handleChannge}
                                                />
                                            </div>
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
                                                    name="title"
                                                    placeholder="title"
                                                    value={this.state.title}
                                                    onChange={this.handleChannge}
                                                />
                                            </div>
                                            <button>Change</button>
                                        </form>
                                        <a href="#" class="button1">Close</a>// eslint-disable-next-line
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAlbum