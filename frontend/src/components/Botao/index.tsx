import { useState } from "react";
import { Button, ButtonProps, Col } from "reactstrap";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import '../../styles/home_button.scss';

interface BotaoProps extends ButtonProps {
  label: string;
}

interface HomeBotaoProps extends ButtonProps {
  label?: string;
  icon?: any;
  to: any;
  className?: string;
}

export function Botao(props: BotaoProps) {
  return (
    <Button {...props}>{props.label}</Button>
  );
}

export function HomeBotao(props: HomeBotaoProps) {
  return (
    <Col md={4} className={props.className}>
      <Link to={props.to} className="mr4">
        <Button
          className="btn-home"
          {...props}
        >
          {props.icon}
          <p>{props.label}</p>
        </Button>
      </Link>
    </Col>
  );
}

export function BotaoLikeDislike() {
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);

  /*
    AiOutlineLike => Like vazio
    AiFillLike => Like cheio
    AiOutlineDislike => Like vazio
    AiFillDislike => Like cheio
  */

  return (
    <div>
      <Button onClick={() => setLike(!like)}>
        {(like === false) ? <AiOutlineLike size={20} /> : <AiFillLike size={20} /> }
      </Button>
      <Button onClick={() => setDislike(!dislike)}>
        {(dislike === false) ? <AiOutlineDislike size={20} /> : <AiFillDislike size={20} />}
      </Button>
    </div>
  );
}

export function BotaoFavorito() {
  const [favoritar, setFavoritar] = useState<boolean>(false);

  /*
    FcLikePlaceholder => Coracao vazio
    FcLike => Coracao cheio
  */

  return (
    <Button onClick={() => setFavoritar(!favoritar)}>
      {(favoritar === false) ? <FcLikePlaceholder size={20} /> : <FcLike size={20} /> }
    </Button>
  );
}

export function BotoesAvaliacao() {
  /*
    BsStar => Estrela vazia
    BsStarHalf => Estrela meia cheia
    BsStarFill => Estrela cheia
  */

  return (
    <div>
      <BsStarFill size={20} />
      <BsStarHalf size={20} />
      <BsStar size={20} />
      <BsStar size={20} />
      <BsStar size={20} />
    </div>
  );
}