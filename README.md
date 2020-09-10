            INSTALLATION

`git clone https://github.com/Alukoayodele/API-test.git`
`npm install`
`npm run dev`

          USEAGE

      Requirements 1

Make a GET request to
` http://localhost:8080/api/external-books/:nameOfBook`

      Requirements 2

        Create

Make a POST request to
`http://localhost:8080/api/v1/books`

          Read

Make a GET request to
`http://localhost:8080/api/v1/books`
to get all the books in the database;

Make a GET request to
`http://localhost:8080/api/v1/books/name/:name`
to get a single book by it "name" from the database;

Make a GET request to
`http://localhost:8080/api/v1/books/country/:country`
to get a single book by the "country" where it published from the database;

Make a GET request to
`http://localhost:8080/api/v1/books/publisher/:publisher`
to get a single book by it "publisher" from the database;

Make a GET request to
`http://localhost:8080/api/v1/books/release_date/:year`
to get a single book by the YEAR of it "release date" from the database;

          Update

Make a PATCH request to
`http://localhost:8080/api/v1/books/:id`
to get a single book by it "id" from the database and update it;

        Delete

Make a DELETE request to
`http://localhost:8080/api/v1/books/:id`
to get a single book by it "id" from the database and delete it;

        Show

Make a GET request to
`http://localhost:8080/api/v1/books/:id`
to get a single book by it "id" from the database;
