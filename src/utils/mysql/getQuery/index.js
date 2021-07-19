const { dissoc } = require("ramda");
const getAllRows = require("../getAllRows");

const getQuery = async (model, where, returning = true) => {
  await model.findAll({
    where,
  });
  if (returning) {
    const response = await getAllRows(model, input[idKey]);
    return response;
  }
};

module.exports = getQuery;
