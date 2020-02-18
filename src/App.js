import React, { Component } from 'react';
import './App.css'
import Accordion from './components/accordion'
import Alerts from './components/alerts'
import Biography from './components/biography'
import FriendRequest from './components/friendRequest'
import Interests from './components/interests'
import NavBar from './components/navBar'
import NavBarSmall from './components/navBarSmall'
import NewPost from './components/newPost'
import Posted from './components/posted'
import Footer from './components/footer'

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
              <Accordion></Accordion>
              <br/>
              <Interests></Interests>
              <br/>
              <Alerts></Alerts>
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

        {/*Footer*/}
        <div className="w3-bottom">
        <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
