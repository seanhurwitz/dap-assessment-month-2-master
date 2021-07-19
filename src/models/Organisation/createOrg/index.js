const {
  mysql: { getFullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createOrg = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await createRow(dbConn.models.Organisation, value);
  return response;
};

module.exports = createOrg;
