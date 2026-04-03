"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Retorna a lista de todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Sucesso. Retorna um array de alunos.
 *       500:
 *         description: Erro interno no servidor.
 */
router.get('/', _AlunoController2.default.index);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Retorna os detalhes de um aluno específico
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os detalhes do aluno.
 *       404:
 *         description: Aluno não encontrado.
 */
router.get('/:id', _AlunoController2.default.show);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               email:
 *                 type: string
 *               idade:
 *                 type: integer
 *               peso:
 *                 type: number
 *               altura:
 *                 type: number
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       401:
 *         description: Autenticação requerida.
 *       500:
 *         description: Erro interno no servidor.
 */
router.post('/', _loginRequired2.default, _AlunoController2.default.store);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza os dados de um aluno específico
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               email:
 *                 type: string
 *               idade:
 *                 type: integer
 *               peso:
 *                 type: number
 *               altura:
 *                 type: number
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os detalhes do aluno.
 *       400:
 *         description: Dados inválidos.
 *       401:
 *         description: Autenticação requerida.
 *       404:
 *         description: Aluno não encontrado.
 */
router.put('/:id', _loginRequired2.default, _AlunoController2.default.update);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Exclui um aluno específico
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do aluno a ser excluído
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso. Retorna um objeto indicando que o aluno foi excluído.
 *       401:
 *         description: Autenticação requerida.
 *       404:
 *         description: Aluno não encontrado.
 */
router.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;
