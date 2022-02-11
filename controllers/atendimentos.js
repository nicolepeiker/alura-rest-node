module.exports = app => {
  app.get('/atendimentos', (req, res) => res.send('rota atendimentos'))
  app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('rota de atendimento realizando POST')
  })
}
