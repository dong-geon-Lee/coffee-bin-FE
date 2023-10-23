import { atom, selector } from "recoil";
import { authProps } from "../@types/types";
import { accounts } from "../data/userItems";
import { paymentDetailState, totalCashState } from "./coffeeItemState";
import {
  findAuthUser,
  findSelectedBank,
  calcBankMoney,
  showPaymentLists,
} from "../helpers/helpers";

export const openBookState = atom({
  key: "openBookState",
  default: false,
});

export const authActiveState = atom({
  key: "authActiveState",
  default: false,
});

export const authUserState = atom<authProps>({
  key: "authUser",
  default: undefined,
});

export const bankAccountState = atom({
  key: "bankAccountState",
  default: "은행을 선택해주세요",
});

export const accountListState = atom({
  key: "accountUserState",
  default: accounts,
});

export const bankOptionState = atom({
  key: "bankOptionState",
  default: "",
});

export const selectedBankState = selector({
  key: "selectedBank",
  get: ({ get }) => {
    const authUser = get(authUserState);
    const bankOption = get(bankOptionState);
    const filteredBank = findSelectedBank(authUser, bankOption);
    return filteredBank;
  },
});

export const paymentListState = selector({
  key: "paymentListState",
  get: ({ get }) => {
    const authUser = get(authUserState);
    const paymentDetail = get(paymentDetailState);
    const paymentItems = showPaymentLists(paymentDetail, authUser);
    return paymentItems;
  },
});

export const updatedBankMoneyState = selector({
  key: "updateUserBankMoney",
  get: ({ get }) => {
    const accountLists = get(accountListState);
    const authUser = get(authUserState);
    const bankOption = get(bankOptionState);
    const totalCash = get(totalCashState);
    const correctUserIndex = findAuthUser(accountLists, authUser);
    const newBankInfo = calcBankMoney(authUser, bankOption, totalCash);
    const btnDisabled = totalCash === 0 ? true : false;

    return {
      authUser,
      accountLists,
      correctUserIndex,
      newBankInfo,
      btnDisabled,
    };
  },
});


