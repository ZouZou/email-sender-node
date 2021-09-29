class CustomApiError extends Error {
    constructor(errorMessage) {
        super(errorMessage);
    }
}

module.exports = CustomApiError;