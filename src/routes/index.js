import express from "express"
import companies from "./companies.js"

function init_routes(app) {
    app.use(express.json())

    app.get('', (req, res) => {
        res.json({ message: 'IdentWork' })
    })

    app.use('/companies', companies)
}

export default init_routes