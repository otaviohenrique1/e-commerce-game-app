import Usuarios from "../entity/Usuarios";

export default {
  render(usuario: Usuarios) {
    return {
      id: usuario.id,
      nome: usuario.nome,
      data_cadastro: usuario.data_cadastro,
    };
  }
};