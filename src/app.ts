import express from "express";
import config from "config";
import connectDB from "./utils/connectDB";
import logger from "./utils/logger";
import routes from "./routes";

const app = express();

app.use(express.json());

const port = config.get<number>("port");
app.listen(port, async () => {
  logger.info(`App running at http://localhost:${port}`);

  await connectDB();

  routes(app);
});
