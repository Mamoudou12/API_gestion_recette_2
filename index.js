// index.js
import express from 'express';
import recetteRoutes from './src/routes/recetteRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', recetteRoutes);
app.use('/api', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
