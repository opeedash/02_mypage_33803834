const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Teniola's Web page</title> 
            </head>
            <body>
                <h1>My name is Teniola Adesanwo </h1>
                <h2>I am a business computing student</h2>
                <p>In my free time i love to play basketball.</p>
            </body>
        </html>
        `);
    });

        app.listen(port, () => { 
        console.log('App listening at http://localhost:${port}');
});