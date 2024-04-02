const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

app.get('/test', (req, res) => {
    res.json("working");
  });

module.exports = app;