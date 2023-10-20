const express = require('express')
const app = express()
const port = 3000
const data = require('./data.js')


app.get('/',(req,response) => {
    
    response.json([
        {
            id: 1,
            nome: "Max"
        }
    ]);
})

app.get('/api/produtos',(req,res) => {
    
    res.send('Ola2!!!!:'+data)
})

app.listen(port, ()=>{
     console.log(`Rodando:${port}`)
    })

