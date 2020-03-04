var homepage = React.createClass({
  render: function() {
    return (
      <div>
        <title>OkBoomer</title>
        <meta charSet="utf-8" />
        <style dangerouslySetInnerHTML={{__html: "\n    /* Remove the navbar's default rounded borders and increase the bottom margin */ \n    .navbar {\n      margin-bottom: 50px;\n      border-radius: 0;\n      vertical-align: middle;\n    }\n    \n    /* Remove the jumbotron's default bottom margin */ \n     .jumbotron {\n      background-color: #fff3e6;\n      margin-bottom: 0;\n    }\n   \n    /* Add a gray background color and some padding to the footer */\n    footer {\n      background-color: #fff3e6;\n      padding: 25px;\n    }\n    .padding{\n        padding-top: 10px; }\n  " }} />
        <div className="jumbotron">
          <div className="container text-center">
            <h1>okBoomer</h1>      
          </div>
        </div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />                        
              </button>
              <a className="navbar-brand" href="homepage.html">
                <img src="helloboomer.jpg" alt="helloboomer" height={200} width={200} style={{position: 'relative', top: '-13px'}} />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="login.html">Login?</a></li>
                <li className="padding">
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="create_account.html">Create a new account?</a></li>
                      <li className="padding">
                        <form action="homepage.html" method="post">
                          <input type="text" defaultValue />
                          <button type="submit" name="submit">Search for boomers</button>
                        </form>
                      </li>
                    </ul></div>
                </li></ul></div>
          </div></nav>
        <h2>
          hi, Boomer!
        </h2>
        <footer className="container-fluid text-center">
          <p> okBoomer 2020 </p>  
        </footer>
      </div>
    );
  }
});