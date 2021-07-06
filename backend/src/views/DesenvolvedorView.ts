import Desenvolvedor from "../entity/Desenvolvedor";

export default {
  render(desenvolvedor: Desenvolvedor) {
    return {
      id: desenvolvedor.id,
      nome: desenvolvedor.nome,
      email: desenvolvedor.email,
      senha: desenvolvedor.senha,
      telefone: desenvolvedor.telefone,
      celular: desenvolvedor.celular,
      pais: desenvolvedor.pais,
      cidade: desenvolvedor.cidade,
      estado: desenvolvedor.estado,
      data_cadastro: desenvolvedor.data_cadastro,
    };
  }
};