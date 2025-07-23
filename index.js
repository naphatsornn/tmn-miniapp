// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const headers = req.headers;

  // แสดง header ทั้งหมดในรูปแบบ HTML
  let html = `<h1>Headers : </h1><ul>`;
  for (const key in headers) {
    html += `<li><strong>${key}</strong>: ${headers[key]}</li>`;
  }
  html += `</ul>`;

  res.send(html);
});

module.exports = app;