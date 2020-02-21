import React, { Component } from 'react'

export default class Accordion extends Component {
  render() {
    return (
      
      <div className="w3-card w3-round">
        <div className="w3-white">
          <button onclick="myFunction('Demo1')" className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-circle-o-notch fa-fw w3-margin-right" /> My Groups</button>
          <div id="Demo1" className="w3-hide w3-container">
            <p>Some text..</p>
          </div>
          <button onclick="myFunction('Demo2')" className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-calendar-check-o fa-fw w3-margin-right" /> My Events</button>
          <div id="Demo2" className="w3-hide w3-container">
            <p>Some other text..</p>
          </div>
          <button onclick="myFunction('Demo3')" className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right" /> My Photos</button>
          <div id="Demo3" className="w3-hide w3-container">
            <div className="w3-row-padding">
              <br />
              <div className="w3-half">
                <img src="/w3images/lights.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="/w3images/mountains.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="/w3images/forest.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="/w3images/snow.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
