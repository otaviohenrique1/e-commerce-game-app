import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Campo } from "../../components/Campo";
import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import '../../styles/login.scss';

interface FormTypes {
  email: string;
  senha: string;
}

const initialValues = {
  email: '',
  senha: '',
};

export function Login() {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required('O campo email é obrigatorio'),
    senha: Yup
      .string()
      .min(8)
      .max(32)
      // .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .required('O campo senha é obrigatorio'),
  });
  
  async function handleSubmitForm(values: FormTypes) {
    alert(`Email: ${values.email}`);
    history.push('/home');
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-3 mt-5">
          <h1>Login</h1>
        </Col>
        <Col md={12}>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmitForm}
          >
            {({errors, touched}) => (
              <Form>
                <div className="mt-2">
                  <Campo
                    className="form-control"
                    htmlFor="email"
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite a email do usuario"
                    erro={(errors.email && touched.email) ? (<Alert color="danger">{errors.email}</Alert>) : null}
                  />
                </div>
                <div className="mt-2">
                  <Campo
                    className="form-control"
                    htmlFor="senha"
                    label="Senha"
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Digite a senha do usuario"
                    erro={(errors.senha && touched.senha) ? (<Alert color="danger">{errors.senha}</Alert>) : null}
                  />
                </div>
                <Row className="mt-5">
                  <Col md={12} className="button-container">
                    <ButtonGroup>
                      <Button
                        color="primary"
                        type="submit"
                        className="btn-entrar"
                      >
                        Entrar
                      </Button>
                      <Button color="danger" type="reset">Limpar</Button>
                      <Link to="/usuarios/cadastro" className="botao-link">
                        <Button
                          color="info"
                          type="button"
                          className="btn-novo-usuario"
                        >
                          Novo usuario
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}