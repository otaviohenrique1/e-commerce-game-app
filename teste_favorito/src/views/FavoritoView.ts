import Favorito from "../entity/Favorito";

export default {
  render(favorito: Favorito) {
    return {
      id: favorito.id,
      id_game: favorito.id_game,
      id_usuario: favorito.id_usuario,
      favoritado: favorito.favoritado,
      data_cadastro: favorito.data_cadastro,
    };
  }
};