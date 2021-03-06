import Router from 'express';

import ensureAuthenticated from '@middlewares/ensureAuthenticated';

import PiusController from '../controllers/PiusController';
import PiuLikesController from '../controllers/PiuLikesController';

const piusRouter = Router();

const piusController = new PiusController();
const piuLikesController = new PiuLikesController();

piusRouter.post('/', ensureAuthenticated, piusController.create);
piusRouter.patch('/', ensureAuthenticated, piuLikesController.create);

export default piusRouter;
