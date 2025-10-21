import express from "express";
import { clerkWebhooks } from "../controller/UserController.js";
const userRouter = express.Router();
const rawBodyMiddleware = express.raw({ type: "application/json" });

userRouter.post("/webhooks", rawBodyMiddleware, clerkWebhooks);

export default userRouter;
