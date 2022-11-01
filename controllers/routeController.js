const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

// router.use((req, res, next) => {
//     if(req.session.loggedIn) {
//         next()
//     } else {
//         res.redirect("/user/login")
//     }
// })

// index
router.get('/', dataController.index, viewController.index)
// new
router.get('/new', viewController.newView)
// delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// update
router.put('/:id', dataController.update, viewController.redirectHome)
// create
router.post('/', dataController.create, viewController.redirectHome)
// edit
router.get('/:id/edit', dataController.showEdit, viewController.edit)
// show
router.get('/:id', dataController.showEdit, viewController.show)

module.exports = router
