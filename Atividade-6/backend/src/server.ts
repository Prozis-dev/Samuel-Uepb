import express, { Request } from 'express'
import router from './routes'
import cors from 'cors'

const port =  3000

const app = express()

app.use(cors<Request>())
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`🚀 Listenning to port ${port}`)
})