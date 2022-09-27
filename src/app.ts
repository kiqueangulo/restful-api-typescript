import config from "config";

import createServer from "./utils/server";
import connectDB from "./utils/connectDB";
import logger from "./utils/logger";

const app = createServer();

const port = config.get<number>("port");
app.listen(port, async () => {
  logger.info(`App running at http://localhost:${port}`);

  await connectDB();
});
