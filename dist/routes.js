"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _multer2 = _interopRequireDefault(require("./config/multer"));

var _PointsController = _interopRequireDefault(require("./controllers/PointsController"));

var _ItemsController = _interopRequireDefault(require("./controllers/ItemsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const upload = (0, _multer.default)(_multer2.default);
const pointControler = new _PointsController.default();
const itemsController = new _ItemsController.default();
/** index, shiw, create, update, delete */

routes.get('/items', itemsController.index);
routes.get('/points', pointControler.index);
routes.get('/points/:id', pointControler.show);
routes.post('/points', upload.single('image'), // celebrate(
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
pointControler.create);
routes.get('/', (request, response) => response.json({
  message: 'Server Ecoleta Ok!'
}));
var _default = routes;
exports.default = _default;