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
          question: `Jika 15 kaleng makanan diperlukan 7 orang selama 2 hari maka untuk memenuhi kebutuhan 4 orang selama 7 hari diperlukan makanan sebanyak..`,
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
          description: `14 kaleng`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `15 kaleng`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `24 kaleng`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `28 kaleng`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `30 kaleng`,
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

    // soal 8 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: `Mesin Jahit : ..... = ..... : Benang`,
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
          description: `Pola - Kapas`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `Perancang - Sutra`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `Penjahit - Bordir`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `Jarum - Kain`,
          questionId: questionId[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: null,
          description: `Pakaian - Mesin Pintal`,
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
          question: "Soal no 9",
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

    // soal 10 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 10",
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

    // soal 11 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 11",
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

    // soal 12 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 12",
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

    // soal 13 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 13",
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
          question: "Soal no 14",
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

    // soal 15 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 15",
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

    // soal 16 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 16",
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

    // soal 17 ===================================================================================================
    questionId = await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Soal no 17",
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
