const {
  mysql: { getFullDbSchema, getAllRows },
} = require("../../../utils");

const getAllGroups = async () => {
  const dbConn = await getFullDbSchema();
  const response = await getAllRows(dbConn.models.Site);
  return response;
};

module.exports = getAllGroups;
