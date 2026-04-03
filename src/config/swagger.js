import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import appConfig from './appConfig';

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
        url: appConfig.url,
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
  apis: [path.resolve(__dirname, '..', 'routes', '*.js')],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
