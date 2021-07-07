import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Game from "../entity/Game";
import gameView from "../views/GameView";

export default {
  async index(request: Request, response: Response) {
    const gameRepository = getRepository(Game);
    const game = await gameRepository.find();
    return response.json(game);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const gameRepository = getRepository(Game);
    const game = await gameRepository.findOneOrFail(id);
    return response.json(gameView.render(game));
  },
  async create(request: Request, response: Response) {
    const { nome, genero, desenvolvedor, distribuidora, data_de_lancamento, classificacao, serie, sinopse, descricao, preco, plataforma, idiomas_dublagem, idiomas_legendas, idiomas_interface, modo_de_jogo, game_capa, game_galeria, game_extras, data_cadastro } = request.body;
    const gameRepository = getRepository(Game);
    const data = { nome, genero, desenvolvedor, distribuidora, data_de_lancamento, classificacao, serie, sinopse, descricao, preco, plataforma, idiomas_dublagem, idiomas_legendas, idiomas_interface, modo_de_jogo, game_capa, game_galeria, game_extras, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      genero: Yup.string().required(),
      desenvolvedor: Yup.string().required(),
      distribuidora: Yup.string().required(),
      data_de_lancamento: Yup.date().required(),
      classificacao: Yup.string().required(),
      serie: Yup.string().required(),
      sinopse: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.number().required(),
      plataforma: Yup.string().required(),
      idiomas_dublagem: Yup.string().required(),
      idiomas_legendas: Yup.string().required(),
      idiomas_interface: Yup.string().required(),
      modo_de_jogo: Yup.string().required(),
      game_capa: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      ),
      game_galeria: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      ),
      game_extras: Yup.array(
        Yup.object().shape({
          id: Yup.number().required()
        })
      ),
      id_funcionario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const game = gameRepository.create(data);
    await gameRepository.save(game);
    return response.status(201).json(game);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const gameRepository = getRepository(Game);
    const game = await gameRepository.delete(id);
    return response.status(200).json(game);
  },
  async update(request: Request, response: Response) {
    const { id, nome, genero, desenvolvedor, distribuidora, data_de_lancamento, classificacao, serie, sinopse, descricao, preco, plataforma, idiomas_dublagem, idiomas_legendas, idiomas_interface, modo_de_jogo, game_capa, game_galeria, game_extras, data_cadastro } = request.body;
    const gameRepository = getRepository(Game);
    const data = { nome, genero, desenvolvedor, distribuidora, data_de_lancamento, classificacao, serie, sinopse, descricao, preco, plataforma, idiomas_dublagem, idiomas_legendas, idiomas_interface, modo_de_jogo, game_capa, game_galeria, game_extras, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      genero: Yup.string().required(),
      desenvolvedor: Yup.string().required(),
      distribuidora: Yup.string().required(),
      data_de_lancamento: Yup.date().required(),
      classificacao: Yup.string().required(),
      serie: Yup.string().required(),
      sinopse: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.number().required(),
      plataforma: Yup.string().required(),
      idiomas_dublagem: Yup.string().required(),
      idiomas_legendas: Yup.string().required(),
      idiomas_interface: Yup.string().required(),
      modo_de_jogo: Yup.string().required(),
      game_capa: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      ),
      game_galeria: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      ),
      game_extras: Yup.array(
        Yup.object().shape({
          id: Yup.number().required()
        })
      ),
      id_funcionario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const game = await gameRepository.update(id, data);
    return response.status(201).json(game);
  },
};