const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

const auth = (req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/login')
  }
}
// use this if you want to on individual

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
router.get('/new', auth, viewController.newView)
// delete
router.delete('/:id', auth, dataController.destroy, viewController.redirectHome)
// update
router.put('/:id', auth, dataController.update, viewController.redirectHome)
// create
router.post('/', auth, dataController.create, viewController.redirectHome)
// edit
router.get('/:id/edit', auth, dataController.showEdit, viewController.edit)
// show
router.get('/:id', dataController.showEdit, viewController.show)

module.exports = router
