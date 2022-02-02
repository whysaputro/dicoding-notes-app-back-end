const ExportPayloadSchema = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const ExportPayloadValidator = {
  validateExportPayload: (payload) => {
    const validationResult = ExportPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ExportPayloadValidator;
