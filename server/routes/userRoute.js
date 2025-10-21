import express from "express";
import { clerkWebhooks } from "../controller/UserController.js";
const userRouter = express.Router();
const rawBodyMiddleware = express.raw({ type: "application/json" });
console.log("hhhhhhh");
// const userRoutes = async (req, res) => {
//   console.log("Umang");
//   try {
//     userRouter.post("/webhooks", rawBodyMiddleware, clerkWebhooks);
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

userRouter.post("/webhooks", rawBodyMiddleware, clerkWebhooks);

export default userRouter;
