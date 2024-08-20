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
    throw new Error("NIK sudah terdaftar");
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
    throw new Error(`NIK belum terdaftar`);
  }

  const isValid = await bcrypt.compare(payload.password, user?.password);
  if (!isValid) {
    throw new Error(`Password salah`);
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
    throw new Error(`NIP belum terdaftar`);
  }

  const isValid = await bcrypt.compare(payload.password, user?.password);
  if (!isValid) {
    throw new Error(`Password salah`);
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
  const data = await getUsersByRole(role);
  return data;
};

exports.updateUserById = async (id, payload) => {
  const data = await updateUserById(id, payload);
  return data;
};

exports.deleteUserById = async (id) => {
  const data = await deleteUserById(id);
  return data;
};
