"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _swaggerjsdoc = require('swagger-jsdoc'); var _swaggerjsdoc2 = _interopRequireDefault(_swaggerjsdoc);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _appConfig = require('./appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Alunos',
      version: '1.0.0',
      description: 'Uma API CRUD para gerenciamento de alunos e usuários',
    },
    servers: [
      {
        url: _appConfig2.default.url,
        description: 'Servidor de Produção',
      },
      {
        url: `http://localhost:${process.env.PORT || 3001}`,
        description: 'Servidor Local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [_path2.default.resolve(__dirname, '..', 'routes', '*.js')],
};

const swaggerSpec = _swaggerjsdoc2.default.call(void 0, options);

exports. default = swaggerSpec;
