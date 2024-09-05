const {
  register,
  adminRegister,
  loginPeserta,
  loginAdmin,
  getUsersByRole,
  getAllPeserta,
  deleteUserById,
  profile,
  updateUserById,
} = require("../services/auth");

const dns = require("dns");

const verifyDomain = (domain) => {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (error, addresses) => {
      if (error || addresses.length === 0) {
        return reject(
          new Error("Domain tidak valid atau tidak memiliki catatan MX")
        );
      }
      resolve(true);
    });
  });
};

exports.registerPeserta = async (req, res, next) => {
  try {
    const { nik, name, email, phoneNumber, password } = req.body;

    const image = req?.files?.image;

    if (!nik || nik.trim() === "") {
      return next({
        message: "NIK harus diisi!",
        statusCode: 400,
      });
    }
    if (nik.length !== 16) {
      return next({
        message: "NIK harus terdiri dari 16 digit!",
        statusCode: 400,
      });
    }
    if (!/^\d+$/.test(nik)) {
      return next({
        message: "NIK hanya boleh berisi angka!",
        statusCode: 400,
      });
    }
    if (!name || name.trim() === "") {
      return next({
        message: "Name harus diisi!",
        statusCode: 400,
      });
    }
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name.trim())) {
      return next({
        message: "Nama tidak valid!",
        statusCode: 400,
      });
    }
    if (!email || email.trim() === "") {
      return next({
        message: "Email harus diisi!",
        statusCode: 400,
      });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return next({
        message: "Email tidak valid!",
        statusCode: 400,
      });
    }

    const emailDomain = email.split("@")[1];
    try {
      await verifyDomain(emailDomain);
    } catch (error) {
      return next({
        message: error.message,
        statusCode: 400,
      });
    }

    if (!phoneNumber || phoneNumber.trim() === "") {
      return next({
        message: "Phone Number harus diisi!",
        statusCode: 400,
      });
    }
    const phoneNumberRegex = /^[0-9]{10,14}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      return next({
        message: "Nomor telepon tidak valid!",
        statusCode: 400,
      });
    }
    if (!password || password.trim() === "") {
      return next({
        message: "Password harus diisi!",
        statusCode: 400,
      });
    }
    if (password && password.trim().length < 8) {
      return next({
        message: "Password minimal 8 karakter!",
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

    if (!nip || nip.trim() === "") {
      return next({
        message: "nip harus diisi!",
        statusCode: 400,
      });
    }
    if (!name || name.trim() === "") {
      return next({
        message: "Name harus diisi!",
        statusCode: 400,
      });
    }
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name.trim())) {
      return next({
        message: "Nama tidak valid!",
        statusCode: 400,
      });
    }
    if (!email || email.trim() === "") {
      return next({
        message: "Email harus diisi!",
        statusCode: 400,
      });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return next({
        message: "Email tidak valid!",
        statusCode: 400,
      });
    }

    const emailDomain = email.split("@")[1];
    try {
      await verifyDomain(emailDomain);
    } catch (error) {
      return next({
        message: error.message,
        statusCode: 400,
      });
    }

    if (!phoneNumber || phoneNumber.trim() === "") {
      return next({
        message: "Phone Number harus diisi!",
        statusCode: 400,
      });
    }
    const phoneNumberRegex = /^[0-9]{10,14}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      return next({
        message: "Nomor telepon tidak valid!",
        statusCode: 400,
      });
    }
    if (!password || password.trim() === "") {
      return next({
        message: "Password harus diisi!",
        statusCode: 400,
      });
    }
    if (password && password.trim().length < 8) {
      return next({
        message: "Password minimal 8 karakter!",
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
    if (!nik || nik.trim() === "") {
      return next({
        message: "NIK harus diisi!",
        statusCode: 400,
      });
    }
    if (!password || password.trim() === "") {
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
    if (!nip || nip.trim() === "") {
      return next({
        message: "NIP harus diisi!",
        statusCode: 400,
      });
    }
    if (!password || password.trim() === "") {
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
    const data = req?.user;

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.checkIsDone = async (req, res, next) => {
  try {
    const data = req?.user?.isDone;

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

    const idInt = parseInt(id, 10);

    if (!idInt || isNaN(idInt)) {
      return next({
        message: "id harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

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
    if (!nip || nip.trim() === "") {
      return next({
        message: "NIP harus diisi!",
        statusCode: 400,
      });
    }
    if (!name || name.trim() === "") {
      return next({
        message: "Name harus diisi!",
        statusCode: 400,
      });
    }
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name.trim())) {
      return next({
        message: "Nama tidak valid!",
        statusCode: 400,
      });
    }
    if (!email || email.trim() === "") {
      return next({
        message: "Email harus diisi!",
        statusCode: 400,
      });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return next({
        message: "Email tidak valid!",
        statusCode: 400,
      });
    }

    const emailDomain = email.split("@")[1];
    try {
      await verifyDomain(emailDomain);
    } catch (error) {
      return next({
        message: error.message,
        statusCode: 400,
      });
    }

    if (!phoneNumber || phoneNumber.trim() === "") {
      return next({
        message: "Phone Number harus diisi!",
        statusCode: 400,
      });
    }
    const phoneNumberRegex = /^[0-9]{10,14}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      return next({
        message: "Nomor telepon tidak valid!",
        statusCode: 400,
      });
    }
    if (password) {
      if (!password || password.trim() === "") {
        return next({
          message: "Password harus diisi!",
          statusCode: 400,
        });
      }
      if (password && password.trim().length < 8) {
        return next({
          message: "Password minimal 8 karakter!",
          statusCode: 400,
        });
      }
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
    const data = await getAllPeserta("peserta");
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

    const idInt = parseInt(id, 10);

    if (!idInt || isNaN(idInt)) {
      return next({
        message: "id harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    const peserta = await profile(id);

    if (peserta.role !== "peserta") {
      return next({
        message: "Akun yang akan dihapus bukan akun peserta",
        statusCode: 403,
      });
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

    const idInt = parseInt(id, 10);

    if (!idInt || isNaN(idInt)) {
      return next({
        message: "id harus diisi dan bernilai integer yang valid",
        statusCode: 400,
      });
    }

    const peserta = await profile(id);

    if (peserta.role !== "admin") {
      return next({
        message: "Akun yang akan dihapus bukan akun admin",
        statusCode: 403,
      });
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
