import React, { Component } from "react";
import axios from "axios";
import './Photo.css';

class Photo extends Component {
  state = {
    photos: []
  };


  componentWillReceiveProps(nextProps) {
    axios
      .get(
        `http://localhost:5000/photos?albumId=${nextProps.selectedAlbumId
        }`
      )
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleClick = urlId => {
    if (urlId === this.props.selectedurlId) {
      this.props.onurlSelected(false);
    } else {
      this.props.onurlSelected(urlId);
    }
  };

  render() {
    const photoData = this.state.photos;
    return (
      <div>
        {!photoData ? (
          <p>...Loading</p>
        ) : (
          <div className="photobox_container">
            {photoData.map(photoItem => {
              return <div>
                <div  >
                  <a href={'#openimg' + photoItem.id} >
                    <img
                      key={photoItem.id}
                      src={photoItem.thumbnailUrl}
                      className="photo_box"
                      alt=''
                      onClick={() => this.handleClick(photoItem.url)} />
                  </a>
                </div>
                <div id={'openimg' + photoItem.id} class="modalDialog">
                  <div>
                    <a href="#close" title="Закрыть" class="close">X</a>
                    <img
                      src={photoItem.url}
                      className=""
                      alt='' />
                  </div>
                </div>
              </div>
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Photo;
