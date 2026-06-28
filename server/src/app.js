const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes



//404 error handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  });
});

//Global Error handler
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`);
})
