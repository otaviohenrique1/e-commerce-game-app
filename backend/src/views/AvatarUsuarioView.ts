import AvatarUsuario from "../entity/AvatarUsuario";

export default {
  render(avatar_usuario: AvatarUsuario) {
    return {
      id: avatar_usuario.id,
      url: `http://192.168.0.12:3333/uploads/avatar/${avatar_usuario.path}`,
      // path: `http://localhost:3333/uploads/avatar/${avatar_usuario.path}`,
    };
  },
  renderMany(avatares: AvatarUsuario[]) {
    return avatares.map(avatar => this.render(avatar));
  }
};