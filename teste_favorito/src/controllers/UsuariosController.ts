import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuarios from "../entity/Usuarios";
import usuarioView from "../views/UsuariosView";

export default {
  async index(request: Request, response: Response) {
    const usuarioRepository = getRepository(Usuarios);
    const usuario = await usuarioRepository.find();
    return response.json(usuario);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuarios);
    const usuario = await usuarioRepository.findOneOrFail(id);
    return response.json(usuarioView.render(usuario));
  },
  async create(request: Request, response: Response) {
    const { nome, data_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuarios);
    const data = { nome, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = usuarioRepository.create(data);
    await usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuarios);
    const usuario = await usuarioRepository.delete(id);
    return response.status(200).json(usuario);
  },
  async update(request: Request, response: Response) {
    const { id, nome } = request.body;
    const usuarioRepository = getRepository(Usuarios);
    const data = { nome };
    const schema = Yup.object().shape({
      nome: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = await usuarioRepository.update(id, data);
    return response.status(201).json(usuario);
  },
};