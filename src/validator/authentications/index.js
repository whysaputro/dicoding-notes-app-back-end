const {
  PostAuthenticationPayloadSchema,
  PutAuthenticationPayloadSchema,
  DeleteAuthenticationPayloadSchema,
} = require('./schema');

const InvatriantError = require('../../exceptions/InvariantError');

const AuthenticationsValidator = {
  validatePostAuthenticationPayload: (payload) => {
    const validationResult = PostAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvatriantError(validationResult.error.message);
    }
  },

  validatePutAuthenticationPayload: (payload) => {
    const validationResult = PutAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvatriantError(validationResult.error.message);
    }
  },

  validateDeleteAuthenticationPayload: (payload) => {
    const validationResult =
      DeleteAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvatriantError(validationResult.error.message);
    }
  },
};

module.exports = AuthenticationsValidator;
