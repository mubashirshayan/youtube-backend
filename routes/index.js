import express from "express"
import { Router } from "express"
import register from "../controllers/userController.js"
const router=Router()
console.log(router)
router.route("/home").get(register);
export default router;