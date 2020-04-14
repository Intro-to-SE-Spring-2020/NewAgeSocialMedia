import React, { Component } from 'react'

export default class LikeButton extends React.Component {
  
  state = {
    likes: 0
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
     this.setState({
     likes: newCount
     });
  };

  removeLike = () => {
    let newCount = this.state.likes - 1;
     this.setState({
     likes: newCount
     });
  };

  render() {
    const likes = this.state.likes;
          if (likes == 0){
            return (
              <div>
              <button
                className="button"
                onClick={this.addLike}
              className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button>
              </div>
            )
          }

          if (likes >= 1){
            return (
              <div>
              <button
                className="button"
                onClick={this.removeLike}
              className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like {this.state.likes}
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button>
              </div>
            )
          }

          if (likes == 1){
            return (
              <div>
              <button
                className="button"
                onClick={this.addLike}
              className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like {this.state.likes}
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button>
              </div>
            )
          }
  }
}
