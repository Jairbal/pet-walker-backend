import { Request, Response } from "express";

import AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await AuthService.login(req.body);
    res.status(200).json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const newToken = await AuthService.refreshToken(req.body.refreshToken);
    res.status(200).json(newToken);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
