const express = require('express');
const cors = require('cors');
const routes = require('./routes/auth'); // Ajuste a rota conforme necessário

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Servidor Rodando na Porta ${PORT}`);
});
