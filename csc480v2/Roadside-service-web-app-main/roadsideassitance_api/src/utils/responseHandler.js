class ResponseHandler {
    static success(res, statusCode, message, data = null) {
      const response = { message };
      if (data) response.data = data;
      res.status(statusCode).json(response);
    }
  
    static error(res, statusCode, message) {
      res.status(statusCode).json({ message });
    }
  }
  
  module.exports = ResponseHandler;
  