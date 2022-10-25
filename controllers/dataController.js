const { rawListeners } = require('../models/comment')
const Comment = require('../models/comment')
const dataControler = {
    index(req, res, next){
        Comment.find({}, (err, allComments) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comments = allComments
                next()
            }
        })
    }, 
    destroy(req, res, next){
        Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = deletedComment
                next()
            }
        })
    }, 
    update(req, res, next){
        req.body.enjoyWorkout = req.body.enjoyWorkout === 'true' || req.body.enjoyWorkout === 'on' ? true : false
        Comment.findByIdAndUpdate(req.params.id, (err, updatedComment) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = updatedComment
                next()
            }
        })
    },
    create(req, res, next){
        req.body.enjoyWorkout = req.body.enjoyWorkout === 'true' || req.body.enjoyWorkout === 'on' ? true : false
        Comment.create(req.body, (err, createdComment) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = createdComment
                next()
            }
        })
    }, 
    showEdit(req, res, next){
        Comment.findById(req.params.id, (err, foundComment) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = foundComment
                next()
            }
        })
    }
}

module.exports = dataControler