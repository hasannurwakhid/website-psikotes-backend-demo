const { uploader } = require("../../src/helper/cloudinary");
const crypto = require("crypto");
const path = require("path");
const { MultipleChoice } = require("../../models");

exports.getMultipleChoiceById = async (id) => {
  const data = await MultipleChoice.findOne({ where: { id } });
  return data;
};

exports.createMultipleChoice = async (payload) => {
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

  const data = await MultipleChoice.create(payload, { returning: true });
  return data;
};
