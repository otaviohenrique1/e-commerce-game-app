import Game from "../entity/Game";

export default {
  render(game: Game) {
    return {
      id: game.id,
      titulo: game.titulo,
      data_cadastro: game.data_cadastro,
    };
  }
};