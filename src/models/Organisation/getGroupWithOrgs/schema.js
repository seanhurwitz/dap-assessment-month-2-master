const joi = require("joi");

const schema = joi.object({
  id: joi.number().integer().required(),
  groupId: joi.number().integer().required(),
});

module.exports = schema;
