const express = require('express')
 const app = express() 


const port =3002;

app.get('/',(req, res) => res.send('¡¡Hola mundo!!'))

 app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));

console.log(1); 