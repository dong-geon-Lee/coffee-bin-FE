import { useRecoilValue, useSetRecoilState } from "recoil";
import { accountListState, authUserState } from "../../recoils/userAuthState";
import { productProps } from "../../@types/types";
import { Link } from "react-router-dom";
import { removeLikeItem } from "../../helpers/helpers";
import { NOT__LIKE__COFFEE } from "../../constants/constants";
import NavMenu from "../../components/NavMenu/NavMenu";
import * as S from "./styles";
import * as A from "../../assets";

const Likes = () => {
  const authUser = useRecoilValue(authUserState);
  const { likeLists } = useRecoilValue(authUserState);
  const setUserLikeLists = useSetRecoilState(authUserState);
  const setAccounts = useSetRecoilState(accountListState);

  const handleLikes = (id: number) => {
    const newLikesItems = removeLikeItem(likeLists, id);

    setUserLikeLists({ ...authUser, likeLists: newLikesItems });
    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return { ...authUser, likeLists: newLikesItems };
        }
        return { ...user };
      });
    });
  };

  return (
    <S.Container>
      <S.Section>
        <S.Header>
          <Link to="/home">
            <S.Logo src={A.back} alt="logo" />
          </Link>
          <S.Title>좋아요</S.Title>
          <S.Logo src={A.heart2} alt="logo" className="logo" />
        </S.Header>

        {likeLists?.length >= 1 ? (
          likeLists.map((item: productProps) => (
            <S.ItemBox key={item.id}>
              <S.ImgBox>
                <S.Img src={item.image} className="coffee__img" />
                <S.Logo
                  src={A.heart4}
                  className="heart"
                  onClick={() => handleLikes(Number(item.id))}
                />
              </S.ImgBox>
              <S.ContentBox>
                <S.Title>{item.title}</S.Title>
                <S.Description>{item.description}</S.Description>
                <S.Stars>
                  {item.stars?.map((stars, index) => (
                    <S.StarImg
                      key={index}
                      src={stars === 1 ? A.star : A.star0}
                      alt="star"
                    />
                  ))}
                </S.Stars>
              </S.ContentBox>
            </S.ItemBox>
          ))
        ) : (
          <S.EmptyBox>
            <S.Background img={A.coffee} />
            <S.Text>{NOT__LIKE__COFFEE}</S.Text>
          </S.EmptyBox>
        )}
      </S.Section>
      <NavMenu />
    </S.Container>
  );
};

export default Likes;
