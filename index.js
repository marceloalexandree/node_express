const express = require("express")
const path = require("path")
const app = express()
const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastrar/salvar', (req, resp) => {
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha

    console.log(`Nome do usuário: ${nome}`)
    console.log(`E-mail do usuário: ${email}`)
    console.log(`Senha do usuário: ${senha}`)
})

app.get('/usuarios/:id', (req, resp) => {
    const id = req.params.id
    console.log('Usuário: ', id)
    resp.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/cadastrar', (req, resp) => {
    resp.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, ()=>{
    console.log("Rodando porta 3000!")
})