const RESOURCE_PATH = '/comments'
const viewController = {
    index(req, res, next){
        res.render('comments/Index', res.locals.data)
    }, 
    newView(req, res, next){
        res.render('comments/New', res.locals.data)
    }, 
    edit(req, res, next){
        res.render('comments/Edit', res.locals.data)
    }, 
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    }

}

module.exports = viewController