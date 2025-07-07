const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoute');
const postRoutes = require('./routes/postRoute');

const app = express();
app.use(cors());
app.use(express.json());


// Register your routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Start your server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
