import express, {Request, Response} from "express";
import {Contact} from "../types/Contact";
import * as contactModel from "../models/contact";

export const contactRouter = express.Router();


contactRouter.get("/messages", async (req: Request, res: Response) => {
  contactModel.findAllMessages((err: Error, messages: Contact[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": messages});
  });
});