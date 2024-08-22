const { uploader } = require("../../src/helper/cloudinary");
const crypto = require("crypto");
const path = require("path");

const {
  Question,
  Category,
  MultipleChoice,
  AnswerHistory,
  AnswerKey,
} = require("../../models");
const { where } = require("sequelize");

exports.getQuestionsByCategory = async (payload) => {
  const { categoryId, userId } = payload;
  const data = await Question.findAll({
    where: { categoryId },
    include: [
      {
        model: Category,
      },
      {
        model: MultipleChoice,
        include: [
          {
            model: AnswerHistory,
            where: { userId },
            required: false,
          },
          {
            model: AnswerKey,
          },
        ],
      },
    ],
  });
  return data;
};

exports.getPesertaQuestions = async (userId) => {
  const data = await Question.findAll({
    include: [
      {
        model: Category,
      },
      {
        model: MultipleChoice,
        include: [
          {
            model: AnswerHistory,
            where: { userId },
            required: false,
          },
        ],
      },
    ],
  });
  return data;
};

exports.createQuestion = async (payload) => {
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

  const data = await Question.create(payload, { returning: true });
  return data;
};

exports.getQuestionByIdForAdmin = async (id) => {
  const data = await Question.findOne({
    where: { id },
    include: [
      {
        model: Category,
      },
      {
        model: MultipleChoice,
        include: [
          {
            model: AnswerHistory,
          },
          {
            model: AnswerKey,
          },
        ],
      },
    ],
  });
  return data;
};

exports.deleteQuestionById = async (id) => {
  const data = await Question.destroy({
    where: { id },
  });
  return data;
};
