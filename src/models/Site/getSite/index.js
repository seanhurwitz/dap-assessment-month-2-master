const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");
const schema = require("./schema");

const getSite = async (id) => {
  const { value } = await schema.validate(id);
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Site, value);
  return response;
};

module.exports = getSite;
