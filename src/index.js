import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server starts running on port ${PORT}`));
