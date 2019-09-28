exports.userMiddleware = (req, res, next) => {
    let info = {name: 'Gustavo', id: 123}
    req.userInfo = info
    next()
}

exports.index = (req,res) => {
    res.render('home', {
        pageTitle: 'Título de teste',
        nome: req.query.nome,
        userInfo: req.userInfo,
        idade: 560,
        mostrar: true,
        ingredientes: [
            {nome:'Arroz', qt: '20g'},
            {nome: 'Macarrão', qt:'100g'}
        ],
        interesses:['node','js', 'css','html', 'graphql']
    })
}