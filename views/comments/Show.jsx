const React = require('react')
const Default = require('../layout/Default')

class Show extends React.Component {
  render () {
    const { name, userComment, enjoyWorkout, muscleGroup, _id } = this.props.comment
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName}'s Comment`} pageClass='show-page'>
        <div className='form-box'>
          <h2>{name} {enjoyWorkout == true ? `likes to workout ${muscleGroup}. Why?` : `doesn't like to work out ${muscleGroup}. Why not?`}</h2>
          <h1>{userComment}</h1>
          <form className='btns' method='POST' action={`/comments/${_id}?_method=DELETE`}>
            <input type='submit' value={`Delete ${name}'s comment`} />
          </form>
          <form className='btns' method='GET' action={`/comments/${_id}/edit`}>
            <input type='submit' value={`Update ${name}'s comment`} />
          </form>

        </div>

      </Default>
    )
  }
}

module.exports = Show
