export const mySocialCircle = {
  nodes: [
    {
      id: 0,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg",
      name: "Angelo (You)",
      val: 15,
      color: "#e5720d",
      desc: "Self: You with reference to others around"
    },
    {
      id: 1,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg",
      name: "Manon Ruiz",
      val: 10,
      color: "yellow",
      desc: "Family: A crab walks, so walks his children"
    },
    {
      id: 2,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/thedjpetersen/128.jpg",
      name: "Connie Woodward",
      val: 5,
      color: "yellow",
      desc: "Family: House divided cannot stand"
    },
    {
      id: 3,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/bluesix/128.jpg",
      name: "Raj Garbanzo",
      val: 17,
      color: "yellow",
      desc: "Family: Children are poor man's riches"
    },
    {
      id: 4,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg",
      name: "Tori Smith",
      val: 8,
      color: "#bddefc",
      desc: "Friend: A true friend is the best posession"
    },
    {
      id: 5,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/erwanhesry/128.jpg",
      name: "Ayub Khan",
      val: 7,
      color: "#bddefc",
      desc: "Friend: Hold a true friend with everything you have"
    },
    {
      id: 6,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/tweetubhai/128.jpg",
      name: "Elli Epstine",
      val: 5,
      color: "#bddefc",
      desc: "Friend: Keep your friendsip in repair … always."
    },
    {
      id: 7,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aoimedia/128.jpg",
      name: "Ocean Kirby",
      val: 9,
      color: "#989ba0",
      desc: "Enemy: Keep your friends close, your enemies closer."
    },
    {
      id: 8,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/missaaamy/128.jpg",
      name: "Anisha Fuentes",
      val: 11,
      color: "#d19087",
      desc: "Lover: You should stay but your clothes must go."
    },
    {
      id: 9,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/falling_soul/128.jpg",
      name: "Mya Shea",
      val: 10,
      color: "#d19087",
      desc: "Lover: I promise to always be by your side, under or top."
    },
    {
      id: 10,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/coreyginnivan/128.jpg",
      name: "Terri Lester",
      val: 7,
      color: "#7ed376",
      desc: "Collegue: Blessed me with an amazing collegue."
    },
    {
      id: 11,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg",
      name: "Ezra Barr",
      val: 4,
      color: "#7ed376",
      desc: "Collegue: It is great honor and fun to work with."
    },
    {
      id: 12,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",
      name: "Teigan Porter",
      val: 9,
      color: "#7ed376",
      desc: "Collegue: What a creative mind it is … in so many ways. "
    },
    {
      id: 13,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/reabo101/128.jpg",
      name: "Ellior McLean",
      val: 8,
      color: "#e0ae3a",
      desc: "Partner: Working on art gallery concept - artist. "
    },
    {
      id: 14,
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg",
      name: "Anita Patil",
      val: 10,
      color: "#e0ae3a",
      desc: "Partner: Working on art gallery concept - planner. "
    },
    {
      id: 15,
      img: "hub",
      name: "family-hub",
      val: 10,
      color: "yellow",
      desc: "family hub: "
    },
    {
      id: 16,
      img: "hub",
      name: "Friend-hub",
      val: 10,
      color: "#bddefc",
      desc: "Friend hub: "
    },
    {
      id: 17,
      img: "hub",
      name: "Enemy-hub",
      val: 5,
      color: "#989ba0",
      desc: "Enemy hub: "
    },
    {
      id: 18,
      img: "hub",
      name: "love-hub",
      val: 5,
      color: "#d19087",
      desc: "love hub: "
    },
    {
      id: 19,
      img: "hub",
      name: "collegue-hub",
      val: 5,
      color: "#7ed376",
      desc: "collegue hub: "
    },
    {
      id: 20,
      img: "hub",
      name: "partner-hub",
      val: 5,
      color: "#e0ae3a",
      desc: "partner hub: "
    }
  ],
  links: [
    { source: 0, target: 15, color: "white", name: "family", desc: "Some family hub description", linkWidth: 12, linkResolution: 12 },
    { source: 15, target: 1, color: "white", name: "brother-of", desc: "Some family description", linkWidth: 10, linkResolution: 10 },
    { source: 15, target: 2, color: "white", name: "cousine-of", desc: "Some family description", linkWidth: 11, linkResolution: 11 },
    { source: 15, target: 3, color: "white", name: "uncle-of", desc: "Some friend description", linkWidth: 9, linkResolution: 9 },

    { source: 0, target: 16, color: "yellow", name: "friends", desc: "Some friend hub description", linkWidth: 12, linkResolution: 12 },
    { source: 16, target: 4, color: "yellow", name: "friend-of", desc: "Some friend description", linkWidth: 8, linkResolution: 18 },
    { source: 16, target: 5, color: "yellow", name: "friend-of", desc: "Some friend description", linkWidth: 8, linkResolution: 22 },
    { source: 16, target: 6, color: "yellow", name: "friend-of", desc: "Some friend description", linkWidth: 14, linkResolution: 14 },

    { source: 0, target: 17, color: "#bac9e2", name: "enemies", desc: "Some enemy hub description", linkWidth: 32, linkResolution: 42 },
    { source: 17, target: 7, color: "#bac9e2", name: "enemy-of", desc: "Some enemy description", linkWidth: 14, linkResolution: 14 },

    { source: 0, target: 18, color: "red", name: "lover", desc: "Some lover hub description", linkWidth: 32, linkResolution: 42 },
    { source: 18, target: 8, color: "red", name: "lover-of", desc: "Some love description", linkWidth: 6, linkResolution: 6 },
    { source: 18, target: 9, color: "red", name: "lover-of", desc: "Some love description", linkWidth: 7, linkResolution: 7 },

    { source: 0, target: 19, color: "#bad8d3", name: "collegue", desc: "Some collegue hub description", linkWidth: 32, linkResolution: 42 },
    { source: 19, target: 10, color: "#bad8d3", name: "collegue-of", desc: "Some collegue description", linkWidth: 7, linkResolution: 7 },
    { source: 19, target: 11, color: "#bad8d3", name: "collegue-of", desc: "Some collegue description", linkWidth: 3, linkResolution: 3 },
    { source: 19, target: 12, color: "#bad8d3", name: "collegue-of", desc: "Some collegue description", linkWidth: 6, linkResolution: 7 },

    { source: 0, target: 20, color: "#e0bfa1", name: "partner", desc: "Some partner hub description", linkWidth: 32, linkResolution: 42 },
    { source: 20, target: 13, color: "#e0bfa1", name: "hobby-partner-of", desc: "Some hobby relation description", linkWidth: 5, linkResolution: 5 },
    { source: 20, target: 14, color: "#e0bfa1", name: "hobby-partner-of", desc: "Some hobby relation description", linkWidth: 15, linkResolution: 15 }
  ]
};