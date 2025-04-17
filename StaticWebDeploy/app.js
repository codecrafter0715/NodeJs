const colors = require('colors');
const express = require('express');

const app = express();
const port = 7000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
    console.log(`Server started... http://localhost:${port}`.green);
});
