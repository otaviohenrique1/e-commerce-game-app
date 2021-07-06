import GameCapa from "../entity/GameCapa";

export default {
    render(game_capa: GameCapa) {
        return {
            id: game_capa.id,
            url: `http://192.168.0.12:3333/uploads/capa/${game_capa.path}`,
        };
        // url: `http://localhost:3333/uploads/capa/${image.path}`,
    },
    renderMany(capas: GameCapa[]) {
        return capas.map(capa => this.render(capa));
    }
};