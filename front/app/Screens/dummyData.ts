// dummyData.ts

type Book = {
    name: string;
    author: string;
    description: string;
    image: string;
  };
  
  type CategoryBooks = {
    [key: string]: Book[];
  };
  
  const dummyBooks: CategoryBooks = {
    Fiction: [
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel set in the American South during the 1930s, dealing with themes of racial injustice and moral growth.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    "Non-Fiction": [
      {
        name: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description: "Explores the history of humankind from the evolution of Homo sapiens to the present.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "Becoming",
        author: "Michelle Obama",
        description: "An intimate memoir by the former First Lady of the United States.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    "Mystery/Thriller": [
      {
        name: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        description: "A journalist and a hacker investigate a wealthy family's dark secrets.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "Gone Girl",
        author: "Gillian Flynn",
        description: "A psychological thriller about a marriage gone terribly wrong.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    Romance: [
      {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic novel about love, marriage, and social status in 19th-century England.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "The Notebook",
        author: "Nicholas Sparks",
        description: "A romantic story about a couple's enduring love over decades.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    "Science Fiction": [
      {
        name: "Dune",
        author: "Frank Herbert",
        description: "A science fiction epic set in a distant future amidst a feudal interstellar society.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "Neuromancer",
        author: "William Gibson",
        description: "A groundbreaking cyberpunk novel about a washed-up computer hacker.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    Fantasy: [
      {
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy novel about the adventures of Bilbo Baggins in Middle-earth.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "The first book in the Harry Potter series, introducing the magical world of Hogwarts.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    Horror: [
      {
        name: "The Shining",
        author: "Stephen King",
        description: "A psychological horror novel about a family's stay at an isolated hotel.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "Dracula",
        author: "Bram Stoker",
        description: "A classic gothic horror novel about Count Dracula's attempt to move from Transylvania to England.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    Adventure: [
      {
        name: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        description: "A novel about a young boy's journey down the Mississippi River.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "Treasure Island",
        author: "Robert Louis Stevenson",
        description: "A classic adventure novel about pirates and buried treasure.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    Historical: [
      {
        name: "The Book Thief",
        author: "Markus Zusak",
        description: "A novel set in Nazi Germany, narrated by Death, about a young girl who steals books.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "All the Light We Cannot See",
        author: "Anthony Doerr",
        description: "A historical novel about a blind French girl and a German boy whose paths collide during World War II.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
    "Self-Help": [
      {
        name: "Atomic Habits",
        author: "James Clear",
        description: "A guide to building good habits and breaking bad ones.",
        image: require('../../assets/images/bookCover4.png'),
      },
      {
        name: "The Power of Now",
        author: "Eckhart Tolle",
        description: "A spiritual guide to living in the present moment.",
        image: require('../../assets/images/bookCover4.png'),
      },
    ],
  };
  
  export default dummyBooks;