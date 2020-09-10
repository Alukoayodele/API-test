const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const externalBook = require('./routes/api/external');
const book = require('./routes/api/book');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
connectDB();

app.use('/api/external-books/', externalBook);
app.use('/api/v1/books/', book);
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
