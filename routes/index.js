import express from "express"
import { Router } from "express"
const router=Router()
console.log(router)
router.route("/home").get()
export default router;