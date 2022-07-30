const express = require('express');
const app = express();
const port = 3030;

const mainRouter = require('./routers/main');

/*static*/
app.use(express.static('public'));

/*root */
app.use('/', mainRouter);


app.listen(3030,() => console.log(`server running in http://localhost:${port}`));