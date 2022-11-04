const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

const commentSchema = new mongoose.Schema({
  name: { type: String, require: true },
  userComment: { type: String, require: true },
  muscleGroup: { type: String, require: true },
  enjoyWorkout: Boolean
  // slug: { type: String, require: true, unique: true}
}, { timestamps: true })

// commentSchema.pre('validate', function(next) {
//   if (this.title) {
//     this.slug = slugify(this.title, { lower: true, strict: true })
//   }
//   next()
// })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
