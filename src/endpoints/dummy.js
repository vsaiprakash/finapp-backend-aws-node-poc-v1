

module.exports.dummy = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Dummy endpoint",
          input: event,
        },
        null,
        2
      ),
    };
  };