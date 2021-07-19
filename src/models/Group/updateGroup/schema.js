const joi = require("joi");

const schema = joi.object({
  id: joi.number().integer().required(),
  name: joi.string().required(),
});

module.exports = schema;
