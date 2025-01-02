const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rota para autenticação
server.post("/auth", (req, res) => {
  const { username, password } = req.body;
  const db = router.db; // Acessa o db.json
  const auth = db.get("auth").value();

  if (username === auth.username && password === auth.password) {
    return res.json({
      message: "Authenticated successfully",
      token: auth.token,
    });
  } else {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
});

// Middleware para autenticação em todas as rotas
server.use((req, res, next) => {
  const token = req.headers["authorization"];
  const db = router.db; // Acessa o db.json
  const auth = db.get("auth").value();

  // Permite acesso apenas à rota de autenticação inicial
  if (req.path === "/auth" && req.method === "POST") {
    return next();
  }

  // Valida o token
  if (token !== `Bearer ${auth.token}`) {
    return res.status(403).json({
      message: "Access denied. Invalid or missing token.",
    });
  }

  next(); // Permite acesso às outras rotas
});

// Conecta o roteador padrão
server.use(router);

// Inicia o servidor
server.listen(4800, () => {
  console.log("JSON Server is running on http://localhost:4800");
});