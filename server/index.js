import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js"
dotenv.config()
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb"}))

app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)

app.get("/", (req, res) => {
    res.status(200).send("BackEnd Server")
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, console.log("server is listening on port 8080"))
        
    } catch (error) {
        console.log(error)   
    }
}
startServer()
