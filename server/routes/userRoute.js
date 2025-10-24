import express from "express";
import { clerkWebhooks, paymentRazorpay, userCredit, verifyRazorpay } from "../controller/UserController.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router();
const rawBodyMiddleware = express.raw({ type: "application/json" });

userRouter.post("/webhooks", rawBodyMiddleware, clerkWebhooks);
userRouter.get("/credits", authUser, userCredit);
userRouter.post("/pay-razor",authUser,paymentRazorpay)
userRouter.post("/verify-razor",verifyRazorpay)

export default userRouter;
