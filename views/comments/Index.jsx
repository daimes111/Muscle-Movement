const React = require('react')
const moment = require('moment')
const Default = require('../layout/Default')

class Index extends React.Component {
  render () {
    const { comments } = this.props
    return (
      <Default title='Muscle Movement'>
        <body>
          <ul className='comment-thread'><span className='comments-header' style={{ fontSize: '40px', textAlign: 'center' }}>Comments</span>
            {comments.map((comment) => {
              const { name, userComment, muscleGroup, _id, enjoyWorkout } = comment
              return (
                <li key={_id} className='comment'>
                  <div className='comment-heading'>
                    <span className='comment-author'>{name}</span> <br />
                    Created on: {moment().format('MMM Do YY')}
                  </div>
                  <div className='comment-body'>{userComment}
                  </div>

                  <form method='POST' action={`/comments/${_id}?_method=DELETE`}>
                    <input type='submit' value={`Delete ${name}'s comment`} />
                  </form>
                  <form method='GET' action={`/comments/${_id}/edit`}>
                    <input type='submit' value={`Update ${name}'s comment`} />
                  </form>
                </li>
              )
            })}
          </ul>
        </body>
      </Default>
    )
  }
}

module.exports = Index
