const {
  mysql: { getFullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateGroup = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();

  const response = await updateRow(dbConn.models.Group, value);
  return response;
};

module.exports = updateGroup;
