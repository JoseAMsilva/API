"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

const router = new (0, _express.Router)();

/**
 * @swagger
 * /tokens:
 *   post:
 *     summary: Cria um novo token de autenticação
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Token criado com sucesso.
 *       401:
 *         description: Credenciais inválidas.
 *       500:
 *         description: Erro interno no servidor.
 */
router.post('/', _TokenController2.default.store);

exports. default = router;
