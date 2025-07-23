app.get('/', (req, res) => {
  const headers = req.headers;

  // ✅ Log header ทั้งหมดออกทาง console
  console.log('All headers:', headers);

  // แสดง header ทั้งหมดในรูปแบบ HTML
  let html = `<h1>Headers : </h1><ul>`;
  for (const key in headers) {
    html += `<li><strong>${key}</strong>: ${headers[key]}</li>`;
  }
  html += `</ul>`;

  res.send(html);
});
