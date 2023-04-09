import { test } from "../Controllers/TestController";
import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/test", test);

export default router;
