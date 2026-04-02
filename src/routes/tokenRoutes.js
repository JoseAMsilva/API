import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

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
router.post('/', tokenController.store);

export default router;
