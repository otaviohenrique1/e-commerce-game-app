import { Router } from "express";
import gameController from "./controllers/GameController";
import usuarioController from "./controllers/UsuarioController";
import favoritoController from "./controllers/FavoritoController";
const routes = Router();

routes.get('/games', gameController.index);
routes.get('/games/:id', gameController.show);
routes.post('/games', gameController.create);
routes.put('/games/:id', gameController.update);
routes.delete('/games/:id', gameController.delete);

routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.show);
routes.post('/usuarios', usuarioController.create);
routes.put('/usuarios/:id', usuarioController.update);
routes.delete('/usuarios/:id', usuarioController.delete);

routes.get('/favoritos', favoritoController.index);
routes.get('/favoritos/:id', favoritoController.show);
routes.post('/favoritos', favoritoController.create);
routes.put('/favoritos/:id', favoritoController.update);
routes.delete('/favoritos/:id', favoritoController.delete);

export default routes;
