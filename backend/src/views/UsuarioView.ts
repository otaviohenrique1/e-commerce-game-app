import Usuario from "../entity/Usuario";
import avatarUsuarioView from "../views/AvatarUsuarioView";

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.id,
      perfil: usuario.perfil,
      email: usuario.email,
      senha: usuario.senha,
      sexo: usuario.sexo,
      data_nascimento: usuario.data_nascimento,
      pais: usuario.pais,
      cidade: usuario.cidade,
      estado: usuario.estado,
      resumo: usuario.resumo,
      celular: usuario.celular,
      url_personalizado: usuario.url_personalizado,
      avatar_usuario: avatarUsuarioView.renderMany(usuario.avatar_usuario),
      data_cadastro: usuario.data_cadastro,
    };
  },
  renderMany(usuarios: Usuario[]) {
    return usuarios.map(usuario => this.render(usuario));
  }
};