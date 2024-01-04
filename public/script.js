//declaring variables (express requirement, instantiating express, and port number setup)
const express = require('express');
const app = express();
const PORT = 8080;

//GET functions
app.get('/', (req, res) ={
    res.sendFile(__dirname + '/index.html')
})

//GET all pets
app.get('/api/v1/pets', (req, res) => {

})

//GET pet by name

//GET pet by owner name

//Stretch goal???

//Listening to server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})