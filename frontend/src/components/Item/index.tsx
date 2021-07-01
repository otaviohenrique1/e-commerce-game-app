import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle,  CardTitle, CardFooter, ListGroup, ListGroupItem } from "reactstrap";
import { FaCartPlus } from "react-icons/fa";

interface ItemProps {
  id?: string;
  nome?: string;
  imagem?: string;
  preco?: number;
  avaliacao: string;
  plataformas: string;
  to: string;
}

export function ItemLista(props: ItemProps) {
  return (
    <ListGroup horizontal key={props.id}>
      <ListGroupItem>
        <img
          src={props.imagem} alt={props.nome}
          width={50}
        />
      </ListGroupItem>
        {props.nome}
        <br />
        {props.plataformas}
      <ListGroupItem>
        {props.preco}
      </ListGroupItem>
      <ListGroupItem>
        <Button color="primary">
          <FaCartPlus size={10} />
        </Button>
      </ListGroupItem>
    </ListGroup>
  );
}

export function ItemTabela(props: ItemProps) {
  return (
    <Link to={props.to}>
      <tr key={props.id}>
        <td>
          <img
            src={props.imagem} alt={props.nome}
            width={50}
          />
        </td>
        <td>
          {props.nome}
          <br />
          {props.plataformas}
        </td>
        <td>
          {props.preco}
        </td>
        <td>
          <Button color="primary">
            <FaCartPlus size={10} />
          </Button>
        </td>
      </tr>
    </Link>
  );
}

export function ItemCard(props: ItemProps) {
  return (
    <div>
      <Card key={props.id}>
        <CardBody>
          <CardTitle tag="h5">{props.nome}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.plataformas}</CardSubtitle>
        </CardBody>
          <img
            src={props.imagem} alt={props.nome}
            width={50}
          />
        <CardBody>
          {props.preco}
        </CardBody>
        <CardFooter>
          <Button color="primary">
            <FaCartPlus size={10} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}