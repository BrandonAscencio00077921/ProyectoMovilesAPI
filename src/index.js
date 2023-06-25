const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/users');
const user = require('./models/user');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res)=>{
    res.send("THE WORLD!!")
})

//Conexion a la base
mongoose
.connect(process.env.MONGODB)
.catch((error) =>console.error(error))

app.listen(port, () => console.log("server on port", port));
