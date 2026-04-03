import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

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
router.post('/', loginRequired, fotoController.store);

export default router;
