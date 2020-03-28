import { Router } from 'express';
import OngController from './controllers/OngController';

const routes = new Router();

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

export default routes;
