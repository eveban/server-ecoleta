import express from 'express';
import cors from 'cors';
import path from 'path';
// import { errors } from 'celebrate';
import routes from './routes';

const app = express();

// app.use(cors());

const corsOptions = {
  origin: '*', // client (todo mundo pode acessar)
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// app.use(errors());

app.listen(3335, () => {
  console.log('👀 Server started on port 3335');
});
