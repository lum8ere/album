const { Router } = require('express')
const mongoose = require('mongoose')
const router = Router()

const PhotoSchema = new mongoose.Schema({
    albumId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
})

const Photos = mongoose.model('Photos', PhotoSchema)


router.get('/', (req, res) => {
    Photos.find(req.query)
        .then(photos => res.send(photos))
        .catch((err) => res.send(err))
})

router.post('/create', (req, res) => {
    Photos.create(req.body)
        .then(photos => res.send(photos))
})

router.delete('/delete', (req, res) => {
    Photos.deleteOne({ id: req.query["id"] })
        .then(photos => res.send(photos))
})

router.put('/put', (req, res) => {
    Photos.findByIdAndUpdate({ id: req.query["id"] }, res.body)
        .then(() => {
            Photos.findOne({ id: req.query["id"] })
                .then(photos => {
                    res.send(photos)
                })
        })
})

module.exports = router