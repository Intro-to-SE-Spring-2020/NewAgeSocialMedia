import React, { Component } from 'react'

export default class Biography extends Component {
  render() {
    return (
      <div className="w3-card w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">My Profile</h4>
          <p className="w3-center"><img src="images/me.png" className="w3-circle" style={{height: '106px', width: '106px'}} alt="Avatar" /></p>
          <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" /> Designer, UI</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme" /> Starkville, MS</p>
          <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme" /> April 1, 1998</p>
          <p><i className="fa fa-users fa-fw w3-margin-right w3-text-theme" /> Followers: 37</p>
        </div>
      </div>
    )
  }
}
