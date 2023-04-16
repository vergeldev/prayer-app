const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("../backend/errorMiddleware/errorHandler");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/prayers", require("./routes/routePrayers"));

app.use(errorHandler);

app.listen(port, () => console.log(`The server is starting at ${port}`));
