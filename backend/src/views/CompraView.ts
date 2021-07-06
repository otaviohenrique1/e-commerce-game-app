import Compra from "../entity/Compra";

export default {
  render(compra: Compra) {
    return {
      id: compra.id,
      games: compra.games,
      total_itens: compra.total_itens,
      total_preco: compra.total_preco,
      id_usuario: compra.id_usuario,
      data_cadastro: compra.data_cadastro,
    };
  }
};