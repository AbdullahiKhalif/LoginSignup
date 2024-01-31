import express from 'express'
import cors from  'cors'
import { port } from './config/config.js'
import userRouter from './routers/usersRouter.js'
import cookieParser from 'cookie-parser'
import connectToMongo from './connection/connDb.js'
const app = express()
// app.use(cor())
app.use(express.json())
app.use(cookieParser())
connectToMongo()

app.use("/api/users", userRouter);

app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
})