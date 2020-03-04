var logout = React.createClass({
  render: function() {
    return (
      <div>
        <title>bye, Boomer</title>
        {/*?php
            session_start();
            session_unset();
            session_destroy();
            setcookie('CurrentUser', null, -1);
            setcookie('isadmin', null, -1);
            setcookie('name', null, -1);
            setcookie('email', null, -1);
            setcookie('login', null, -1);
        // remove session and session cookie
        header('location: login.html');
        
    ?*/} 
        <h1>bye, Boomer . . .</h1>
        <p>
          You are now logged out.
        </p>
        <div className="imgcontainer">
          <img src="goodbye.jpg" height={500} width={500} alt="byeBoomer" />
        </div>
        <p>
          <a href="login.html">Log in</a> again!
        </p>
      </div>
    );
  }
});