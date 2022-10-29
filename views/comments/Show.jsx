const React = require('react')
const Default = require('../layout/Default')

class Show extends React.Component {
  render () {
    const { name, userComment, _id } = this.props.comment
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName}'s Comment`}>
        <body>
        <p className='test'>Hello Nando!</p>
        {/* <p className='card'>{capName} is {color</p> */}
        </body>
      </Default>
    )
  }
}

module.exports = Show