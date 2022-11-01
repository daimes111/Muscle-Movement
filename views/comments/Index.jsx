const React = require('react')
const moment = require('moment')
const Default = require('../layout/Default')

class Index extends React.Component {
  render () {
    const { comments } = this.props
    return (
      <Default pageClass='index-page'>
        <div className='comments'>
          <h1 className='comments-header' style={{ fontSize: '60px' }}>User Comments</h1>
          <ul className='comment-thread'>
            {comments.map((comment) => {
              const { name, userComment, muscleGroup, _id, slug, enjoyWorkout } = comment
              return (
                <li key={_id} className='comment'>
                  <div className='comment-heading'>
                    <span className='comment-author'>{name}</span> <br />
                    <span className='group-header'>Muscle Group: </span>{muscleGroup} <br />
                    Created on: {moment().format('MMM Do YY')}
                  </div>
                  <div className='comment-body'>{userComment}
                  </div>

                  <form method='GET' action={`/comments/${_id}`}>
                    <input type='submit' value='View Comment' />
                  </form>

                </li>
              )
            })}
          </ul>
        </div>
      </Default>
    )
  }
}

module.exports = Index
