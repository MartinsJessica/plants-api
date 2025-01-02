// Importa o Express e o Axios
const express = require('express');
const axios = require('axios');
const app = express();

// Define a porta
const PORT = 3000;

// Middleware para parsear JSON no corpo da requisição
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Express!');
});

// Rota /plants com a lógica solicitada
app.get('/plants', async (req, res) => {
  try {
    // 1. Autentica e pega o token
    const authResponse = await axios.post('http://localhost:4800/auth', {
      username: 'jessica',
      password: 'jessica123',
    });

    console.log('authResponse', authResponse.data)

    const token = authResponse.data.token; // Supondo que o token esteja na propriedade 'token'

    // 2. Requisita os dados de plantas com o token no header
    const plantsResponse = await axios.get('http://localhost:4800/plants', {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho Authorization
      },
    });

    // 3. Retorna a resposta das plantas
    res.json(plantsResponse.data);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).send('Erro ao buscar dados das plantas');
  }
});

app.get('/plants/:id', async (req, res) => {
    try {
      const { id } = req.params; // Pega o id da planta da URL
  
      // 1. Autentica e pega o token
      const authResponse = await axios.post('http://localhost:4800/auth', {
        username: 'jessica',
        password: 'jessica123',
      });
  
      const token = authResponse.data.token; // Supondo que o token esteja na propriedade 'token'
  
      // 2. Requisita os dados da planta específica com o token no header
      const plantResponse = await axios.get(`http://localhost:4800/plants/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho Authorization
        },
      });
  
      // 3. Retorna a resposta da planta específica
      res.json(plantResponse.data);
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).send('Erro ao buscar dados da planta específica');
    }
  });

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
