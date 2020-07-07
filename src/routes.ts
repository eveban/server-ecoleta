import express from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointControler = new PointsController();
const itemsController = new ItemsController();

/** index, shiw, create, update, delete */

routes.get('/items', itemsController.index);

routes.get('/points', pointControler.index);
routes.get('/points/:id', pointControler.show);

routes.post(
  '/points',
  function (request, response) {
    response.set('Access-Control-Allow-Origin', '*');
  },
  upload.single('image'),
  // celebrate(
  //   {
  //     [Segments.BODY]: Joi.object().keys({
  //       name: Joi.string().required(),
  //       email: Joi.string().required().email(),
  //       whatsapp: Joi.string().required(),
  //       latitude: Joi.number().required(),
  //       longitude: Joi.number().required(),
  //       city: Joi.string().required(),
  //       uf: Joi.string().required().max(2),
  //       items: Joi.string().required(),
  //     }),
  //   },
  //   {
  //     abortEarly: false,
  //   },
  // ),
  pointControler.create,
);

routes.get('/', (request, response) =>
  response.json({ message: 'Server Ecoleta Ok!' }),
);

export default routes;
