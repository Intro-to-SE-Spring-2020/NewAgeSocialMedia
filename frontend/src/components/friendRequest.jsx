import React, { Component } from 'react'

// Create a new component
export default class FriendRequest extends Component {

  // Render the component
  render() {

    return (
      // Style the FriendRequest section
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>New Friend Request</p>
          <img src="images/janedoe.jpg" alt="Avatar" style={{width: '25%'}} /><br />
          <span>Jane Doe</span>
          <div className="w3-row w3-opacity">
            <div className="w3-half">
              <button className="w3-button w3-block w3-green w3-section" title="Accept"><i className="fa fa-check" /></button>
            </div>
            <div className="w3-half">
              <button className="w3-button w3-block w3-red w3-section" title="Decline"><i className="fa fa-remove" /></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
