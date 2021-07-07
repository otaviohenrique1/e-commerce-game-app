import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Compra from "../entity/Compra";
import compraView from "../views/CompraView";

export default {
  async index(request: Request, response: Response) {
    const compraRepository = getRepository(Compra);
    const compra = await compraRepository.find();
    return response.json(compra);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const compraRepository = getRepository(Compra);
    const compra = await compraRepository.findOneOrFail(id);
    return response.json(compraView.render(compra));
  },
  async create(request: Request, response: Response) {
    const { games, total_itens, total_preco, id_usuario, data_cadastro } = request.body;
    const compraRepository = getRepository(Compra);
    const data = { games, total_itens, total_preco, id_usuario, data_cadastro };
    const schema = Yup.object().shape({
      games: Yup.string().required(),
      total_itens: Yup.number().required(),
      total_preco: Yup.number().required(),
      id_usuario: Yup.number().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const compra = compraRepository.create(data);
    await compraRepository.save(compra);
    return response.status(201).json(compra);
  },
};