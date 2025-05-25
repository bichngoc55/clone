exports.lambdaHandler = async (event, context) => {
  try {
    // Tạo lỗi để trigger rollback
    throw new Error("SIMULATED ERROR FOR ROLLBACK TEST!");

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World VERSION 2 - BROKEN!",
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: err.message,
      }),
    };
  }
};
