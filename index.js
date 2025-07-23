const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const headers = req.headers;
  console.log('All headers:', headers);

  let html = `<h1>Headers :</h1><ul>`;
  for (const key in headers) {
    html += `<li><strong>${key}</strong>: ${headers[key]}</li>`;
  }
  html += `</ul>`;

  res.send(html);
});

// ❗️ต้องมีบรรทัดนี้เพื่อให้ Vercel ใช้ได้
module.exports = app;
