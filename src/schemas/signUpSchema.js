import joi from 'joi';

const signUpSchema = joi.object({
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().required().valid(joi.ref('password')),
  birthDate: joi.string().pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/).required()
});


export default signUpSchema;