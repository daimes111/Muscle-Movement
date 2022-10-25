const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: { type: String, require: true },
    userComment: { type: String, require: true },
    muscleGroup: { type: String, require: true },
    enjoyWorkout: Boolean
}, { timestamps: true } )

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment