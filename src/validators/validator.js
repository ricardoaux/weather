
const {Joi} = require('express-validation')

const webHookValidation = Joi.object({
    url: Joi.string()
        .uri()
        .required(),
    city: Joi.string()
        .regex(/[a-zA-Z]{3,50}/)
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.base': `"city" should be a type of 'string'`,
            'string.empty': `"city" cannot be an empty field`,
            'string.min': `"city" should have a minimum length of {#limit}`,
            'string.max': `"city" should have a maximum length of {#limit}`,
            'any.required': `"city" is a required field`
        }),
    threshold: Joi.number()
        .max(100)
        .min(-100)
        .required()
        .messages({
            'integer.base': `"threshold" should be a type of 'integer'`,
            'integer.empty': `"threshold" cannot be an empty field`,
            'integer.min': `"threshold" should have a minimum value of {#limit}`,
            'integer.max': `"threshold" should have a maximum value of {#limit}`,
            'any.required': `"threshold" is a required field`
        })
})

const validationOptions = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
};

module.exports = {webHookValidation, validationOptions}