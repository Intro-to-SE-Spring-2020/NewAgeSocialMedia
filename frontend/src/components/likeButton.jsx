import React, { Component } from 'react'

// Create a new component
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

  // Render the component
  render() {
    const likes = this.state.likes;
          if (likes == 0){
            return (
              <div>

              {/* Like button for Core Feature. This will add a like to the button and unlike it when the user has already liked it. */}
              <button
                className="button"
                onClick={this.addLike}
              className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button>
              </div>
            )
          }

          // This will unlike the button and decrease the number of likes when the user has already liked it.
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

          // This will add a like to the button by increasing the count to 1.
          if (likes == 1){
            return (
              <div>
              <button
                className="button"
                onClick={this.addLike}
              className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Unlike {this.state.likes}
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button>
              </div>
            )
          }
  }
}
