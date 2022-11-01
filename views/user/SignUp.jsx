const React = require('react')
const Default = require('../layout/Default')

class SignUp extends React.Component {
  render () {
    return (
      <Default title='Sign Up For Muscle Movement'>
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /></label>
            <label>PASSWORD: <input type='text' name='password' required /></label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = SignUp
