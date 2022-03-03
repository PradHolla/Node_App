const express = require('express');
const app = express();

// Listen for requests
app.listen(3000, () => {
    console.log('Listening on port 3000');
});