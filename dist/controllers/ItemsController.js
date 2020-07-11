"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ItemsController {
  async index(request, response) {
    const items = await (0, _connection.default)('items').select('*');
    const serialized = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.1.14:3335/uploads/${item.image}`
      };
    });
    response.json(serialized);
  }

}

var _default = ItemsController;
exports.default = _default;
