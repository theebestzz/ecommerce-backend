const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
dbConnect();

const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middleware/errorHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
