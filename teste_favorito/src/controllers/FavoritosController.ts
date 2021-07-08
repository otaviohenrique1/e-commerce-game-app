import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Favoritos from "../entity/Favoritos";
import favoritoView from "../views/FavoritosView";

export default {
  async index(request: Request, response: Response) {
    const favoritoRepository = getRepository(Favoritos);
    const favorito = await favoritoRepository.find();
    return response.json(favorito);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const favoritoRepository = getRepository(Favoritos);
    const favorito = await favoritoRepository.findOneOrFail(id);
    return response.json(favoritoView.render(favorito));
  },
  async create(request: Request, response: Response) {
    const { id_game, id_usuario, favoritado } = request.body;
    const favoritoRepository = getRepository(Favoritos);
    const data = { id_game, id_usuario, favoritado };
    const schema = Yup.object().shape({
      id_game: Yup.number().required(),
      id_usuario: Yup.number().required(),
      favoritado: Yup.boolean().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const favorito = favoritoRepository.create(data);
    await favoritoRepository.save(favorito);
    return response.status(201).json(favorito);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const favoritoRepository = getRepository(Favoritos);
    const favorito = await favoritoRepository.delete(id);
    return response.status(200).json(favorito);
  },
  async update(request: Request, response: Response) {
    const { id, id_game, id_usuario, favoritado } = request.body;
    const favoritoRepository = getRepository(Favoritos);
    const data = { id_game, id_usuario, favoritado };
    const schema = Yup.object().shape({
      id_game: Yup.number().required(),
      id_usuario: Yup.number().required(),
      favoritado: Yup.boolean().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const favorito = await favoritoRepository.update(id, data);
    return response.status(201).json(favorito);
  },
};
