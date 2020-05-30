module.exports.handler = async (event, context) => {
  const unixTime = Math.floor(Date.now() / 1000);
  return {
    statusCode: 200,
    body: `The Unix time is ${unixTime}`,
  };
};
