import cors, { CorsOptions } from "cors";
import express, { Express } from "express";
import dotenv from "dotenv";
import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import router from "./Routes/index.routes";

dotenv.config();
const { ALLOW_ORIGIN } = process.env;

const api: Express = express();

const opCors: CorsOptions = {
  origin: ALLOW_ORIGIN || "*",
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: [
    "Authorization",
    "X-API-KEY",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Access-Control-Allow-Request-Method",
  ],
};

api.use(cors(opCors));
api.use(urlencoded({ extended: true }));
api.use(json());
api.use(cookieParser());
api.use(
  morgan(
    '[BASE-EXPRESS] -> ":method :url status::status |[Date :date[web]] |[:response-time ms]"'
  )
);
api.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./temp",
  })
);

/**Rutas */

api.use("/api", router);

export default api;
