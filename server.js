const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('hola mundo!')
})

app.get('/about', (req, res) => {
    res.send("Estoy devolviendo un parrafo")
})

app.get('/product', (req, res) => {
    res.send("<ol> <li>Producto 1 </li> <li>Producto 2 </li>  <li>Producto 3</li> </ol>")
})

app.get('/product/:idProduct', (req,res) => {
    res.send('Producto: ' + req.params.idProduct)
})

app.listen(3000, () => {
    console.log('servidor iniciado')
})



