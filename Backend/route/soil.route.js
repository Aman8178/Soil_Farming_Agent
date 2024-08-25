import express from "express";

import { getSoil } from "../contoller/soil.controller.js";

const router=express.Router()

router.get("/", getSoil);

export default router;