import React, { Component } from "react"
import LikeButton from "./likeButton"

export default class PostItems extends Component {

  createBooms(item) {
    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <img src="images/me.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '60px'}} />
          <h4>Cheryl Smith</h4><br />
          <hr className="w3-clear" />
          <p key={item.key}>{item.text}</p>
          <div className="w3-row-padding" style={{margin: '0 -16px'}}>
            <LikeButton/>
          </div>
        </div>
    )
  }

  render() {
    var boomEntries = this.props.entries;
    var listItems = boomEntries.map(this.createBooms);

    return (
      <p>{listItems}</p>
    )
  }
}
