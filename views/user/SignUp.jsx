const React = require('react')
const Default = require('../layout/Default')

class SignUp extends React.Component {
  render () {
    return (
      <Default title='Sign Up For Muscle Movement' pageClass="signup-page">
        <form className="form-box" action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /></label><br />
            <label>PASSWORD: <input type='text' name='password' required /></label><br />
            <input type='submit' value='Create Account' /><br />
            Already have an account?: <a href="/user/login"> Login!</a>
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = SignUp
