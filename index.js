require("dotenv").config();
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World");
// });
const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");
const accountingRouter = require("./routes/accounting");
const marketingRouter = require("./routes/marketing");
const dataRouter = require("./routes/data");

app.use(express.json());

app.use("/", indexRouter);

app.use("/accounting", accountingRouter);

app.use("/marketing", marketingRouter);

app.use("/data", dataRouter);

app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT, () => {
  console.log("App online");
});
