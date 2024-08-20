const { User } = require("../../models");
const { uploader } = require("../../src/helper/cloudinary");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const path = require("path");

exports.getUserByNIK = async (nik) => {
  const data = await User.findOne({ where: { nik } });
  return data;
};

exports.getUserByNIP = async (nip) => {
  const data = await User.findOne({ where: { nip } });
  return data;
};

exports.createUser = async (payload) => {
  payload.password = bcrypt.hashSync(payload.password, 10);

  const { image } = payload;

  if (image) {
    image.publicId = crypto.randomBytes(16).toString("hex");

    image.name = `${image.publicId}${path.parse(image.name).ext}`;

    const imageUpload = await uploader(image);
    payload.image = imageUpload.secure_url;
  }
  // else {
  //   payload.image =
  //     "https://res.cloudinary.com/dtkrxcjrr/image/upload/v1723625134/profile_dummy_osgady.png";
  // }
  if (payload?.picture) {
    payload.image = payload?.picture;
  }

  return (data = await User.create(payload));
};

exports.getUserByID = async (id) => {
  const data = await User.findOne({ where: { id } });
  return data;
};

exports.updateUserById = async (id, payload) => {
  payload.password = bcrypt.hashSync(payload.password, 10);
  const selectedUser = await User.findOne({ where: { id } });
  const { image } = payload;
  if (selectedUser) {
    if (image && typeof image == "object") {
      image.publicId = crypto.randomBytes(16).toString("hex");

      image.name = `${image.publicId}${path.parse(image.name).ext}`;

      const imageUpload = await uploader(image);
      payload.image = imageUpload.secure_url;
    }
    await User.update(payload, {
      where: {
        id,
      },
    });
    const data = await User.findOne({ where: { id } });
    return data;
  } else {
    throw new Error(`not found!`);
  }
};

exports.getUsers = async () => {
  const data = await User.findAll();
  return data;
};

exports.getUsersByRole = async (role) => {
  const data = await User.findAll({ where: { role } });
  return data;
};

exports.deleteUserById = async (id) => {
  await User.destroy({ where: { id } });
  return null;
};
