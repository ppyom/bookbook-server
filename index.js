require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getItemList, getSearch, getItem } = require('./book');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

// Error Handling
app.use((error, req, res, next) => {
  res.status(500).send({ message: '서버의.. 오류..😭', error });
});

// Routes
app.get('/itemList', async (req, res, next) => {
  const { type, page, sort } = req.query;
  const data = await getItemList(type, page, sort);
  res.send(data);
});
app.get('/search', async (req, res, next) => {
  const { query, page, sort } = req.query;
  const data = await getSearch(query, page, sort);
  res.send(data);
});
app.get('/item/:id', async (req, res, next) => {
  const { page, sort } = req.query;
  const { id } = req.params;
  const data = await getItem(id, page, sort);
  res.send(data);
});

// Not Found
app.get((req, res) => {
  res.status(404).send({ error: '올바르지 않은 경로입니다.' });
});

app.listen(parseInt(process.env.PORT));
