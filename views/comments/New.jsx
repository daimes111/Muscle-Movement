const React = require('react')
const Default = require('../layout/Default')

class New extends React.Component {
  render () {
    return (
      <Default pageClass='new-page' title='Add New Comment'>

        <form className='form-box' method='POST' action='/comments'>
          <input type='text' name='name' placeholder='Name Here' /><br />
          <textarea rows='8' cols='25' name='userComment' placeholder='Enter reasoning here' /><br />
          <label htmlFor='muscleGroup'>Choose a Muscle Group: </label>
          <select name='muscleGroup' id='muscleGroup'>
            <option value='Biceps'>Biceps</option>
            <option value='Deltoids'>Deltoids</option>
            <option value='Forearms'>Forearms</option>
            <option value='Triceps'>Triceps</option>
            <option value='Trapzius'>Trapzius</option>
            <option value='Lats'>Lats</option>
            <option value='Abs'>Abs</option>
            <option value='Obliques'>Obliques</option>
            <option value='Pectorals'>Pectorals</option>
            <option value='Adductors'>Adductors</option>
            <option value='Calves'>Calves</option>
            <option value='Hamstrings'>Hamstrings</option>
            <option value='Glutes'>Glutes</option>
            <option value='Quads'>Quads</option>
          </select><br />
          Enjoy working out this Muscle Group?: <input type='checkbox' name='enjoyWorkout' value='true' defaultChecked /><br />
          <input type='submit' value='Add Comment' />
        </form>

      </Default>
    )
  }
}

module.exports = New
