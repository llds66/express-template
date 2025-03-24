const express = require("express");
const app = express();
const router = require("./router");
const loginRouter = require("./router/login");
const middleware = require("./middleware");
const errAuth = require('./middleware/errAuth')

app.use(middleware);
app.use("/common", loginRouter);
app.use("/auth", router);
app.use(errAuth)

app.listen(3000, () => console.log("Server ==> http://localhost:3000"));
