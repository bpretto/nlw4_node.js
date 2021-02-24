import express from 'express';
import 'reflect-metadata'; //importante importar por primeiro
import createConnection from './database';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };