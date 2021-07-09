import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { BsFillStarFill, BsDot } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import api from "../../services/api";
import ReactPaginate from "react-paginate";

type DataGamesProps = { 
  id: string;
  titulo: string;
}

export function Home() {
  const [data, setData] = useState<DataGamesProps[]>([]);
  const [page, setPage] = useState<number>(0);
  
  const PER_PAGE = 10;
  const offset = page * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  function handlePageClick(selected: any) {
    setPage(selected);
  }

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
              .slice(offset, offset + PER_PAGE)
              .map((item) => {
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
      <Col md={12}>
        <ReactPaginate
          previousLabel={<AiOutlineArrowLeft size={10} />}
          nextLabel={<AiOutlineArrowRight size={10} />}
          breakLabel={
            <div>
              <BsDot /><BsDot /><BsDot />
            </div>
          }
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"page-item"}
          nextLinkClassName={"page-item"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </Col>
    </Row>
  );
}