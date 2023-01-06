import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()

function init_db() {
    /**Connection with mongo db database */
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('Successful Connection')
    } catch (error) {
        console.log(`Something wrong - ${error}`)
    }
}

export default init_db