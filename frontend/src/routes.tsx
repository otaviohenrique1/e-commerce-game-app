import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CadastroUsuario } from "./pages/Usuario/Cadastro";
import { DadosUsuario } from "./pages/Usuario/Dados";
import { ListaUsuarios } from "./pages/Usuario/Lista";
import { DadosGame } from "./pages/Games/Dados";
import { ListaGames } from "./pages/Games/Lista";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <PageContainer>
          <Route component={Home} path="/home" exact />
          <Route component={CadastroUsuario} path="/usuarios/cadastro" exact />
          <Route component={DadosUsuario} path="/usuarios/:id" exact />
          <Route component={ListaUsuarios} path="/usuarios" exact />
          <Route component={DadosGame} path="/games/:id" exact />
          <Route component={ListaGames} path="/games" exact />
        </PageContainer>
      </Switch>
    </BrowserRouter>
  );
}