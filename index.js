require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/user_route');
const cors = require('cors');
const connectToMongoDb = require('./config/db');
connectToMongoDb();

const PORT = process.env.PORT || 8000;

// apply middleware
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',  // Allow only frontend's local URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRouter);

app.get("/",(req, res)=>{
    res.send("Api is running");
});

app.listen(PORT);