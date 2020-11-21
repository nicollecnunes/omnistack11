const express = require('express'); /*a constante express tem as funcionalidades do express*/
const cors = require('cors');
const routes = require('./routes'); /*ponto barra pq é arquivo*/


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);