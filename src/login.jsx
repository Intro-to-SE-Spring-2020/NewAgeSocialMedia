var login = React.createClass({
  render: function() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\nform {border: 3px solid #f1f1f1;}\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n    .error {\n     color: #FF0000;\n  }\n}\n" }} />
        <h2>Login Form</h2>
        <form action="login.html" method="post">
          <div className="imgcontainer">
            <img src="okboomer.jpg" height={200} width={300} alt="okboomer" />
          </div>
          <div className="container">
            <label htmlFor="username"><b>BoomerName: </b></label>
            <input type="text" defaultValue name="username" required />
            <label htmlFor="password"><b>Password: </b></label>
            <input type="password" defaultValue name="password" required />
            <button type="submit" name="submit">okLogin!</button>
          </div>
          <div className="container" style={{backgroundColor: '#fff3e6'}}>
            <button type="button" className="cancelbtn" onclick="location.href='home_page.html';">Cancel</button>
            <span className="password"><a href="create_account.html"> Don't have an account?</a></span>
          </div>
        </form>
      </div>
    );
  }
});