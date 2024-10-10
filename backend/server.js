require('dotenv').config(); 
const express = require('express');
const app = express();
const propertyRoutes = require('./routes/propertyR');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
connectToDb();
const fetchProperties = require('./controllers/propertyC');

app.use(express.json());
app.use(cors());   
app.use(cookieParser());
app.use('/properties', propertyRoutes);
app.listen(PORT, () => console.log(`Server is now running`));

