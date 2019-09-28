const express = require('express')
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

const router = express.Router()
router.get('/', homeController.userMiddleware, homeController.index)
router.get('/users/login', userController.login )
router.get('/users/register', userController.register)
router.get('/post/add', postController.add)
router.post('/post/add', postController.addAction)

module.exports = router
















// router.get('/', (req, res) => {
//     res.json(req.query)
//     //GET: req.query
//     //POST: req.body
//     //PARAMETROS DA URL: req.params

//     // let nome = req.query.nome
//     // let sobrenome = req.query.sobrenome

//     // res.json({
//     //     nomeCompleto: nome+ ' '+sobrenome
//     // })
//     // res.send('Olá, !'+nome+ ' você tem '+ idade+ ' anos')
// })

// router.get('/posts/:slug', (req, res) => {
//     let slug = req.params.slug

//     res.send('slug do post: '+slug)
// })

// router.get('/sobre', (req, res) => {
//     res.send('Página Sobre')
// })

//