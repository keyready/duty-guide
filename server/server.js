const express = require('express')
const DB = require('./config/db.connect');
const fileupload = require('express-fileupload')
const cors = require('cors')
const path = require('path')

const app = express();

app.use(express.static(path.resolve('../client/public/')))
app.use(express.json())
app.use(cors())
app.use(fileupload({}))

require('./routes/user.routes')(app);
require('./routes/admin.routes')(app);

const StartApp = async () =>{
    try{
        await DB.sync()
        // await DB.sync({force: true})
        await app.get('/*',(req,res) =>{
            return res.sendFile(path.resolve('../client/public/index.html'))
        })
        await app.listen(5000, () => {
            console.log('Server started on http://localhost:5000')
        })
    }
    catch(e){
        console.log(e.message);
    }
}

StartApp();
