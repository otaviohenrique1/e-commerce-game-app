import Game from "../entity/Game";
import gameCapaView from "../views/GameCapaView";
import gameGaleriaView from "../views/GameGaleriaView";
import gameExtrasView from "../views/GameExtrasView";

export default {
  render(game: Game) {
    return {
      id: game.id,
      nome: game.nome,
      genero: game.genero,
      desenvolvedor: game.desenvolvedor,
      distribuidora: game.distribuidora,
      data_de_lancamento: game.data_de_lancamento,
      classificacao: game.classificacao,
      serie: game.serie,
      sinopse: game.sinopse,
      descricao: game.descricao,
      preco: game.preco,
      plataforma: game.plataforma,
      idiomas_dublagem: game.idiomas_dublagem,
      idiomas_legendas: game.idiomas_legendas,
      idiomas_interface: game.idiomas_interface,
      modo_de_jogo: game.modo_de_jogo,
      game_capa: gameCapaView.renderMany(game.game_capa),
      game_galeria: gameGaleriaView.renderMany(game.game_galeria),
      game_extras: gameExtrasView.renderMany(game.game_extras),
      data_cadastro: game.data_cadastro,
    };
  },
  renderMany(games: Game[]) {
    return games.map(game => this.render(game));
  }
};