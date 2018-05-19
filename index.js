const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("view engine", "pug");

app.set("views", __dirname + "/public/views");

// sending off the index.page
app.get('/', (req, res) => {
    res.render('index');
});

app.listen( process.env.PORT || 3000, () => {
    console.log(`Listening on port 3000 or ${process.env.port} `);
});

