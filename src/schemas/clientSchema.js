import joi from 'joi';

const clientSchema = joi.object({
  name: joi.string().required(),
  address: joi.string().required(),
  phone: joi.string().regex(/^\d{10}(?:\d{1})?$/).required()
});

export default clientSchema;