
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const customerRoutes = require('./routes/customerRoutes'); // Import routes

const connectDB = require('./config/db');


const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/customer', customerRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
