var createAccount = React.createClass({
  render: function() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\nform {border: 3px solid #f1f1f1;}\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n    .error {\n     color: #FF0000;\n  }\n}\n" }} />
        <h2>Create a new account . . .</h2>
        <form action="create_account.html" method="post">
          <div className="imgcontainer">
            <img src="okboomer.jpg" height={200} width={200} alt="okboomer" />
          </div>
          {/*INSERT INTO users (name, username, password, email)
VALUES('$name', '$username', '$token', '$email'");
header('location: login.html');*/}
          <p />
          <label htmlFor="surname"><b>Enter your name: </b></label>
          <input type="text" defaultValue name="surname" required /> 
          <label htmlFor="username"><b>Enter your desired username: </b></label>
          <input type="text" defaultValue name="username" required />
          <label htmlFor="uemail"><b>Enter your email: </b></label>
          <input type="text" defaultValue name="uemail" required />
          <label htmlFor="password"><b>Create a password: </b></label>
          <input type="password" defaultValue name="password" required />
          <label htmlFor="cpsw"><b>Type your password again: </b></label>
          <input type="password" defaultValue name="cpsw" required />
          <button type="submit" name="submit">Create Account NOW!</button>
          <div className="container" style={{backgroundColor: '#fff3e6'}}>
            <button type="button" className="cancelbtn" onclick="location.href = 'homepage.html';">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
});