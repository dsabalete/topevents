const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
})

const posterSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String,
})

const Poster = mongoose.model('Poster', posterSchema)

app.get('/api/posters', async (req, res) => {
    try {
        const posters = await Poster.find()
        res.json(posters)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})