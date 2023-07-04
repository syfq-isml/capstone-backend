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
        photo_url: "https://i1.jpopasia.com/assets/1/24402-amplified-3ooa.jpg",
        email: "ampli@fied.com",
        phone_number: "92736523",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Vetta Quartet", // str
        gig_rate: 2000, // int
        description: ` Vetta Quartet is an established ensemble structure of 2 violins, 1 viola and 1 cello – creating a full sound with rich harmonies. Coupled with its visual aesthetics, the String Quartet elegantly reflects the quality of your organisation and event.
The String Quartet is VETTA’s flagship service, and is a well-recognised and sought-after live music band / string quartet for Singapore weddings and corporate events, with consistent bookings months in advance. `, // str
        photo_url:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2016/11/Vetta-Quartet-wedding-bands-in-singapore-900x643.png", // str
        email: "vetta@q.com",
        phone_number: "91239922",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Astronauts", // str
        gig_rate: 4500, // int
        description: `Inspired by the likes of Jamiroquai, Bruno Mars and D’Angelo, this R&B and funk band is most known for its pumped-up live performances. We loved their debut single, Get Close, a groovy track that’ll make you get off your feet and, well, dance. Throw in a dose of bad-boy charm and you get I’m No Good, the band’s second single. Keep your eyes peeled on their social channels – we’ve heard through the grapevine that a full album is in the works!`, // str
        photo_url:
          "https://expatliving.sg/wp-content/uploads/2019/04/astronauts-band-local-music-singapore-live-music.jpg", // str
        email: "astronauts@spaceship.com",
        phone_number: "98832009",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Disco Hue", // str
        gig_rate: 4000, // int
        description: `This four-piece electronic-pop band – consisting of Sherlyn on vocals, Zie on synths, Billy on drums and Rush on guitar – was formed in 2011. Having launched a chart-topping EP titled Arcade, Disco Hue’s dancey originals are a fab mash of retro-inspired beats and infectious synth licks. Our favourite earworm? Gotta Find You, the band’s first single!`, // str
        photo_url:
          "https://expatliving.sg/wp-content/uploads/2018/04/singapore-music-disco-hue.jpg", // str
        email: "disco@hue.com",
        phone_number: "92324212",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Joie Tan", // str
        gig_rate: 1000, // int
        description: `Joie Tan’s musical career began in 2008 on YouTube, where she’s built an incredible fan base amassing over 329,000 views of her most popular cover of Frank Sinatra’s Fly Me To The Moon. Since then, she has reached an impressive 1,120,000 channel views. Now, she’s just released her first, self-funded album.`, // str
        photo_url:
          "https://expatliving.sg/wp-content/uploads/2018/04/joie-tan-singapore-singer-music.jpg", // str
        email: "joie@notjoey.com",
        phone_number: "91198873",
        created_at: new Date(),
        updated_at: new Date(), // arr of strs
      },
      {
        name: "53A", // str
        gig_rate: 1000, // int
        description: `53A is one of Singapore’s most prominent cover bands featuring a dynamic young crew of talented and versatile music performers from diverse backgrounds, all of whom are well-tenured in the local ‘live’ music scene. The result is a unique, versatile and scalable group of professional musicians who are able to operate as an acoustic duo or scale up all the way to a six-piece band across a variety of genres – jazz, pop, rock, punk, alternative.`, // str
        photo_url:
          "https://timbregroup.asia/wp-content/uploads/2016/11/53A-5-piece-comic-copy.jpg", // str
        email: "53A@sza.com",
        phone_number: "90096384",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Lucky Strike", // str
        gig_rate: 3000, // int
        description: `Lucky Strike is one of the most unique semi-acoustic bands in Singapore. Their sound is heavily influenced by the usage of electronics and samples to portray the new-aged sound yet balancing it with melodious instrumentals and intense vocals to ensure that the audience are able to vibe together with us. Their line-up features a young, dynamic and versatile crew having worked with various musicians and artists from the local music scene in Singapore. Lucky Strike typically operates as a 4-piece semi-acoustic band but they can also sing as a 2-piece acoustic duo to fit the client’s needs during certain events.`, // str
        photo_url:
          "https://timbregroup.asia/wp-content/uploads/2019/05/B745F01D-8158-4D17-A3DB-BC1807E85218.jpeg", // str
        email: "luckystrike@cigarette.com",
        phone_number: "97763221",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "NationOne", // str
        gig_rate: 3000, // int
        description: `Nation One’s collectively came together in 2013, each member contributing their own character and experience to solidify the dynamics of the band. A live party band and a trendsetter for the local night scene – since their inception, they have had a few residency gigs at the best bars and clubs in Singapore.
Their music entails of elements of top 40s covering from Pop, Rock, Retro Rnb and to the current sounds of electronic music. Always geared up to entertain the audience with their smashing sound, high energy performances and powerhouse vocals!`, // str
        photo_url:
          "https://timbregroup.asia/wp-content/uploads/2020/02/N1NYE19-20-168.jpg", // str
        email: "nationone@onenation.com",
        phone_number: "96638493",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yung Raja", // str
        gig_rate: 5000, // int
        description: `Singaporean breakthrough artist Yung Raja has been dubbed as Southeast Asia’s next avant-garde bilingual hip-hop artist. He was discovered on Twitter which led to his appearance on the 16 Baris Cypher Show. Yung Raja found viral success following the release of his debut single “Mustafa” with 2.4M views on YouTube, following up with his second single “Mad Blessings” with 1.8M views that caught the eyes of Lupe Fiasco and M.I.A, and was the first English-Tamil song to be played on Malaysia’s leading Malay radio station, Era.`, // str
        photo_url: "https://wiki.sg/images/e/e9/Yung_Raja.jpg", // str
        email: "yung@notold.com",
        phone_number: "97462321",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Shigga Shay", // str
        gig_rate: 2000, // int
        description: `Pek Jin Shen (born 12 September 1992), better known by his stage name Shigga Shay (stylised as ShiGGa Shay—the capitalised "GG" representing "Grizzle Grind"), is a Singaporean hip hop artist, songwriter, director and music producer.
He has been featured on the covers of Juice, the Today newspaper and the Pioneer Magazine. Having had over two million YouTube views, he has also been labeled one of the top 50 men to look out for in 2015 by the Esquire Magazine. ShiGGa is also a founder member of hip hop group Grizzle Grind Crew, as well as production company Grizzle Films.`, // str
        photo_url:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCbeCBhnFn4ETSYJtSIxLpljBjScPzv2J2wZe4rwGg0eskoiHW", // str
        email: "shigga@shay.com",
        phone_number: "82732322",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("bands", null, {});
  },
};
