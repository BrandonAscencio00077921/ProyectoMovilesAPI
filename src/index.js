const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/users');
const userSchema = require('./models/user');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res)=>{
    res.send("THE WORLD!!")
})

//Ver usuarios
app.get('/users', (req, res)=>{
    userSchema
    .find()
    res.json(data)
})
app.get('/users/:id', (req, res)=>{
    const { id } = req.params;
    userSchema
    .findById(id)
    res.json(data)
})

//Añadir usuarios
app.post('/users', (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=>res.send("Usuario agregado"))
    .catch((error)=>res.json({message: error}));  
})

//Conexion a la base
mongoose
.connect(process.env.MONGODB)
.catch((error) =>console.error(error))

app.listen(port, () => console.log("server on port", port));
