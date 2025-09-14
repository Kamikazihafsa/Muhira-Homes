import express from 'express';
import cors from 'cors';

const app = express(); // ✅ define 'app' first
const PORT = 3001;

app.use(cors()); // ✅ now it works

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from the TypeScript backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});