import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { BsFillStarFill } from "react-icons/bs";
import api from "../../../services/api";

type DataGamesProps = { 
  id: string;
  titulo: string;
}

export function ListaGames() {
  const [data, setData] = useState<DataGamesProps[]>([]);
  
  useEffect(() => {
    api.get('/games')
      .then((response) => {
        return setData(response.data);
      })
      .catch((erro) => {
        console.log(`Erro -> ${erro}`);
      });
  }, []);

  return (
    <Row>
      <Col md={12}>
        <h1>Lista de games</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          {(data) ? (
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
          ) : (
            <Row>
              <Col md={12}>
                <h1>Lista vazia</h1>
              </Col>
            </Row>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
}