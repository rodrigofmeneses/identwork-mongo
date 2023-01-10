import app from "./src/app.js";

const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';


app.listen(PORT, HOST, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`)
})