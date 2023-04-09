import { Request, Response } from "express";

export const test = async (req: Request, res: Response) => {
  const { params, query, body, headers } = req;
  return res.status(202).json({ status: "success", data: "Ready to Work" });
};
