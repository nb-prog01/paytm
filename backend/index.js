const express = require("express");
const cors=require('cors');
const port=3000;
const app=express();
app.use(cors({credentials:true}));
app.use(express.json());


const mainRouter=require('./routes/index');

app.use('/api/v1',mainRouter)

app.listen(port)