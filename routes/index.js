import express from "express"
import { Router } from "express"
import {register,login} from "../controllers/userController.js"

const router=Router()
console.log(router)
router.route("/home").get(register);
router.route("/login").post(login)
export default router;