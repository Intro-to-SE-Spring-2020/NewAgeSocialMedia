import React, { Component } from 'react'

export default class NavBarSmall extends Component {
  render() {
    return (

      <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
      </div>
    )
  }
}
