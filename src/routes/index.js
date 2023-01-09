import express from "express";
import jsonErrorHandler from "../middleware/jsonErroHandler.js";
import companies from "./routes.companies.js";
import employees from "./routes.employees.js";

function init_routes(app) {
    app.use(express.json())
    app.use(jsonErrorHandler);

    app.get('', (req, res) => {
        res.json({ message: 'IdentWork' })
    })

    app.use('/companies', companies)
    app.use('/employees', employees)
}

export default init_routes