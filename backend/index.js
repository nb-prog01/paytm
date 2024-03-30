const express = require("express");
const cors=require('cors');

const mainRouter=require('./routes/index');
const app=express();
const port=3000;

app.use(express.json());
app.use(cors());
app.use('/api/v1',mainRouter)


app.listen(port)