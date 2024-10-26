const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const userRouter = require("./routes/index"); 
const connectDB = require('./config/db')
const rootrouter = require("./routes/index")

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
connectDB();


app.use("/api/v1", rootrouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
