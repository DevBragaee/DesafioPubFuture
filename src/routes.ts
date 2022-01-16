import { Router } from "express"
//import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateAccountController } from "./controllers/CreateAccountController"
//import { ListUsersController } from "./controllers/ListUsersController"
//import { ensureAdmin } from "./middlewares/ensureAdmin"
//import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router()
const createAccountController = new CreateAccountController()
//const authenticateUserController = new AuthenticateUserController()
//const listUsersController = new ListUsersController()

router.post("/account", createAccountController.handle)
//router.post("/login", authenticateUserController.handle)
//router.get("/users", ensureAuthenticated, listUsersController.handle)

export { router }