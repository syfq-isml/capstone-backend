"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("bands", [
      {
        name: "ABBA",
        gig_rate: 1400,
        description: `ABBA are a Swedish supergroup formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad. The group's name is an acronym of the first letters of their first names arranged as a palindrome.`,
        photo_url:
          "https://upload.wikimedia.org/wikipedia/commons/c/cb/ABBA_-_TopPop_1974_5.png",
        email: "abba@baab.com",
        phone_number: "90098008",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "The Beatles", // str
        gig_rate: 3400, // int
        description: `The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form.`, // str
        photo_url:
          "https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg",
        email: "the.beatles@gmail.com",
        phone_number: "92736523",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Coldplay",
        gig_rate: 5200,
        description: `Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and creative director Phil Harvey.`,
        photo_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ColdplayBBC071221_%28cropped%29.jpg/1200px-ColdplayBBC071221_%28cropped%29.jpg",
        email: "coldplay@hotmail.com",
        phone_number: "91887758",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("bands", null, {});
  },
};
