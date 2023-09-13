const { constants } = require("../constants"); 

// Custom error handling middleware function
const errorHandler = (err, req, res, next) => {
    // Determine the HTTP status code to be sent in the response
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Handle different error cases based on the status code
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            // Response for validation errors
            res.json({
                title: "Validation Failed", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            // Response for unauthorized access errors
            res.json({ 
                title: "Unauthorized", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN: 
            // Response for forbidden access errors
            res.json({
                title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND: 
            // Response for resource not found errors
            res.json({
                title: "Not Found", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR: 
            // Response for internal server errors
            res.json({
                title: "Server error", 
                message: err.message, 
                stackTrace: err.stack
            });    
        default:
            // Handle any other cases with a log message
            console.log("What other error");
            break; 
    } 
};

module.exports = errorHandler;
