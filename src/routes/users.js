const {Router} = require('express');
const router = Router();
const userSchema = require('../models/user');

//Añadir usuarios
router.post('/users', (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Ver usuarios
router.get('/users', (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Ver usuario específico
router.get('/users/:id', (req, res)=>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Eliminar usuarios
router.delete('/users/:id', (req, res)=>{
    const { id } = req.params;
    userSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Actualizar usuarios
router.put('/users/:id', (req, res)=>{
    const { id } = req.params;
    const { name, email, password } = req.body;
    userSchema
    .updateOne({_id: id}, {$set: {name, email, password} })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports = router;