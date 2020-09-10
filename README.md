After Cloning run "npm install" to get the required node modules
To start the server run "npm run dev" to continuously run the server on PORT 8080

Requirements 1
make a GET request to "http://localhost:8080/api/external-books/:nameOfBook"

Requirements 2
Create
make a POST request to "http://localhost:8080/api/v1/books"

Read
make a GET request to "http://localhost:8080/api/v1/books" to get all the books in the database
make a GET request to "http://localhost:8080/api/v1/books/name/:name" to get a single book by it "name" from the database
make a GET request to "http://localhost:8080/api/v1/books/country/:country" to get a single book by the "country" where it published from the database
make a GET request to "http://localhost:8080/api/v1/books/publisher/:publisher" to get a single book by it "publisher" from the database
make a GET request to "http://localhost:8080/api/v1/books/release_date/:year" to get a single book by the YEAR of it "release date" from the database

Update
make a PATCH request to "http://localhost:8080/api/v1/books/:id" to get a single book by it "id" from the database and update it

Delete
make a DELETE request to "http://localhost:8080/api/v1/books/:id" to get a single book by it "id" from the database and delete it

Show
make a GET request to "http://localhost:8080/api/v1/books/:id" to get a single book by it "id" from the database
