"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { errors } from 'celebrate';
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use('/uploads', _express.default.static(_path.default.resolve(__dirname, '..', 'uploads'))); // app.use(errors());

app.listen(3335, () => {
  console.log('👀 Server started on port 3335');
});