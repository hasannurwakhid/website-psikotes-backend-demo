const { register } = require("../services/auth");

exports.register = async (req, res, next) => {
  try {
    const { nik, name, email, phoneNumber, password } = req.body;

    const image = req?.files?.photo;

    if (nik == "" || !nik) {
      return next({
        message: "NIK must be filled!",
        statusCode: 400,
      });
    }
    if (name == "" || !name) {
      return next({
        message: "Name must be filled!",
        statusCode: 400,
      });
    }
    if (email == "" || !email) {
      return next({
        message: "Email must be filled!",
        statusCode: 400,
      });
    }
    if (phoneNumber == "" || !phoneNumber) {
      return next({
        message: "Phone Number must be filled!",
        statusCode: 400,
      });
    }
    if (password == "" || !password) {
      return next({
        message: "Password must be filled!",
        statusCode: 400,
      });
    }

    const data = await register({
      nik,
      name,
      email,
      phoneNumber,
      password,
      image,
      role: "peserta",
    });

    res.status(200).json({
      message: "Register Berhasil",
      data,
    });
  } catch (error) {
    next(error);
  }
};
