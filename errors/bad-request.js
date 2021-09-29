const { StatusCodes } = require("http-status-codes");
const { CustomApiError } = require("./custom-api-error");

class BadRequest  extends CustomApiError {
    constructor(errorMessage) {
        super(errorMessage);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;