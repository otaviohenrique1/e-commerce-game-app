import { Router } from "express";
import gamesController from "./controllers/GamesController";
import usuariosController from "./controllers/UsuariosController";
import favoritosController from "./controllers/FavoritosController";
const routes = Router();

routes.get('/games', gamesController.index);
routes.get('/games/:id', gamesController.show);
routes.post('/games', gamesController.create);
routes.put('/games/:id', gamesController.update);
routes.delete('/games/:id', gamesController.delete);

routes.get('/usuarios', usuariosController.index);
routes.get('/usuarios/:id', usuariosController.show);
routes.post('/usuarios', usuariosController.create);
routes.put('/usuarios/:id', usuariosController.update);
routes.delete('/usuarios/:id', usuariosController.delete);

routes.get('/favoritos', favoritosController.index);
routes.get('/favoritos/:id', favoritosController.show);
routes.post('/favoritos', favoritosController.create);
routes.put('/favoritos/:id', favoritosController.update);
routes.delete('/favoritos/:id', favoritosController.delete);

export default routes;
