const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:name', (req, res) => {
  const name = req.params.name;

  const getBooks = async (nameOfBook) => {
    try {
      const url = `https://anapioficeandfire.com/api/books?name=${nameOfBook}`;

      let response = await axios.get(url);
      let status = response.statusText;
      if (status === 'OK') {
        status = 'Success';
      }

      let dataObj2 = {
        name: response.data[0].name,
        isbn: response.data[0].isbn,
        authors: response.data[0].authors,
        number_of_pages: response.data[0].numberOfPages,
        publisher: response.data[0].publisher,
        country: response.data[0].country,
        release_date: response.data[0].released,
      };
      let dataObj = { ...dataObj2 };
      return res.json({
        status_code: response.status,
        status,
        data: dataObj,
      });
    } catch (err) {
      return res.json({
        status_code: 200,
        status: 'Success',
        data: [],
      });
    }
  };
  getBooks(name);
});

module.exports = router;
