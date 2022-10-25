const React = require('react')
const moment = require('moment')
const Default = require('../layout/Default')

class Index extends React.Component {
    render(){
        const { comments } = this.props
        return(
            <Default>
            <ul>
                {comments.map((comment) => {
                    const { name, userComment, muscleGroup, _id, enjoyWorkout } = comment
                    return(
                        <li key={_id}>
                            {name} {enjoyWorkout ? `enjoys working out ${muscleGroup} because` : `are/is not a fan of working out ${muscleGroup} because`}<br />
                            {userComment}<br />
                            Created on: {moment().format("MMM Do YY")}
                            
                            <form method="POST" action={`/comments/${_id}?_method=DELETE`}>
                                <input type="submit" value={`Delete ${name}'s comment`}/>
                            </form>
                            <form method="GET" action={`/comments/${_id}/edit`}>
                                <input type="submit" value={`Update ${name}'s comment`}/>
                            </form>
                        </li>
                    )
                })}
            </ul>
            </Default>
        )
    }
}

module.exports = Index