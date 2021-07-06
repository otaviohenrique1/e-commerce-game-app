import Categoria from "../entity/Categoria";

export default {
  render(categoria: Categoria) {
    return {
      id: categoria.id,
      nome: categoria.nome,
      id_funcionario: categoria.id_funcionario,
      data_cadastro: categoria.data_cadastro,
    };
  },
};