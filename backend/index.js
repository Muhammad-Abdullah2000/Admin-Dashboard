const express = require('express');
const app = express();
const ConnectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());


dotenv.config({ path: "config/config.env" });


ConnectDB();

app.use('/api/v1', require('./routes/userRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})