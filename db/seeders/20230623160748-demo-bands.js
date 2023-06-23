"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("bands", [
      {
        name: "Amplified",
        gig_rate: 1000,
        description: `Amplified is a rock band consisting of three young boys from Hong Kong. 
  While from Hong Kong, they are primarily known in Japan. 
  They were discovered through Sony Music Japan's International Audition, and signed to the Sony subsidiary DefSTAR Records. 
  Their debut single, "Mr. Raindrop", was used as the second ending theme for the anime Gintama. 
  Their debut album, Turn It Up!, was released on 2 August`,
        photo_url:
          "https://static.wikia.nocookie.net/drama/images/8/88/Turn_It_Up_Cover.jpg/revision/latest/scale-to-width-down/600?cb=20190610153117&path-prefix=es",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Beyond", // str
        gig_rate: 3000, // int
        description: `Beyond was a Hong Kong rock band formed in 1983. 
    The band became prominent in Hong Kong, Taiwan, Japan, Singapore, Malaysia, Mainland China, and Overseas Chinese communities. 
    The band is widely considered as the most successful and influential Cantopop band from Hong Kong.`, // str
        photo_url:
          "https://i.discogs.com/rzyFTbxdgFH8gl734ibwwqlKZagRPQ5iu_XCQfMwbIU/rs:fit/g:sm/q:90/h:821/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyNjgw/MjMtMTYxMTAyODc5/My00MDQ5LmpwZWc.jpeg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ella Fitzgerald", // str
        gig_rate: 5000, // int
        description: `Ella Jane Fitzgerald was an American jazz singer, sometimes referred to as the "First Lady of Song", "Queen of Jazz", and "Lady Ella". 
    She was noted for her purity of tone, impeccable diction, phrasing, timing, intonation, and a "horn-like" improvisational ability, particularly in her scat singing.`, // str
        photo_url:
          "https://upload.wikimedia.org/wikipedia/commons/6/65/Ella_Fitzgerald_1962.JPG",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("bands", null, {});
  },
};
