import React, { Component } from "react";
import ModalVidoe from "react-modal-video";

class VideoPlay extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  //   closeModal = () => {
  //     this.setState({ isOpen: false });
  //   };

  render() {
    return (
      <div className="play my-5">
        <div className="play__video">
          <div className="row">
            <div className="col">
              <div className="container p-5">
                <h2 className="mt-2  text-white">What is Covid-19?</h2>
                <i
                  onClick={this.openModal}
                  className="fas fa-play fa-3x py-2 text-white"
                ></i>
                <ModalVidoe
                  channel="youtube"
                  autoplay="true"
                  isOpen={this.state.isOpen}
                  videoId="mOV1aBVYKGA"
                  onClose={() => this.setState({ isOpen: false })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlay;
