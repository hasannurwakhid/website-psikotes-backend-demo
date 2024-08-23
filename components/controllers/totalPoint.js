const {
  calculateTotalPoint,
  getAveragePesertaPoints,
} = require("../services/totalPoint");

exports.manualSubmit = async (req, res, next) => {
  try {
    const userId = req?.user?.id;
    let message = "Success";

    const data = await calculateTotalPoint(userId);

    if (
      req?.user?.isDone === true ||
      (req?.user?.timeToEnd && new Date() >= new Date(req?.user?.timeToEnd))
    ) {
      message = "Pengguna sudah mensubmit atau waktu telah habis";
    }

    res.status(200).json({
      message,
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
