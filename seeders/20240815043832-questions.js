"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // soal 1 ===================================================================================================
    let questionId;
    let multipleChoiceIdForAnswerKey;
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Indonesia merdeka pada tanggal?",
          image: null,
          point: 10,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    multipleChoiceIdForAnswerKey = await queryInterface.bulkInsert(
      "MultipleChoices",
      [
        {
          image: null,
          description: "17 Agustus 1944",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "15 Mei 2024",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "17 Agustus 1945",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "1 April 1950",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "9 Maret 1977",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: multipleChoiceIdForAnswerKey[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // soal 2 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Lawan kata baik?",
          image: null,
          point: 10,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    multipleChoiceIdForAnswerKey = await queryInterface.bulkInsert(
      "MultipleChoices",
      [
        {
          image: null,
          description: "buruk",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "cepat",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "lambat",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "cantik",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "kotor",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: multipleChoiceIdForAnswerKey[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // soal 3 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Berikut ini yang termasuk hewan adalah?",
          image: null,
          point: 99999999,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    multipleChoiceIdForAnswerKey = await queryInterface.bulkInsert(
      "MultipleChoices",
      [
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238630/WhatsApp_Image_2024-08-21_at_18.07.59_7eb31ffe_lg1uiw.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238576/qxyqxqjtu_WW187785_qjoraw.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238575/giraffe_fsb9ed.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238576/cat_ebbf9r.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238575/duck_tkpfqi.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: multipleChoiceIdForAnswerKey[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // soal 4 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "1+1",
          image: null,
          point: 10,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    multipleChoiceIdForAnswerKey = await queryInterface.bulkInsert(
      "MultipleChoices",
      [
        {
          image: null,
          description: "6",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "4",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "3",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "9",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "2",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: multipleChoiceIdForAnswerKey[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // soal 5 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Gambar yang serupa dengan gambar berikut adalah",
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238630/WhatsApp_Image_2024-08-21_at_18.07.59_7eb31ffe_lg1uiw.jpg`,
          point: 99999999,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    multipleChoiceIdForAnswerKey = await queryInterface.bulkInsert(
      "MultipleChoices",
      [
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238630/WhatsApp_Image_2024-08-21_at_18.07.59_7eb31ffe_lg1uiw.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238576/qxyqxqjtu_WW187785_qjoraw.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238575/giraffe_fsb9ed.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238576/cat_ebbf9r.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238575/duck_tkpfqi.jpg`,
          description: null,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: multipleChoiceIdForAnswerKey[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
    await queryInterface.bulkDelete("MultipleChoices", null, {});
    await queryInterface.bulkDelete("AnswerKeys", null, {});
  },
};
