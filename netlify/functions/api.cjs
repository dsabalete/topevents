const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

const handler = async (event, context) => {
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    const db = client.db('tercer_espacio')
    const data = await db.collection('posters').find({}).toArray()

    console.log(data)

    client.close()
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}

// TODO: only for testing
handler()

exports.handler = handler
