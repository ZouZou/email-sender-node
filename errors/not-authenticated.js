const { StatusCodes } = require("http-status-codes");
const { CustomApiError } = require("./custom-api-error");

class NotAuthenticated  extends CustomApiError {
    constructor(errorMessage) {
        super(errorMessage);
        this.StatusCodes = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = NotAuthenticated;