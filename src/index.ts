import 'module-alias/register'
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import route from '$/routes'
import cors from 'cors'

dotenv.config()

const app: Express = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = process.env.PORT

// Here we assign out routes
route(app)

// Listening
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
