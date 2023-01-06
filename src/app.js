import express from 'express'
import init_db from './config/database.js'

init_db()

const app = express()

export default app