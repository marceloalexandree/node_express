const express = require("express")
const path = require("path")
const app = express()
const caminhoBase = path.join(__dirname, "templates")

app.get('/usuarios/:id', (req, resp) => {
    const id = req.params.id
    console.log(id)
    resp.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, ()=>{
    console.log("Rodando porta 3000!")
})