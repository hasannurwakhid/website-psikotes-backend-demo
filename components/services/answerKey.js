const { udpateAnswerKeyById } = require("../repositories/answerKeys");

exports.udpateAnswerKeyById = async (id, payload) => {
  const data = await udpateAnswerKeyById(id, payload);
  if (data[0] === 0) {
    const error = new Error("Data tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }
  return data[1]
};
