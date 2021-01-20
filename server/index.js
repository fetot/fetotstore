const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_fetotstore'
})

connection.connect()

const port = 3001
app.use('/static', express.static('statics'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM `users`', function (err, rows, fields) {
        if (err) throw err
      
        res.json(rows)
    })
})

app.get('/products', (req, res) => {
    connection.query('SELECT `products`.*, `brands`.`name` as `brand` FROM `products` JOIN `brands` ON `products`.`brand` = `brands`.`id`', function (err, rows, fields) {
        if (err) throw err
      
        res.json(rows)
    })
})

app.get('/product/:id', (req, res) => {
    connection.query('SELECT `products`.*, `brands`.`name` as `brand` FROM `products` JOIN `brands` ON `products`.`brand` = `brands`.`id` WHERE `products`.`id` = ' + req.params.id + ' LIMIT 1', (err, rows, fields) => {
        if (err) throw err
        res.json(rows[0])
    })
})

var secret_key = 'ferdies_tampan'

app.post('/register', (req ,res)=>{
    var data = {
        username : req.body.username,
        password : req.body.password,
        email : req.body.password,
        notelp : req.body.notelp,
        namadepan : req.body.namadepan,
        namabelakang : req.body.namabelakang,
        jeniskelamin : req.body.jenkel,
        tgl_lahir : req.body.tgl_lahir,
    }

    connection.query('INSERT INTO users SET ?', data, (err, result)=>{
        var payload = {
            id : result.insertId,
            username : data.username
        }
        var token = jwt.sign(payload, secret_key, {expiresIn : '2d'})

        res.json({
            id : result.insertId,
            token : token
        })
    })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    connection.query('SELECT `username`, `password` FROM `users` WHERE `username` = \'' + req.body.username + '\'', (err, rows, fields) => {
        if (err) throw err
        
        if (rows.length == 0) {
            res.status(401).json({error: true, message: "Username atau Password salah!"})
        } else {
            if (req.body.password == rows[0].password) {
                var token = jwt.sign({
                    userId: rows[0].id,
                    username: rows[0].username
                }, 'varikokel');
                res.json({
                    error: false,
                    message: "Anda berhasil masuk...",
                    user: {
                        username: rows[0].username,
                        token: token
                    }
                })
            } else {
                res.status(401).json({error: true, message: "Username atau Password salah!"})
            }
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))