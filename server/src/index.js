const express = require("express");

const mainRouter = require("./router/main.router")

const app = express();
const PORT = 3000;


app.use("/", mainRouter)

app.listen(PORT, () => {
    console.log("App running in", PORT)
})


