const React = require('react')
const Default = require('../layout/Default')

class Login extends React.Component {
  render () {
    return (
      <Default title='Login to Muscle Movement Account' pageClass='login-page'>
        <form className='form-box' action='/user/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label><br />
            <label>PASSWORD: <input type='password' name='password' required /> </label><br />
            <input type='submit' value='Login Account' />
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = Login
