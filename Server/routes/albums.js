const { Router } = require('express')
const mongoose = require('mongoose')
const router = Router()

const AlbumSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  }
})

const Albums = mongoose.model('Albums', AlbumSchema)


router.get('/', (req, res) => {
  Albums.find(req.query)
    .then(albums => res.send(albums))
    .catch((err) => res.send(err))
})

router.post('/create', (req, res) => {
  Albums.create(req.body)
    .then(albums => res.send(albums))
})

router.delete('/delete', (req, res) => {
  Albums.deleteOne({ id: req.query["id"] })
    .then(albums => res.send(albums))
})

router.put('/put'), (req, res) => {
  Albums.findByIdAndUpdate({ id: req.query["id"] }, res.body)
    .then(() => {
      Albums.findOne({ id: req.query["id"] })
        .then(albums => {
          res.send(albums)
        })
    })
}


module.exports = router