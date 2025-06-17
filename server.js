const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
