const {
  mysql: { getFullDbSchema, getAllRows },
} = require("../../../utils");
const { getOrgsandSites } = require("../../../utils/mysql");

const getGroupWithOrgs = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await getOrgsandSites(dbConn.models.Organisation, value);
  return response;
};

module.exports = getGroupWithOrgs;
