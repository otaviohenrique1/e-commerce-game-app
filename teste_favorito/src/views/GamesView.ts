import Games from "../entity/Games";

export default {
  render(game: Games) {
    return {
      id: game.id,
      titulo: game.titulo,
      data_cadastro: game.data_cadastro,
    };
  }
};