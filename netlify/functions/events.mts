import { MongoClient } from 'mongodb'
import type { Context } from "@netlify/functions"
import dotenv from 'dotenv'
dotenv.config()

export default async (req: Request, context: Context) => {
    const uri = process.env.MONGODB_URI
    if (!uri) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'MONGODB_URI is not defined' }),
        }
    }

    const client = new MongoClient(uri)

    try {
        await client.connect()
        const db = client.db('tercer_espacio')
        const data = await db.collection('posters').find({}).toArray()

        console.log(data)

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        console.error('Error connecting to the database or fetching data:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error connecting to the database or fetching data' }),
        }
    } finally {
        await client.close()
    }
}