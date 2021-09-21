import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction, response } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

//import '@shared/container';
//import '@shared/database';

//import SwaggerUi from 'swagger-ui-express';

//const SwaggerDocumento = require ('../../docs/swagger.json');
//let options =

const app = express();

// Cors
app.use(cors());

// JSON
app.use(express.json());

//Routes
app.use(routes);

//Celebrate
app.use(errors());

//Documentação
//app.use ('/', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocument,options));

//Global Exception Handler Middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
