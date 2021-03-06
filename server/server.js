require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('getUsuario')
});
app.post('/usuario', function(req, res) {
    let { body } = req

    body.nombre === undefined ?
        (res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        })) :

        res.json({
            persona: body
        })

})
app.put('/usuario/:id', function(req, res) {

    let { id } = req.params;

    res.json({
        id
    });
})
app.delete('/usuario', function(req, res) {
    res.json('deletetUsuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el port 3000')
})