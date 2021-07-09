import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import api from "../../../services/api";
import ReactPaginate from "react-paginate";
import "../../styles/home.scss";
import "../../styles/pagination.scss";

type DataGamesProps = { 
  id: string;
  titulo: string;
}

export function Home2() {
  const [data, setData] = useState<DataGamesProps[]>([]);
  // const [page, setPage] = useState<number>(0);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (e: { selected: any; }) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };
  
  useEffect(() => {
    api.get('games')
    .then((response) => {
      setData(response.data);
      setPageCount(Math.ceil(data.length / perPage))
    })
    .catch((erro) => {
      console.log(`Erro -> ${erro}`);
    });
  }, [data.length, perPage]);

  return (
    <Row>
      <Col md={12}>
        <h1>Home</h1>
      </Col>
      <Col md={12}>
        <ListGroup>
          {(!data) ? (
            <Row>
              <Col md={12}>
                <h1>Lista vazia</h1>
              </Col>
            </Row>
          ) : (
            data
              .slice(offset, offset + perPage)
              .map((item) => {
              return (
                <ListGroupItem
                  key={item.id}
                >
                  <Row>
                    <Col md={10} className="texto-item">{item.titulo}</Col>
                    <Col md={2} className="botao-item">
                      <Button color="primary">
                        <BsFillStarFill size={30} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })
          )}
        </ListGroup>
      </Col>
      <Col md={12} className="pagination-area">
        <ReactPaginate
          previousLabel={<AiOutlineArrowLeft size={20} />}
          nextLabel={<AiOutlineArrowRight size={20} />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </Col>
    </Row>
  );
}