const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON
app.use(express.json());

// Mount the user router
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
