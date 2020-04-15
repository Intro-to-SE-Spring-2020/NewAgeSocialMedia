import React, { Component } from 'react'
import PostItems from "./postItems" // import the PostItems class to add to its functionality

// Create a new component
export default class NewPost extends Component {

  // Construct a new prop for item array
  constructor(props) {
    super(props);
    this.state = {
    items: []
  };
    this.addItem = this.addItem.bind(this);
  }

  // Add an item to the item array with new post information
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

  // Render the component
  render() {

    return (

      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">

              {/* Create input box for user to write a post/boom */}
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} class="w3-input w3-border" placeholder="What's on your mind, Boomer?"></input>
                <p>
                <button type="Submit" className="w3-button w3-theme"><i className="fa fa-pencil" /> &nbsp;Post</button>
                </p>
              </form>
            </div>
          </div>

          {/*  Add the new post/boom entries */}
          <PostItems entries={this.state.items}/>
        </div>
      </div>
    )
  }
}
