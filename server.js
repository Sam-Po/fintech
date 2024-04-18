const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const userRouter = require('./routers/userRouter');
const requestRouter = require('./routers/requestRouter');

const PORT = 5002
const uri = 'mongodb+srv://user:user@cluster0.t7ubdff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/requests", requestRouter)

const start = async () => {
  try {
    await mongoose.connect(uri)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
