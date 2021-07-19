const joi = require("joi");

const schema = joi.object({
  id: joi.number().integer().required(),
  orgId: joi.number().integer().required(),
  name: joi.string().required(),
  location: joi.array().items(
    joi.object({
      lat: joi.number().required(),
      long: joi.number().required(),
    })
  ),
});

module.exports = schema;
