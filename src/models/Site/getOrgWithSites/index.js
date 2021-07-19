const {
  mysql: { getFullDbSchema, getAllRows },
} = require("../../../utils");
const { getOrgsandSites } = require("../../../utils/mysql");

const getOrgWithSites = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await getOrgsandSites(dbConn.models.Site, value);
  return response;
};

module.exports = getOrgWithSites;
