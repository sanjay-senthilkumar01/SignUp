import './App.css';
function App() {
  return(
  <div className="Frame4">
  <img className="BackgroundImage2" src="Images\background images\background image2.png" alt="BackgroundImage"/>
  <div className="SignUpFrame1"/>
  <div className="SignUpFrame2"/>
  <div className="Inverse">
    <span className="SpanInverse">inverse</span>
    <span className="SpanDot2" >.</span>
    </div>
  <img className="Logo"  src="Images\logo.png" alt ="Logo"/>
  <div className="SignUp">
    <span className="SpanSignUp">sign up</span>
    <span className="SpanDot1" >.</span>
    </div>
  <div className="InverseQuote">inverse is much better when<br/>you have an account.</div>
  <input className="NameText" type="text" id="name" name="name" required=""placeholder="NAME"/>
  <input className="MailIdText" type="text" id="mailid" name="mailid" required=""placeholder="MAIL ID"/>
  <input className="UsernameText" type="text" id="username" name="username" required=""placeholder="USERNAME"/>
  <input className="PasswordText" type="password" id="password" name="password" required=""placeholder="PASSWORD"/>
  <input className="ConfirmPasswordText" type="password" id="confirmpassword" name="confirmpassword" required=""placeholder="CONFIRM PASSWORD"/>
  <div className="AgreeTerms">By Signing in I agree with terms and conditions</div>
  <input type="checkbox" className="TickBox" id="termsandconditions" name="termsandconditions" required=""value="Agree"/>
  <button className="SignUpButton"><b>sign up</b></button>
  <a href="#LoginPage" className="LogInButton">log in</a>
  <div className="Or">or</div>
  <div className="Hello">
    <span className="SpanHello">Hello</span>
    <span className="SpanEx">!</span>
    </div>
  <a href="#BackPage" className="Back">back</a>
</div>
  );
}

export default App;
