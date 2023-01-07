import express from 'express'
import init_db from './config/database.js'
import init_routes from './routes/index.js'

init_db()

const app = express()

init_routes(app)

export default app