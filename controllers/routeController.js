const express = require('express')
const router = express.Router()
const dataControler = require('./dataController')
const viewController = require('./viewController')

// index
router.get('/', dataControler.index, viewController.index)
// new
router.get('/new', viewController.newView)
// delete
router.delete('/:id', dataControler.destroy, viewController.redirectHome)
// update
router.put('/:id', dataControler.update, viewController.redirectHome)
// create
router.post('/', dataControler.create, viewController.redirectHome)
// edit
router.get('/:id/edit', dataControler.showEdit, viewController.edit)
// show
// router.get('/:id', dataControler.showEdit, viewController.redirectHome)

module.exports = router
