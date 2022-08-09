 const express = require('express')

 const app = express()


 app.get('/', (request, response) => {
    //return response.send("Hello world")
     return response.json({message: "Hello world ignite!"})
 });

 app.listen(3333)