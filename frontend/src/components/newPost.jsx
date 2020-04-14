import React, { Component } from 'react'
import PostItems from "./postItems";

export default class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    items: []
  };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this._inputElement.value = "";
  }
  console.log(this.state.items);
  e.preventDefault();
  }

  render() {
    return (
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} class="w3-input w3-border" placeholder="What's on your mind, Boomer?"></input>
                <p>
                <button type="Submit" className="w3-button w3-theme"><i className="fa fa-pencil" /> &nbsp;Post</button>
                </p>
              </form>
            </div>
          </div>
          <PostItems entries={this.state.items}/>
        </div>
      </div>
    )
  }
}
