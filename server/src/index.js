const express = require("express");
const cors = require("cors")

const mainRouter = require("./router/main.router")

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

app.use("/", mainRouter)

app.listen(PORT, () => {
    console.log("App running in", PORT)
})


