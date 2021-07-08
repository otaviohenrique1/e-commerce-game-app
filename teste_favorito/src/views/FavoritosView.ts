import Favoritos from "../entity/Favoritos";

export default {
  render(favorito: Favoritos) {
    return {
      id: favorito.id,
      id_game: favorito.game,
      id_usuario: favorito.usuario,
      favoritado: favorito.favoritado,
      data_cadastro: favorito.data_cadastro,
    };
  }
};