import Game from "../entity/Game";

export default {
  render(game: Game) {
    return {
      id: game.id,
      nome: game.nome,
      data_cadastro: game.data_cadastro,
    };
  }
};