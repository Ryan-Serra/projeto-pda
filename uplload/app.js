const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configuração do multer para lidar com o upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // O diretório onde os arquivos serão armazenados
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // O nome original do arquivo será mantido
  }
});
const upload = multer({ storage: storage });

// Servir os arquivos estáticos (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com o upload de arquivos
app.post('/uploads', upload.single('fileUpload'), (req, res) => {
  // Log para indicar que uma solicitação POST foi recebida
  console.log('Recebida solicitação POST para /uploads');

  // Aqui você pode fazer qualquer coisa com o arquivo enviado
  // Por exemplo, responder com uma mensagem indicando sucesso
  res.send('Arquivo enviado com sucesso!');
});

// Log para indicar que o servidor está rodando
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
