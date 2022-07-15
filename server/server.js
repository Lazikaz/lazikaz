const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
app.use(express.json())
app.use(cors())


//homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../styles.css"))
})

app.get("/projectimage", (req, res) => {
    res.sendFile(path.join(__dirname, "../projectimage.png"))
})

app.listen(process.env.PORT || 4005, () => console.log("server running"))