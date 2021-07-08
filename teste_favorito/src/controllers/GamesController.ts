import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Games from "../entity/Games";
import gameView from "../views/GamesView";

export default {
  async index(request: Request, response: Response) {
    const gameRepository = getRepository(Games);
    const game = await gameRepository.find();
    return response.status(201).json(game);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const gameRepository = getRepository(Games);
    const game = await gameRepository.findOneOrFail(id);
    return response.status(201).json(gameView.render(game));
  },
  async create(request: Request, response: Response) {
    const { titulo, data_cadastro } = request.body;
    const gameRepository = getRepository(Games);
    const data = { titulo, data_cadastro };
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
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
    const gameRepository = getRepository(Games);
    const game = await gameRepository.delete(id);
    return response.status(201).json(game);
  },
  async update(request: Request, response: Response) {
    const { id, titulo } = request.body;
    const gameRepository = getRepository(Games);
    const data = { titulo };
    const schema = Yup.object().shape({
      titulo: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const game = await gameRepository.update(id, data);
    return response.status(201).json(game);
  },
};