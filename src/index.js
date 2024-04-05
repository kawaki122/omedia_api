const db = require("./config/db");
const app = require("./app");
const logger = require("./config/logger");

db
  .sync()
  .then(() => {
    logger.info("Synced db starting the server...");
    const port = process.env.PORT;
    app.listen(port, () => logger.info(`Server listening on port ${port}`));
  })
  .catch((err) => {
    logger.info("Failed to sync db: " + err.message);
  });
