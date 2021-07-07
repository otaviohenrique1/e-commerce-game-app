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
    const { nome, data_cadastro } = request.body;
    const gameRepository = getRepository(Game);
    const data = { nome, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
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
    const { id, nome } = request.body;
    const gameRepository = getRepository(Game);
    const data = { nome };
    const schema = Yup.object().shape({
      nome: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const game = await gameRepository.update(id, data);
    return response.status(201).json(game);
  },
};