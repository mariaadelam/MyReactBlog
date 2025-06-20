import express, {Request, Response} from "express";
import {Contact} from "../types/Contact";
import * as contactModel from "../models/contact";


import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
const contactRouter = express.Router();


contactRouter.get("/", async (req: Request, res: Response) => {
  contactModel.findAll((err: Error, messages: Contact[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": messages});
  });
});

export {contactRouter};