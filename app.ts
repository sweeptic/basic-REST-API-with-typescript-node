
import express from 'express';
import todosRoutes from './routes/todos'; //always pick the default export from this file 



const app = express();

const port = 3000;

app.use(todosRoutes);


app.listen({ port: 3000 });