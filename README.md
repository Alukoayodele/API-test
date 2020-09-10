# Overview

This API was built with NodeJS express framework and meets all the requirements stated in the task document

# Getting Started

1. Clone the repository by running the following command
   ` git clone https://github.com/Alukoayodele/API-test.git`

2. Install npm packages by running
   `npm install`

3. Start the server by running
   `npm run dev`

# API Usage

## Requirement 1

To get books from Ice and Fire API (external) by name, make a GET request to

` http://localhost:8080/api/external-books/:nameOfBook`

## Requirements 2

### To create a new resource

Make a **POST** request to
`http://localhost:8080/api/v1/books`

### To get all the books in the database,

make a **GET** request to
`http://localhost:8080/api/v1/books`

### Getting a single book by parameters

To get a single book by it **name** from the database, make a **GET** request to
`http://localhost:8080/api/v1/books/name/:name`

To get a single book by the **country** where it was published from the database, make a **GET** request to
`http://localhost:8080/api/v1/books/country/:country`

To get a single book by it **publisher** from the database, make a **GET** request to
`http://localhost:8080/api/v1/books/publisher/:publisher`

To get a single book by the **YEAR** of it **release date** from the database, make a GET request to
`http://localhost:8080/api/v1/books/release_date/:year`

### To update a Book

Make a **PATCH** request to
`http://localhost:8080/api/v1/books/:id`

### To delete a Book

Make a **DELETE** request to
`http://localhost:8080/api/v1/books/:id`

### To get a book by _id_

Make a **GET** request to
``http://localhost:8080/api/v1/books/:id`
to get a single book by it "id" from the database
