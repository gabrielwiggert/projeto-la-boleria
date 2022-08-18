export function validateSchema(schema) {
  return (req, res, next) => {
    const {error} = schema.validate(req.body, {abortEarly: false});

    if (error) {
      if (error.details[0].message === '"image" must be a valid uri') {
        return res.status(422).send(error.details[0].message);
      }
      return res.status(400).send(error.details[0].message);
    }

    next();
  }
}