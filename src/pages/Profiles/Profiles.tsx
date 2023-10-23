import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { authUserState, bankOptionState } from "../../recoils/userAuthState";
import { bankProps, ButtonProps } from "../../@types/types";
import { findSelectedBank, formattedNumber } from "../../helpers/helpers";
import NavMenu from "../../components/NavMenu/NavMenu";
import Overlays from "../../components/Overlays/Overlays";
import Modals from "../../components/Modals/Modals";
import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants/constants";

const Profiles = () => {
  const [openModals, setOpenModals] = useRecoilState(modalState);
  const [overlays, setOverlays] = useRecoilState(overlayState);
  const [bankOption, setBankOption] = useRecoilState(bankOptionState);

  const authUser = useRecoilValue(authUserState);
  const filteredBank = findSelectedBank(authUser, bankOption);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const handleModals = () => {
    setOpenModals(true);
    setOverlays(true);
  };

  const onChange = (e: ButtonProps) => {
    setBankOption(e.target.value);
  };

  useEffect(() => {
    setBankOption("계좌 선택");
  }, [path]);

  return (
    <S.Container>
      <S.Section>
        <S.Header>
          <Link to="/home">
            <S.Logo src={A.back} alt="logo" />
          </Link>
          <S.Title>프로필</S.Title>
          <S.Logo src={A.profile2} alt="logo" className="logo" />
        </S.Header>

        {openModals && <Modals />}
        {overlays && <Overlays />}

        <S.UserBox>
          <S.ImgBox>
            <S.Img src={authUser.avartar} alt="avartar" />
          </S.ImgBox>
          {authUser && (
            <S.UserInfo>
              <S.Box>
                <S.Label>아이디</S.Label>
                <S.Span>{authUser.userId}</S.Span>
              </S.Box>
              <S.Box>
                <S.Label>이름</S.Label>
                <S.Span>{authUser.name}</S.Span>
              </S.Box>
              <S.Box>
                <S.Label>주소</S.Label>
                <S.Span>{authUser.address}</S.Span>
              </S.Box>
              <S.Box>
                <S.SubBox>
                  <S.Label>계좌번호</S.Label>
                  <S.Select value={bankOption} onChange={onChange}>
                    <S.Option value={C.CHOICE__ACCOUNT}>계좌 선택</S.Option>
                    {authUser?.bankInfo?.map((bank: bankProps) => (
                      <S.Option key={bank.id} value={bank.bankName}>
                        {bank?.bankName}
                      </S.Option>
                    ))}
                  </S.Select>
                </S.SubBox>
                {!filteredBank ? (
                  <S.Span className="choice__bank">
                    {C.CHOICE__BANK__MESSAGE}
                  </S.Span>
                ) : (
                  <S.Span key={filteredBank?.id}>
                    {filteredBank?.accNumber}
                  </S.Span>
                )}
              </S.Box>
              <S.Box>
                <S.Label>Pay머니</S.Label>
                {!filteredBank ? (
                  <S.Span className="choice__bank">
                    {C.CHOICE__BANK__MESSAGE}
                  </S.Span>
                ) : (
                  <S.Span key={filteredBank?.id}>
                    {formattedNumber(filteredBank?.money)}원
                  </S.Span>
                )}
              </S.Box>
            </S.UserInfo>
          )}
          <S.BtnBox>
            <S.Button onClick={() => handleModals()} disabled={!filteredBank}>
              Pay충전
            </S.Button>
            <S.Button
              onClick={() => navigate("/details")}
              className="pay__recorded"
            >
              결제내역
            </S.Button>
          </S.BtnBox>
        </S.UserBox>
      </S.Section>
      <NavMenu />
    </S.Container>
  );
};

export default Profiles;
