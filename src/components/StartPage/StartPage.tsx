import { HashRouter as Router, Link } from "react-router-dom";
import { openBookProps } from "../../@types/types";
import * as S from "./styles";
import * as A from "../../assets";

const StartPage = ({ handleBookPage, openBook }: openBookProps) => {
  return (
    <S.ImageBox className="book" open={openBook}>
      {/* <S.Title>
        <S.Strong>Coffee</S.Strong> Book
      </S.Title>
      <S.Img src={A.image} />
      <S.Img src={A.image2} className="back__image" />
      <Router>
        <Link to="/login">
          <S.Div className="start">
            <S.Button onClick={() => handleBookPage()}>시작하기</S.Button>
          </S.Div>
        </Link>
      </Router> */}
    </S.ImageBox>
  );
};

export default StartPage;
