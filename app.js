const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

//import routes
//app
const app = express();


//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=> 
    console.log('DB Connected')
)

app.get("/", (req, res)=>{
    res.send("hello");
})


const port = process.env.PORT || 8000;

app.listen(port, () => {	
    console.log(`Server running on port ${port}`);	   
})
