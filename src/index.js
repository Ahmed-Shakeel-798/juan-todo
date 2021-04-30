const express = require("express");

const uRoutes = require("../src/routes/users");

const app = express();

app.use(express.json());
app.use('/users', uRoutes);

app.listen(3000, () => {
    console.log("server up and running");
})