const {
  mysql: { getFullDbSchema, getAllRows, getRow, getQuery },
} = require("../../../utils");

const getOrgWithSites = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Organisation, value);
  const orgId = value;
  const sites = await getQuery(dbConn.models.Site, orgId);
  return response + sites;
};

module.exports = getOrgWithSites;
