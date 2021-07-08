import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { BsFillStarFill } from "react-icons/bs";
import api from "../../services/api";

type DataGamesProps = { 
  id: string;
  titulo: string;
}

// type DataUsuarioProps = { 
//   id: string;
//   nome: string;
// }

export function Home() {
  const [data, setData] = useState<DataGamesProps[]>([]);
  // const [dataUsuario, setDataUsuario] = useState<DataUsuarioProps[]>([]);
  
  useEffect(() => {
    api.get('games')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(`Erro -> ${erro}`);
      });
  }, []);

  // useEffect(() => {
  //   api.get('usuarios')
  //     .then((response) => {
  //       console.log(response.data);
  //       return setDataUsuario(response.data);
  //     })
  //     .catch((erro) => {
  //       console.log(`Erro -> ${erro}`);
  //     });
  // }, []);

  return (
    <Row>
      <Col md={12}>
        <h1>Home</h1>
      </Col>
      <Col md={12}>
        {/* <ListGroup>
          {dataUsuario.map((item) => {
            return (
              <ListGroupItem
                key={item.id}
              >
                {item.nome}
              </ListGroupItem>
            );
          })}
        </ListGroup> */}
        <ListGroup>
          {(!data) ? (
            <Row>
              <Col md={12}>
                <h1>Lista vazia</h1>
              </Col>
            </Row>
          ) : (
            data.map((item) => {
              return (
                <ListGroupItem
                  key={item.id}
                >
                  <Row>
                    <Col md={10}>{item.titulo}</Col>
                    <Col md={2}>
                      <Button color="primary">
                        <BsFillStarFill size={20} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })
          )}
        </ListGroup>
      </Col>
    </Row>
  );
}