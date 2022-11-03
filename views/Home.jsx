const React = require('react')
const Default = require('./layout/Default')

class Home extends React.Component {
  render () {
    return (
      <Default title='Home Page'>
        <a href='/user/signup'><button>SingUp</button></a>
        <a href='/user/login'><button>Login</button></a>
      </Default>
    )
  }
}

module.exports = Home
