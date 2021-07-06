import GameGaleria from "../entity/GameGaleria";

export default {
    render(game_galeria: GameGaleria) {
        return {
            id: game_galeria.id,
            url: `http://192.168.0.12:3333/uploads/galeria/${game_galeria.path}`,
        };
        // url: `http://localhost:3333/uploads/${image.path}`,
    },
    renderMany(galeria_imagens: GameGaleria[]) {
      return galeria_imagens.map(galeria_imagem => this.render(galeria_imagem));
    }
};