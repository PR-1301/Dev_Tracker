const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));

app.listen(3000, ()=>{
    console.log("Server running on PORT 3000");
})
