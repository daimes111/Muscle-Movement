const React = require('react')
const Default = require('../layout/Default')

class New extends React.Component {
    render(){
        return(
            <Default>
                <form method="POST" action="/comments">
                    <input type="text" name= "name" placeholder='Name Here'/><br />
                    <textarea rows="8" cols="25" name= "userComment" placeholder='Enter comment here'/><br />
                    <label htmlFor="muscleGroup">Choose a Muscle Group: </label>
                    <select name="muscleGroup" id="muscleGroup">
                        <option value="Adductors">Adductors</option>
                        <option value="Calves">Calves</option>
                        <option value="Hamstrings">Hamstrings</option>
                        <option value="Glutes">Glutes</option>
                        <option value="Quads">Quads</option>
                    </select><br />
                    Enjoy working out this Muscle Group?: <input type="checkbox" name="enjoyWorkout" value="true" defaultChecked={true}/><br />
                    <input type="submit" value="Add Comment" />
                </form>
            </Default>
        )
    }
}

module.exports = New