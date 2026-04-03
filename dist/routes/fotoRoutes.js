"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);

const router = new (0, _express.Router)();

/**
 * @swagger
 * /fotos:
 *   post:
 *     summary: Faz o upload de uma foto de perfil
 *     tags: [Fotos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               aluno_id:
 *                 type: string
 *                 description: ID do aluno a que a foto pertence
 *               foto:
 *                 type: string
 *                 format: binary
 *                 description: O arquivo da imagem (jpg, png, jpeg)
 *     responses:
 *       200:
 *         description: Foto enviada com sucesso
 *       400:
 *         description: Erro no envio do arquivo (arquivo inválido ou ausente)
 *       401:
 *         description: Não autorizado (token inválido ou ausente)
 */
router.post('/', _loginRequired2.default, _FotoController2.default.store);

exports. default = router;
