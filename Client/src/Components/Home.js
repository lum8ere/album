import React, { Component } from "react";
import User from "./User";
import Album from "./Album";
import Photo from "./Photo";
import CreateUsers from "./CreateUsers"
import CreateAlbum from "./CreateAlbum"
import CreatePhoto from "./CreatePhoto"

class Home extends Component {
  state = {
    selectedUserId: false,
    selectedAlbumId: false,
    selectedurlId: false
  };

  onUserSelected = userId => {
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  onAlbumSelected = albumId => {
    this.setState({ selectedAlbumId: albumId });
  };

  onurlSelected = url => {
    this.setState({ selectedurl: url });
  };
 
  render() {
    return (
      <div className="container">
        <h1 className="title">Photo Album</h1>
        <div className="CreateUser">
          <CreateUsers/>
        </div>
        <div className="CreateAlbum">
          <CreateAlbum/>
        </div>
        <div className="CreatePhoto">
          <CreatePhoto/>
        </div>
        <div className="sdn_container">
          <User
            onUserSelected={this.onUserSelected}
            selectedUserId={this.state.selectedUserId}
          />
          <div className="album_photo_container">
            <Album
              selectedUserId={this.state.selectedUserId}
              onAlbumSelected={this.onAlbumSelected}
            />
            <Photo
              selectedAlbumId={this.state.selectedAlbumId}
              selectedurl={this.state.selectedurl}
              onurlSelected={this.onurlSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
