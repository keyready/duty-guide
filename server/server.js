const express = require('express')
const DB = require('./config/db.connect');
const fileupload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const session = require('express-session');

const app = express();

app.use(cors())
// TODO путь до статики
// app.use(express.static(path.resolve('../client/public/')))
app.use(express.static(path.resolve('../dist/')))
app.use(express.json())
app.use(fileupload({}))
app.use(session({
    secret: 'q34*3e&hta6%3rgs$@eswE#@wegwqr',
    resave: false,
    saveUninitialized: true,
    name: 'session',
    cookie: {
        // в мс!!
        maxAge: 86400000,
        sameSite: 'strict'
    }
}))

require('./routes/user.routes')(app);
require('./routes/admin.routes')(app);

const StartApp = async () => {
    try {
        await DB.sync()
        // await DB.sync({force: true})
        await app.get('/*', (req, res) => {
            // TODO путь до index.html
            // return res.sendFile(path.resolve('../client/public/index.html'))
            return res.sendFile(path.resolve('../dist/index.html'))
        })
        await app.listen(5000, () => {
            console.log('Server started on http://localhost:5000')
        })
    } catch (e) {
        console.log(e.message);
    }
}

StartApp();
