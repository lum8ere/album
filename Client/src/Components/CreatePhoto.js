import React, { Component } from 'react'
import axios from 'axios'

class CreatePhoto extends Component {
    state = {
        albumId: "",
        id: "",
        title: "",
        url: "",
        thumbnailUrl: ""
    }

    componentDidMount() {
        this.getPhoto()
    }

    getPhoto = () => {
        axios
            .get("http://localhost:5000/photos/")
            .then(res => {
                const data = res.data
                this.setState({ photos: data })
            })
            .catch(err => console.log(err));
    }

    resetUserInputs = () => {
        this.setState({
            albumId: "",
            id: "",
            title: "",
            url: "",
            thumbnailUrl: ""
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
            albumId: this.state.albumId,
            id: this.state.id,
            title: this.state.title,
            url: this.state.url,
            thumbnailUrl: this.state.thumbnailUrl
        }

        axios({
            url: "http://localhost:5000/photos/create",
            method: "POST",
            data: payload
        })
            .then(() => {
                alert('Photo add to album')
                this.resetUserInputs();
                this.getPhoto()
            })
            .catch(err => console.log(err));
    }

    Dsubmit = (event => {
        event.preventDefault()

        const Dpayload = {
            id: this.state.id
        }

        axios({
            url: `http://localhost:5000/photos/delete?id=${this.state.id}`,
            method: "DELETE",
            data: Dpayload
        })
            .then(() => {
                alert('Photo deleted')
                this.resetUserInputs();
                this.getPhoto()
            })
            .catch(err => console.log(err));
    })

    Psubmit = (event => {
        event.preventDefault()

        const Ppayload = {
            albumId: this.state.albumId,
            id: this.state.id,
            title: this.state.title,
            url: this.state.url,
            thumbnailUrl: this.state.thumbnailUrl
        }

        axios({
            url: `http://localhost:5000/photos/put?id=${this.state.id}`,
            method: "PUT",
            data: Ppayload
        })
            .then(() => {
                alert('Photo changed')
                this.resetUserInputs();
                this.getPhoto()
            })
            .catch(err => console.log(err));
    })


    render() {
        return (
            <div className="app">
                <div id="AddPhoto to album">
                    <div>
                        <h3>Photo settings</h3>
                        <a href="#addPhoto" class="button19">ADD</a>
                        <a href="#deletePhoto" class="button18">Delete</a>
                        <a href="#putPhoto" class="button20">Edit</a>
                        <div id="addPhoto" class="bmodalbackground">
                            <div class="bmodalwindow">
                                <form onSubmit={this.submit}>
                                    <div className="form-input-create">
                                        <input
                                            type="text"
                                            name="albumId"
                                            placeholder="albumId"
                                            value={this.state.albumId}
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
                                    <div className="form-input-create">
                                        <input
                                            type="text"
                                            name="url"
                                            placeholder="url"
                                            value={this.state.url}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <div className="form-input-create">
                                        <input
                                            type="text"
                                            name="thumbnailUrl"
                                            placeholder="thumbnailUrl"
                                            value={this.state.thumbnailUrl}
                                            onChange={this.handleChannge}
                                        />
                                    </div>
                                    <button>ADD</button>
                                </form>
                                <a href="#" class="button1">Close</a>
                            </div>
                        </div>
                    </div>

                    <div id="DeleteUser">
                        <div>
                            <div id="deletePhoto" class="bmodalbackground">
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
                                    <a href="#" class="button1">Close</a>
                                </div>
                            </div>
                        </div>
                        <div id="ChangeUser">
                            <div>   
                                <div id="putPhoto" class="bmodalbackground">
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
                                        <a href="#" class="button1">Close</a>
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

export default CreatePhoto