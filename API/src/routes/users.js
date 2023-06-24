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

//Eliminar usuarios


//Actualizar usuarios



module.exports = router;