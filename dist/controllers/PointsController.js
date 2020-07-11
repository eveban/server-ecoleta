"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PointsController {
  async index(request, response) {
    const {
      city,
      uf,
      items
    } = request.query;
    const parsedItems = String(items).split(',').map(item => Number(item.trim()));
    console.log(parsedItems);
    const points = await (0, _connection.default)('points').join('points_items', 'points.id', '=', 'points_items.points_id').whereIn('points_items.items_id', parsedItems).where('city', String(city)).where('uf', String(uf)).distinct().select('points.*');
    const serializedPoint = points.map(point => {
      return { ...point,
        image_url: `http://192.168.1.14:3335/uploads/${point.image}`
      };
    });
    return response.json(serializedPoint);
  }

  async show(request, response) {
    const {
      id
    } = request.params;
    const point = await (0, _connection.default)('points').where('id', id).first();

    if (!point) {
      return response.status(400).json({
        message: 'Point not found'
      });
    }

    const serializedPoint = { ...point,
      image_url: `http://192.168.1.14:3335/uploads/${point.image}`
    };
    const items = await (0, _connection.default)('items').join('points_items', 'items.id', '=', 'points_items.items_id').where('points_items.points_id', id).select('items.title');
    return response.json({
      point: serializedPoint,
      items
    });
  }

  async create(request, response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      numero,
      items
    } = request.body;
    console.log(request.body);
    const trx = await _connection.default.transaction();
    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      numero
    };
    const insertedIds = await trx('points').insert(point);
    const points_id = insertedIds[0];
    const pointItems = items.split(',').map(item => Number(item.trim())).map(items_id => {
      return {
        items_id,
        points_id
      };
    });
    await trx('points_items').insert(pointItems);
    await trx.commit();
    return response.json({
      id: points_id,
      ...point
    });
  }

}

var _default = PointsController;
exports.default = _default;
