const {
  mysql: { getFullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createSite = async (input) => {
  const { value } = await schema.validate(input);
  const dbConn = await getFullDbSchema();

  const response = await createRow(dbConn.models.Site, value);
  return response;
};

module.exports = createSite;
