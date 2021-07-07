import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Desenvolvedor from "../entity/Desenvolvedor";
import desenvolvedorView from "../views/DesenvolvedorView";

export default {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    let desenvolvedorFoiEncontado: any;
    const desenvolvedorRepository = getRepository(Desenvolvedor);
    try {
      desenvolvedorFoiEncontado = await desenvolvedorRepository.findOne({ email: email });
    } catch (error) {
      const mensagemErro = "Login falhou, tente novamente mais tarde";
      return response.status(500).json({ message: mensagemErro });
    }
    if (!desenvolvedorFoiEncontado || desenvolvedorFoiEncontado.senha !== senha) {
      const mensagemErro = "Dados invalidos";
      console.log(`${email}, ${senha}`);
      return response.status(401).json({ message: mensagemErro });
    }
    let data_desenvolvedor = {
      id: desenvolvedorFoiEncontado.id,
      nome: desenvolvedorFoiEncontado.nome,
      email: desenvolvedorFoiEncontado.email,
    };
    return response.status(200).json({ message: "Logado com sucesso!", data_desenvolvedor });
  },
  async index(request: Request, response: Response) {
    const desenvolvedorRepository = getRepository(Desenvolvedor);
    const desenvolvedor = await desenvolvedorRepository.find();
    return response.json(desenvolvedor);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const desenvolvedorRepository = getRepository(Desenvolvedor);
    const desenvolvedor = await desenvolvedorRepository.findOneOrFail(id);
    return response.json(desenvolvedorView.render(desenvolvedor));
  },
  async create(request: Request, response: Response) {
    const { nome, email, senha, telefone, celular, pais, cidade, estado, data_cadastro } = request.body;
    const desenvolvedorRepository = getRepository(Desenvolvedor);
    const data = { nome, email, senha, telefone, celular, pais, cidade, estado, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      telefone: Yup.string().required(),
      celular: Yup.string().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      data_cadastro: Yup.date().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const desenvolvedor = desenvolvedorRepository.create(data);
    await desenvolvedorRepository.save(desenvolvedor);
    return response.status(201).json(desenvolvedor);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const desenvolvedorRepository = getRepository(Desenvolvedor);
    const desenvolvedor = await desenvolvedorRepository.delete(id);
    return response.status(200).json(desenvolvedor);
  },
  async update(request: Request, response: Response) {
    const { id, nome, email, senha, telefone, celular, pais, cidade, estado } = request.body;
    const desenvolvedorRepository = getRepository(Desenvolvedor);
    const data = { nome, email, senha, telefone, celular, pais, cidade, estado };
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      telefone: Yup.string().required(),
      celular: Yup.string().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const desenvolvedor = await desenvolvedorRepository.update(id, data);
    return response.status(201).json(desenvolvedor);
  },
};
