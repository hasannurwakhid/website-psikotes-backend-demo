const { User } = require("../../models");
const { uploader } = require("../../src/helper/cloudinary");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const path = require("path");

exports.getUserByNIK = async (nik) => {
  const data = await User.findOne({ where: { nik } });
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
  } else {
    payload.image =
      "https://res.cloudinary.com/dtkrxcjrr/image/upload/v1723625134/profile_dummy_osgady.png";
  }

  if (payload?.picture) {
    payload.image = payload?.picture;
  }

  return (data = await User.create(payload));
};

exports.getUserByID = async (id) => {
  // get from db
  const data = await User.findOne({ where: { nik } });

  if (data.length > 0) {
    return data[0];
  }

  throw new Error(`User is not found!`);
};
