const express = require("express");
const cors=require('cors');

app.use(express.json());
app.use(cors());

const mainRouter=require('./routes/index');

app.use('/api/v1',mainRouter)

const app=express();
const port=3000;

app.listen(port)