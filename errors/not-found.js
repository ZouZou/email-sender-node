const { StatusCodes } = require("http-status-codes");
const { CustomApiError } = require("./custom-api-error");

class NotFound  extends CustomApiError {
    constructor(errorMessage) {
        super(errorMessage);
        this.StatusCodes = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFound;