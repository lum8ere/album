const express = require('express')
const config = require('config')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = config.get('port') || 5000

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/users', require('./routes/users'))
app.use('/albums', require('./routes/albums'))
app.use('/photos', require('./routes/photos'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Connection to MongoDB was successful')
        app.listen(PORT, () =>
            console.log(`Server has been started on localhost:${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()