const express = require('express')
const fileupload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const crypto = require("crypto");
const fs = require('fs')

const app = express();

app.use(express.json())
app.use(cors())
app.use(fileupload({}))

const uploadedFilesPath = '../client/public/files';

app.post('/createTheory', (req, res) => {
    const filesList = req.files
    const body = req.body

    try {
        fs.mkdir(`${uploadedFilesPath}/${body.title}`, () => {})

        filesList.files.forEach(file => {
            const dot = file.name.lastIndexOf('.');

            // это поле hashName
            const newFileName =
                crypto.randomBytes(5).toString('hex') + file.name.substr(dot)

            // это поле name
            const realFileName = file.name

            file.mv(path.resolve(`${uploadedFilesPath}/${body.title}/${newFileName}`))
        })

        res.status(201).json({message: 'Добавлено'})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Все упало на хер'})
    }
})

app.listen(3256, () => {
    console.log('Server started on http://localhost:3256')
})
