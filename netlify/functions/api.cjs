const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

const handler = async (event, context) => {
    try {
        const client = new MongoClient(process.env.MONGODB_URI)
        await client.connect()
        const db = client.db('tercer_espacio')
        const data = await db.collection('posters').find({}).toArray()
        client.close()
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        console.error('Database error:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Database connection error' })
        }
    }
}

exports.handler = handler
