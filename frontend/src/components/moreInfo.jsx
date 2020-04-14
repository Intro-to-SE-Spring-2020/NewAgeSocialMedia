import React, { Component } from 'react'

export default class MoreInfo extends Component {
  render() {
    return (
      <div className="w3-card w3-round">
        <div className="w3-white">
          <button className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-circle-o-notch fa-fw w3-margin-right" /> My Groups</button>
          <button className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-calendar-check-o fa-fw w3-margin-right" /> My Events</button>
          <button className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right" /> My Photos</button>
        </div>
      </div>
    )
  }
}
