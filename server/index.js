import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// mongodb cloud atlas
const CONNECTION_URL =
  "mongodb+srv://memoriesproject:memoriesproject123@cluster0.5bgnw.mongodb.net/?retryWrites=true&w=majority";
