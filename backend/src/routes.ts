import { Router } from "express";
import multer from "multer";
import uploadConfigAvatar from "./config/upload_avatar";
import uploadConfigCapa from "./config/upload_capa";
import uploadConfigGaleria from "./config/upload_galeria";
import gameController from "./controllers/GameController";
import funcionarioController from "./controllers/FuncionarioController";
import desenvolvedorController from "./controllers/DesenvolvedorController";
import usuarioController from "./controllers/UsuarioController";
import favoritoController from "./controllers/FavoritoController";
import compraController from "./controllers/CompraController";
import promocaoController from "./controllers/PromocaoController";
import logController from "./controllers/LogController";
import categoriaController from "./controllers/CategoriaController";

const routes = Router();

const uploadAvatar = multer(uploadConfigAvatar);
const uploadCapa = multer(uploadConfigCapa);
const uploadGaleria = multer(uploadConfigGaleria);

routes.get('/games', gameController.index);
routes.get('/games/:id', gameController.show);
routes.post('/games', uploadCapa.array('game_capa'), uploadGaleria.array('game_galeria'), gameController.create);
routes.put('/games/:id', gameController.update);
routes.delete('/games/:id', gameController.delete);

routes.get('/funcionarios', funcionarioController.index);
routes.get('/funcionarios/:id', funcionarioController.show);
routes.post('/funcionarios/login', funcionarioController.login);
routes.post('/funcionarios', funcionarioController.create);
routes.put('/funcionarios/:id', funcionarioController.update);
routes.delete('/funcionarios/:id', funcionarioController.delete);

routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.show);
routes.post('/usuarios/login', usuarioController.login);
routes.post('/usuarios', uploadAvatar.array('avatar_imagens'), usuarioController.create);
routes.put('/usuarios/:id', usuarioController.update);
routes.delete('/usuarios/:id', usuarioController.delete);

routes.get('/desenvolvedores', desenvolvedorController.index);
routes.get('/desenvolvedores/:id', desenvolvedorController.show);
routes.post('/desenvolvedores/login', desenvolvedorController.login);
routes.post('/desenvolvedores', desenvolvedorController.create);
routes.put('/desenvolvedores/:id', desenvolvedorController.update);
routes.delete('/desenvolvedores/:id', desenvolvedorController.delete);

routes.get('/favoritos', favoritoController.index);
routes.get('/favoritos/:id', favoritoController.show);
routes.post('/favoritos', favoritoController.create);
routes.put('/favoritos/:id', favoritoController.update);
routes.delete('/favoritos/:id', favoritoController.delete);

routes.get('/compras', compraController.index);
routes.get('/compras/:id', compraController.show);
routes.post('/compras', compraController.create);

routes.get('/promocoes', promocaoController.index);
routes.get('/promocoes/:id', promocaoController.show);
routes.post('/promocoes', promocaoController.create);
routes.put('/promocoes/:id', promocaoController.update);
routes.delete('/promocoes/:id', promocaoController.delete);

routes.get('/logs', logController.index);
routes.get('/logs/:id', logController.show);
routes.post('/logs', logController.create);

routes.get('/categoria', categoriaController.index);
routes.get('/categoria/:id', categoriaController.show);
routes.post('/categoria', categoriaController.create);
routes.put('/categoria/:id', categoriaController.update);
routes.delete('/categoria/:id', categoriaController.delete);

export default routes;
