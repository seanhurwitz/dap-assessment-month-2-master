const joi = require("joi");

const schema = joi.object({
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
