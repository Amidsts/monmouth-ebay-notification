module.exports = {
    ALGORITHM: 'ssl3-sha1',
    AUTHORIZATION: 'Authorization',
    BASE64: 'base64',
    BEARER: 'bearer ',
    ENVIRONMENT: {
        SANDBOX: 'SANDBOX',
        PRODUCTION: 'PRODUCTION'
    },
    HEADERS: {
        APPLICATION_JSON: 'application/json'
    },
    HEX: 'hex',
    HTTP_STATUS_CODE: {
        NO_CONTENT: 204,
        OK: 200,
        PRECONDITION_FAILED: 412,
        INTERNAL_SERVER_ERROR: 500
    },
    KEY_END: '-----END PUBLIC KEY-----',
    KEY_PATTERN_END: /-----END PUBLIC KEY-----/,
    KEY_PATTERN_START: /-----BEGIN PUBLIC KEY-----/,
    KEY_START: '-----BEGIN PUBLIC KEY-----',
    NOTIFICATION_API_ENDPOINT_PRODUCTION: 'https://api.ebay.com/commerce/notification/v1/public_key/',
    NOTIFICATION_API_ENDPOINT_SANDBOX: 'https://api.sandbox.ebay.com/commerce/notification/v1/public_key/',
    SHA256: 'sha256',
    TOPICS: {
        MARKETPLACE_ACCOUNT_DELETION: 'MARKETPLACE_ACCOUNT_DELETION'
    },
    X_EBAY_SIGNATURE: 'x-ebay-signature'
};