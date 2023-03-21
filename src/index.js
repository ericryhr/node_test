const express = require('express');
//const { readFile } = require('fs');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
    
    //Manera normal
    /*readFile('./home.html', 'utf8', (err, html) => {
        if(err) {
            response.status(500).send("ERROR");
        }

        response.send(html);
    })*/

    //Promises
    response.send(await readFile('./src/home.html', 'utf8'));
    //response.json({ message: 'Funciona?'})
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log("App available on port http://localhost:" + port));