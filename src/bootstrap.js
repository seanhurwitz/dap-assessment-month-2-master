const {
  mysql: { getFullDbSchema },
} = require("./utils");

getFullDbSchema(true);
