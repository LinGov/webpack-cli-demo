const express = require('express');

const app = express();

app.get('/test', (req, resp) => {
  resp.send('返回数据');
});

app.listen(8085, 'localhost', (err) => {
  if (err) throw err;
});
