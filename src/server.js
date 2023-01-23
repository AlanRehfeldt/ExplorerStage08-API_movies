require("express-async-errors")

const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const AppError = require("./utils/appError")
const migrationsRun = require("./database/sqlite/migrations")
const uploadConfig = require("./config/upload")

migrationsRun()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)

app.use(( error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(3335, () => console.log("Server is running on port 3335"))