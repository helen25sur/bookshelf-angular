interface Book {
  author: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  contributor: string;
  description: string;
  primary_isbn10: string;
  primary_isbn13: string;
  book_uri: string;
  publisher: string;
  title: string;
}

const books: Book[] = [
  {
    "author": "Colleen Hoover",
    "book_image": "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781668001226.jpg",
    "book_image_width": 322,
    "book_image_height": 500,
    "contributor": "by Colleen Hoover",
    "description": "In the sequel to \u201cIt Ends With Us,\u201d Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.",
    "primary_isbn10": "1668001225",
    "primary_isbn13": "9781668001226",
    "book_uri": "nyt:\/\/book\/3aa85e47-4df9-53ef-9957-a77753d3502c",
    "publisher": "Atria",
    "title": "IT STARTS WITH US",
  },
  {
    "author": "Bonnie Garmus",
    "book_image": "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780385547345.jpg",
    "book_image_width": 328,
    "book_image_height": 500,
    "contributor": "by Bonnie Garmus",
    "description": "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",
    "primary_isbn10": "038554734X",
    "primary_isbn13": "9780385547345",
    "book_uri": "nyt:\/\/book\/717e0ead-9782-567d-af27-d9a6cfb1856f",
    "publisher": "Doubleday",
    "title": "LESSONS IN CHEMISTRY",
  },
  {
    "author": "Taylor Jenkins Reid",
    "book_image": "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781524798628.jpg",
    "book_image_width": 325,
    "book_image_height": 495,
    "contributor": "by Taylor Jenkins Reid",
    "description": "A fictional oral history charting the rise and fall of a \u201970s rock \u2019n\u2019 roll band.",
    "primary_isbn10": "1524798649",
    "primary_isbn13": "9781524798642",
    "book_uri": "nyt:\/\/book\/148f3f21-9a28-583a-bbce-5f7d9f6e65bd",
    "publisher": "Ballantine",
    "title": "DAISY JONES & THE SIX",
  },
  {
    "author": "Colleen Hoover",
    "book_image": "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9781501110375.jpg",
    "book_image_width": 319,
    "book_image_height": 495,
    "contributor": "by Colleen Hoover",
    "description": "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
    "primary_isbn10": "1501110365",
    "primary_isbn13": "9781501110368",
    "book_uri": "nyt:\/\/book\/e2a3545e-e9cb-5828-9d97-50a798a0e4f6",
    "publisher": "Atria",
    "title": "IT ENDS WITH US",
  },
  {
    "author": "James Patterson and Brendan DuBois",
    "book_image": "https:\/\/storage.googleapis.com\/du-prd\/books\/images\/9780316457378.jpg",
    "book_image_width": 331,
    "book_image_height": 500,
    "contributor": "by James Patterson and Brendan DuBois",
    "description": "A botched field operation and a terrorist plot endanger Amy Cornwall and her family.",
    "primary_isbn10": "031645737X",
    "primary_isbn13": "9780316457378",
    "book_uri": "nyt:\/\/book\/337797d3-55de-594f-af32-576d6bfdeed8",
    "publisher": "Little, Brown",
    "title": "COUNTDOWN",
  }
]