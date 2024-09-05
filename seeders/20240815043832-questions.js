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
          question: "Berikut ini yang termasuk tumbuhan adalah?",
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
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724380419/tumbuhan.jpg`,
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
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724380419/tumbuhan.jpg`,
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
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724380419/tumbuhan.jpg`,
          description: "Terdetiksi makhluk prasejarah",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238576/qxyqxqjtu_WW187785_qjoraw.jpg`,
          description: "Gajah",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238575/giraffe_fsb9ed.jpg`,
          description: "Jerapah",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238576/cat_ebbf9r.jpg`,
          description: "Kucing",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1724238575/duck_tkpfqi.jpg`,
          description: "Bebek",
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

    // soal 6 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "MANDIRI >< ...",
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
          description: "Intimasi",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "Interaksi",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "Korelasi",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "Dependen",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "Invalid",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("AnswerKeys", [
      {
        multipleChoiceId: multipleChoiceIdForAnswerKey[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // soal 7 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: `7+7=`,
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
          description: `14`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `15`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `24`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `28`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `30`,
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

    // soal 8 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: `8+8=`,
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
          description: `6`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `17`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `15`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `13`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `16`,
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

    // soal 9 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "9+9",
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
          description: "21",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "16",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "18",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "20",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "24",
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

    // soal 10 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "10+10",
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
          description: "20",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban c",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 11 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "11+11=",
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
          description: "22",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban c",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 12 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "12+12",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban c",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "24",
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

    // soal 13 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "13+13",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "26",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 14 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "14+14",
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
          description: "28",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban c",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 15 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "15+15",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban c",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "30",
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

    // soal 16 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "16+16",
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
          description: "32",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban c",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 17 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "17+17",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "34",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 18 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "18+18",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "36",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 19 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "19+19",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "38",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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

    // soal 20 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "20+20",
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
          description: "jawaban a",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban b",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "40",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban d",
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: "jawaban e",
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
    await queryInterface.bulkDelete("MultipleChoices", null, {});
    await queryInterface.bulkDelete("AnswerKeys", null, {});
  },
};
