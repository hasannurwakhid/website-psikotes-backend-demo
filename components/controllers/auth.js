const { register, login } = require("../services/auth");

exports.register = async (req, res, next) => {
  try {
    const { nik, name, email, phoneNumber, password } = req.body;

    const image = req?.files?.photo;

    if (nik == "" || !nik) {
      return next({
        message: "NIK harus diisi!",
        statusCode: 400,
      });
    }
    if (name == "" || !name) {
      return next({
        message: "Name harus diisi!",
        statusCode: 400,
      });
    }
    if (email == "" || !email) {
      return next({
        message: "Email harus diisi!",
        statusCode: 400,
      });
    }
    if (phoneNumber == "" || !phoneNumber) {
      return next({
        message: "Phone Number harus diisi!",
        statusCode: 400,
      });
    }
    if (password == "" || !password) {
      return next({
        message: "Password harus diisi!",
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

exports.login = async (req, res, next) => {
  try {
    const { nik, password } = req.body;
    if (nik == "" || !nik) {
      return next({
        message: "NIK harus diisi!",
        statusCode: 400,
      });
    }
    if (password == "" || !password) {
      return next({
        message: "Password harus diisi!",
        statusCode: 400,
      });
    }

    const data = await login({ nik, password });

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.profile = async (req, res, next) => {
  try {
    // get user by id
    const data = req.user;

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
