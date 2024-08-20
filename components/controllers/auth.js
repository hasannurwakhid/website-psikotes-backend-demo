const {
  register,
  adminRegister,
  loginPeserta,
  loginAdmin,
  getUsersByRole,
  deleteUserById,
  profile,
  updateUserById,
} = require("../services/auth");

exports.registerPeserta = async (req, res, next) => {
  try {
    const { nik, name, email, phoneNumber, password } = req.body;

    const image = req?.files?.image;

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
      isDone: false,
      totalPoint: 0,
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

exports.adminRegister = async (req, res, next) => {
  try {
    const { nip, name, email, phoneNumber, password } = req.body;

    const image = req?.files?.image;

    if (nip == "" || !nip) {
      return next({
        message: "nip harus diisi!",
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

    const data = await adminRegister({
      nip,
      name,
      email,
      phoneNumber,
      password,
      image,
      isDone: false,
      totalPoint: 0,
      role: "admin",
    });

    res.status(200).json({
      message: "Register Admin Berhasil",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.loginPeserta = async (req, res, next) => {
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

    const data = await loginPeserta({ nik, password });

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.loginAdmin = async (req, res, next) => {
  try {
    const { nip, password } = req.body;
    if (nip == "" || !nip) {
      return next({
        message: "NIP harus diisi!",
        statusCode: 400,
      });
    }
    if (password == "" || !password) {
      return next({
        message: "Password harus diisi!",
        statusCode: 400,
      });
    }

    const data = await loginAdmin({ nip, password });

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

exports.updateAdminAccoundtById = async (req, res, next) => {
  try {
    const { nip, name, email, phoneNumber, password } = req.body;

    const id = req?.params?.id;
    const selectedAdmin = await profile(id);

    if (selectedAdmin.role !== "admin") {
      return next({
        message: "Akun yang akan diupdate bukan akun admin",
        statusCode: 403,
      });
    }

    // const userPhoto = req?.user?.image;
    // let image;
    // if (req?.files?.image) {
    //   image = req?.files?.image;
    // } else {
    //   image = userPhoto;
    // }
    const image = req?.files?.image;
    if (nip == "" || !nip) {
      return next({
        message: "NIP harus diisi!",
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

    const data = await updateUserById(id, {
      nip,
      name,
      email,
      phoneNumber,
      password,
      image,
    });

    if (data?.dataValues?.password) {
      delete data?.dataValues?.password;
    } else {
      delete data?.password;
    }

    res.status(200).json({
      message: "Update Berhasil",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllPeserta = async (req, res, next) => {
  try {
    const data = await getUsersByRole("peserta");
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllAdmins = async (req, res, next) => {
  try {
    const data = await getUsersByRole("admin");
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePesertaById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const peserta = await profile(id);

    if (peserta.role !== "peserta") {
      throw new Error("Akun yang akan dihapus bukan akun peserta");
    }
    const data = await deleteUserById(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAdminById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const peserta = await profile(id);

    if (peserta.role !== "admin") {
      throw new Error("Akun yang akan dihapus bukan akun admin");
    }
    const data = await deleteUserById(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
