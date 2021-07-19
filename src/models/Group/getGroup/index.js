const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");
const schema = require("./schema");

const getGroup = async (id) => {
  const { value } = await schema.validate(id);
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Group, value);
  return response;
};

module.exports = getGroup;
