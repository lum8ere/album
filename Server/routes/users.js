const { Router } = require('express')
const mongoose = require('mongoose')
const router = Router()

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    }
})

const Users = mongoose.model('Users', UserSchema)


router.get('/', (req, res) => {
    Users.find(req.query)
        .then(users => res.send(users))
        .catch((err) => res.send(err))
})

router.post('/create', (req, res) => {
    Users.create(req.body)
        .then(users => res.send(users))
})

router.delete('/delete', (req, res) => {
    Users.deleteOne({ id: req.query["id"] })
        .then(users => res.send(users))
})

router.put('/put', (req, res) => {
    Users.findByIdAndUpdate({ id: req.query["id"] }, res.body)
        .then(() => {
            Users.findOne({ id: req.query["id"] })
                .then(users => {
                    res.send(users)
                })
        })
})

module.exports = router