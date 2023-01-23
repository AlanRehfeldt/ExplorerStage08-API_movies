const { Router } = require("express")
const TagsController = require("../controllers/tagsController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const tagsRouter = Router()
const tagsController = new TagsController()

tagsRouter.use(ensureAuthenticated)

tagsRouter.get("/", tagsController.index)

module.exports = tagsRouter