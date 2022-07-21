import signUpSchema from "../schemas/signUpSchema.js";

export default function sinUpSchemaValidationMiddleware(req, res, next) {

  const validation = signUpSchema.validate(req.body);
  if (validation.error) {
    return res.send(validation.error).status(422);
  }

  next();
}