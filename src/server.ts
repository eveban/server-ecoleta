import express from 'express';
import cors from 'cors';
import path from 'path';
// import { errors } from 'celebrate';
import routes from './routes';

const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// app.use(errors());

app.listen(3335, () => {
  console.log('👀 Server started on port 3335');
});
