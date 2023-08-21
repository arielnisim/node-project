const express = require("express");
const app = express();
const router = require("./router/router");
const morgan = require("./morgan");

app.use(express.json());
app.use(morgan);
app.use("/api", router);

const PORT = 10000;
app.listen(PORT, console.log(`server run on port: ${PORT}`));
