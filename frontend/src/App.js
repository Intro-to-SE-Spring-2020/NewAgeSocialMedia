// Import all of the components to create the whole page
import React, { Component } from 'react';
import './App.css'
import Biography from './components/biography'
import FriendRequest from './components/friendRequest'
import Interests from './components/interests'
import MoreInfo from './components/moreInfo'
import NavBar from './components/navBar'
import NewPost from './components/newPost'
import Posted from './components/posted'

// Create the class
class App extends Component {

  render() {

    return (

      <div>
        {/*Navigation Bar*/}
        <div className="w3-top">
        <NavBar></NavBar>
        </div>

        {/*Page Container*/}
        <div className="w3-container w3-content" style={{maxWidth: '1400px', marginTop: '80px'}}>
          {/*The Grid*/}
          <div className="w3-row">
            {/*Left Column*/}
            <div className="w3-col m3">
              <Biography></Biography>
              <br/>
              <MoreInfo></MoreInfo>
              <br/>
              <Interests></Interests>
            </div>

            {/*Middle Column*/}
            <div className="w3-col m7">
              <NewPost></NewPost>
              <Posted></Posted>
            </div>

            {/*Right column*/}
            <div className="w3-col m2">
            <FriendRequest></FriendRequest>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
