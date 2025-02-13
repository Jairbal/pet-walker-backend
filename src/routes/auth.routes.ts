import { login, refreshToken, register } from "../controllers/auth.controller";

import { Router } from "express";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);

export default router;
