'use strict';

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const logging = require('./http/middleware');

const HOST = '127.0.0.1';
const PORT = 3000;

const app = express();
app.use(logging());
app.use(express.static(path.join(__dirname, 'statics')));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/user', async (req, res) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findMany();
  console.dir(user);
  res.send('user!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
