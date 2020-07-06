import express from 'express';
import cors from 'cors';
import path from 'path';
// import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// app.use(errors());

app.listen(3335, () => {
  console.log('👀 Server started on port 3335');
});
