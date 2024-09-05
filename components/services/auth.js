const {
  getUserByNIK,
  getUserByNIP,
  getUserByID,
  createUser,
  getUsersByRole,
  updateUserById,
  deleteUserById,
} = require("../repositories/auth");

const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (payload) => {
  const existingUser = await getUserByNIK(payload.nik);

  if (existingUser) {
    const error = new Error("NIK sudah terdaftar");
    error.statusCode = 409;
    throw error;
  }

  let user = await createUser(payload);

  delete user.dataValues.password;

  // const jwtPayload = {
  //   id: user.id,
  // };

  // const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
  //   expiresIn: "5h",
  // });

  const data = {
    user,
    // token,
  };

  return data;
};

exports.adminRegister = async (payload) => {
  const existingUser = await getUserByNIP(payload.nip);

  if (existingUser) {
    throw new Error("NIP sudah terdaftar");
  }

  let user = await createUser(payload);

  // delete user.dataValues.password;

  // const jwtPayload = {
  //   id: user.id,
  // };

  // const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
  //   expiresIn: "5h",
  // });

  const data = {
    user,
    // token,
  };

  return data;
};

exports.loginPeserta = async (payload) => {
  let user = await getUserByNIK(payload.nik);
  if (!user) {
    const error = new Error(`NIK belum terdaftar`);
    error.statusCode = 401;
    throw error;
  }

  const isValid = await bcrypt.compare(payload.password, user?.password);
  if (!isValid) {
    const error = new Error(`NIK atau Password salah`);
    error.statusCode = 401;
    throw error;
  }

  if (user?.dataValues?.password) {
    delete user?.dataValues?.password;
  } else {
    delete user?.password;
  }

  const jwtPayload = {
    id: user.id,
  };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });

  const data = {
    user,
    token,
  };

  return data;
};

exports.loginAdmin = async (payload) => {
  let user = await getUserByNIP(payload.nip);
  if (!user) {
    const error = new Error(`NIP belum terdaftar`);
    error.statusCode = 401;
    throw error;
  }

  const isValid = await bcrypt.compare(payload.password, user?.password);
  if (!isValid) {
    const error = new Error(`NIP atau Password salah`);
    error.statusCode = 401;
    throw error;
  }

  if (user?.dataValues?.password) {
    delete user?.dataValues?.password;
  } else {
    delete user?.password;
  }

  const jwtPayload = {
    id: user.id,
  };

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });

  const data = {
    user,
    token,
  };

  return data;
};

exports.profile = async (id) => {
  // get the user
  let data = await getUserByID(id);
  if (!data) {
    throw new Error(`User is not found!`);
  }

  // delete password
  if (data?.dataValues?.password) {
    delete data?.dataValues?.password;
  } else {
    delete data?.password;
  }

  return data;
};

exports.getUsersByRole = async (role) => {
  const users = await getUsersByRole(role);

  const sanitizedUsers = users.map((user) => {
    const userObj = user.toJSON(); // Mengubah instance Sequelize menjadi plain object
    delete userObj.password; // Menghapus field password
    return userObj;
  });

  return sanitizedUsers;
};

exports.getAllPeserta = async (role) => {
  const users = await getUsersByRole(role);

  const sanitizedUsers = users.map((user) => {
    const userObj = user.toJSON(); // Mengubah instance Sequelize menjadi plain object
    delete userObj.password; // Menghapus field password

    if (userObj.isDone == true) {
      userObj.statusPengerjaan = "Sudah dikerjakan";
    }
    if (
      userObj.startTime == null &&
      userObj.endTime == null &&
      userObj.timeToEnd == null
    ) {
      userObj.statusPengerjaan = "Belum dikerjakan";
    }

    if (
      userObj.startTime != null &&
      userObj.endTime == null &&
      userObj.timeToEnd != null
    ) {
      userObj.statusPengerjaan = "Sedang dikerjakan";
    }

    return userObj;
  });

  return sanitizedUsers;
};

exports.updateUserById = async (id, payload) => {
  const users = await updateUserById(id, payload);

  const sanitizedUsers = users[1].map((user) => {
    const userObj = user.toJSON(); // Mengubah instance Sequelize menjadi plain object
    delete userObj.password; // Menghapus field password
    return userObj;
  });

  return sanitizedUsers;
};

exports.deleteUserById = async (id) => {
  const data = await deleteUserById(id);
  return data;
};
