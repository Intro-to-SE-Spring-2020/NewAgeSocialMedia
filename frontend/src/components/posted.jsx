import React, { Component } from 'react'
import LikeButton from "./likeButton" // Import LikeButton class to provide functionality for like button

// Create a new component
export default class Posted extends Component {

  // Render the component
  render() {

    return (

      // Style the Post/Boom
      <div className="w3-container w3-card w3-white w3-round w3-margin">
        <img src="images/johndoe.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '60px'}} />
        <h4>John Doe</h4><br />
        <hr className="w3-clear" />
        <p>I went hiking today with Cheryl and saw some good views!</p>
        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half">
            <img src="images/northernlights.jpeg" style={{width: '90%'}} alt="Northern Lights" className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="images/nature.jpg" style={{width: '90%'}} alt="Nature" className="w3-margin-bottom" />
          </div>
        </div>

        {/* Add the like button to the post/boom */}
        <LikeButton/>
      </div>
    )
  }
}
