import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { totalCashState } from "../../recoils/coffeeItemState";
import { modalState, overlayState } from "../../recoils/modalState";
import { formattedNumber } from "../../helpers/helpers";
import {
  accountListState,
  authUserState,
  selectedBankState,
  updatedBankMoneyState,
} from "../../recoils/userAuthState";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Modals = () => {
  const [totalCash, setTotalCash] = useRecoilState(totalCashState);
  const [, setModalState] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const selectedBank = useRecoilValue(selectedBankState);
  const { accountLists, authUser, correctUserIndex, newBankInfo, btnDisabled } =
    useRecoilValue(updatedBankMoneyState);

  const setAuthUser = useSetRecoilState(authUserState);
  const setAccountList = useSetRecoilState(accountListState);

  const handleTotalCash = (cash: number) => {
    setTotalCash((prevState: number) => prevState + cash);
  };

  const handleResetIcon = () => {
    setTotalCash(0);
  };

  const handleBtnReset = () => {
    setTotalCash(0);
    setModalState(false);
    setOverlays(false);
  };

  const handleChargePoint = () => {
    setAuthUser({ ...authUser, bankInfo: newBankInfo });
    setAccountList([
      ...accountLists.slice(0, correctUserIndex),
      { ...authUser, bankInfo: newBankInfo },
      ...accountLists.slice(correctUserIndex + 1),
    ]);

    setTotalCash(0);
    setModalState(false);
    setOverlays(false);
    alert(`${formattedNumber(totalCash)}원 충전이 완료되었습니다.`);
  };

  return (
    <S.Container>
      <S.ModalBox>
        <S.Text className="title">포인트</S.Text>
        <S.ChargeBox>
          <S.Price>{formattedNumber(totalCash)}원</S.Price>
          <S.Button className="reset__btn" onClick={handleResetIcon}>
            x
          </S.Button>
        </S.ChargeBox>
        <S.Div>
          <S.Button
            onClick={() => handleTotalCash(C.CHARGE__X)}
            className="cash__btn"
          >
            +1만원
          </S.Button>
          <S.Button
            onClick={() => handleTotalCash(C.CHARGE__Y)}
            className="cash__btn"
          >
            +5만원
          </S.Button>
          <S.Button
            onClick={() => handleTotalCash(C.CHARGE__Z)}
            className="cash__btn"
          >
            +10만원
          </S.Button>
        </S.Div>

        <S.Select>
          {selectedBank && (
            <S.Option value={selectedBank?.accNumber} key={selectedBank.id}>
              {selectedBank?.bankName} {selectedBank?.accNumber}
            </S.Option>
          )}
        </S.Select>

        <S.Box>
          <S.Label>계좌잔액:</S.Label>
          <S.Span>
            {selectedBank &&
              `${formattedNumber(totalCash + selectedBank.money)}원`}
          </S.Span>
        </S.Box>
        <S.BtnBox>
          <S.Button className="close__btn" onClick={handleBtnReset}>
            닫기
          </S.Button>
          <S.Button
            className="pay__btn"
            onClick={handleChargePoint}
            disabled={btnDisabled}
          >
            충전하기
          </S.Button>
        </S.BtnBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default Modals;
