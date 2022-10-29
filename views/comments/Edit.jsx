const React = require('react')
const Default = require('../layout/Default')

class Edit extends React.Component {
  render () {
    const { name, userComment, muscleGroup, enjoyWorkout, _id } = this.props.comment
    return (
      <Default pageClass='edit-page' title={`Edit ${name}'s Comment`}>
        <form className='form-box' method='POST' action={`/comments/${_id}?_method=PUT`}>
          Edit name: <input type='text' name='name' defaultValue={name} /><br />
          Edit comment: <textarea name='userComment' cols='25' rows='8' defaultValue={userComment} /><br />
          Edit muscle group:  <select name='muscleGroup' id='muscleGroup' defaultValue={muscleGroup}>
            <option value='Adductors'>Adductors</option>
            <option value='Calves'>Calves</option>
            <option value='Hamstrings'>Hamstrings</option>
            <option value='Glutes'>Glutes</option>
            <option value='Quads'>Quads</option>
          </select><br />
          Enjoy working out this Muscle Group?: <input type='checkbox' name='enjoyWorkout' value='true' defaultChecked={enjoyWorkout} /><br />
          <input type='submit' value='Update Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
