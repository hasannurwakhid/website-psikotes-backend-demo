const {
  calculateTotalPoint,
  getAveragePesertaPoints,
} = require("../services/totalPoint");

exports.calculateTotalPoint = async (req, res, next) => {
  try {
    const userId = req?.user?.id;
    const data = await calculateTotalPoint(userId);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAveragePesertaPoints = async (req, res, next) => {
  try {
    const data = await getAveragePesertaPoints();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
