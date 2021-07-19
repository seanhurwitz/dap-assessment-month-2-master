const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");
const { getQuery } = require("../../../utils/mysql");
const getAllRows = require("../../../utils/mysql/getAllRows");
const schema = require("./schema");

const getGroup = async (id) => {
  const { value } = await schema.validate(id);
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Group, value);
  const orgs = await getAllRows(dbConn.models.Organisation, groupId);
  return response + orgs;
};

module.exports = getGroup;
