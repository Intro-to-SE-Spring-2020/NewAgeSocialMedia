import React, { Component } from "react"
import LikeButton from "./likeButton"

// Create a new component
export default class PostItems extends Component {

  // This will take the input and create a new post/boom to show up on the page
  createBooms(item) {
    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <img src="images/me.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '60px'}} />
          <h4>Cheryl Smith</h4><br />
          <hr className="w3-clear" />

          {/* Input */}
          <p key={item.key}>{item.text}</p>
          <div className="w3-row-padding" style={{margin: '0 -16px'}}>
            <LikeButton/>
          </div>
        </div>
    )
  }

  // Render the component
  render() {

    // Create boom entries
    var boomEntries = this.props.entries;
    var listItems = boomEntries.map(this.createBooms);

    // Return the input into the post/boom
    return (
      <p>{listItems}</p>
    )
  }
}
