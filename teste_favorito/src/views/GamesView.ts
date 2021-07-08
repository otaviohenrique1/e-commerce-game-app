import Games from "../entity/Games";

export default {
  render(game: Games) {
    return {
      id: game.id,
      titulo: game.titulo
    };
  }
};