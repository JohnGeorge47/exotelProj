import express from "express";
import testController from "./Controllers/testController";
import smsController from "./Controllers/smsController";
import callController from "./Controllers/callController";
import whiteListController from "./Controllers/whiteListController";
const router = express.Router();
router.get("/test", testController.get);
router.post("/call", callController.post);
router.post("/sms", smsController.post);
router.post("/whitelist", whiteListController.post);
export default router;