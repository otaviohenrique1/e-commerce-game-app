import Favoritos from "../entity/Favoritos";

export default {
  render(favorito: Favoritos) {
    return {
      id: favorito.id,
      id_game: favorito.game.id,
      id_usuario: favorito.usuario.id,
      favoritado: favorito.favoritado
    };
  },
  renderFavoriteById(favorito: Favoritos) {
    return {
      id_game: favorito.game.id,
    };
  }
};