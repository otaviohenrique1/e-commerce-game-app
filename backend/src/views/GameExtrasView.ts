import GameExtras from "../entity/GameExtras";
import gameCapaView from "../views/GameCapaView";
import gameGaleriaView from "../views/GameGaleriaView";

export default {
    render(game_extras: GameExtras) {
      return {
        id: game_extras.id,
        nome: game_extras.nome,
        genero: game_extras.genero,
        desenvolvedor: game_extras.desenvolvedor,
        distribuidora: game_extras.distribuidora,
        data_de_lancamento: game_extras.data_de_lancamento,
        classificacao: game_extras.classificacao,
        serie: game_extras.serie,
        sinopse: game_extras.sinopse,
        descricao: game_extras.descricao,
        preco: game_extras.preco,
        plataforma: game_extras.plataforma,
        idiomas_dublagem: game_extras.idiomas_dublagem,
        idiomas_legendas: game_extras.idiomas_legendas,
        idiomas_interface: game_extras.idiomas_interface,
        modo_de_jogo: game_extras.modo_de_jogo,
        game_capa: gameCapaView.renderMany(game_extras.game_capa),
        game_galeria: gameGaleriaView.renderMany(game_extras.game_galeria),
        data_cadastro: game_extras.data_cadastro,
      };
    },
    renderMany(extras: GameExtras[]) {
      return extras.map(extra => this.render(extra));
    }
};