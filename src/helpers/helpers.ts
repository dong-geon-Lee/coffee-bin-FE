import {
  authProps,
  bankProps,
  cartItemProps,
  filterItemProps,
  itemOptionProps,
  productProps,
} from "../@types/types";

export const formattedNumber = (data: number) => {
  return new Intl.NumberFormat("ko-KR", {
    maximumSignificantDigits: 3,
  }).format(data);
};

export const formattedDates = (
  years: number,
  months: number,
  randomDays: number
) => {
  return new Intl.DateTimeFormat("ko-KR").format(
    new Date(years, months, randomDays)
  );
};

export const findAuthUser = (
  accounts: authProps[],
  authUser: authProps
): number => {
  return accounts.findIndex((x: authProps) => x.userId === authUser.userId);
};

export const checkAuthUser = (
  accountLists: authProps[],
  userId: string,
  password: string
) => {
  return accountLists.find(
    (account: authProps) =>
      account.email === userId && account.password === password
  );
};

export const findSelectedBank = (authUser: authProps, bankOption: string) => {
  return authUser.bankInfo.find((bank: bankProps) => {
    return bank.bankName === bankOption;
  });
};

export const calcBankMoney = (
  authUser: authProps,
  bankOption: string,
  totalCash: number
) => {
  const chargedMoney = authUser.bankInfo.map((bank: bankProps) => {
    if (bank.bankName === bankOption) {
      return {
        id: bank.id,
        bankName: bank.bankName,
        accNumber: bank.accNumber,
        money: totalCash + bank.money,
      };
    } else {
      return bank;
    }
  });

  return chargedMoney;
};

export const calcTotalProduct = (recordedCartItem: cartItemProps[]) => {
  return recordedCartItem.reduce((acc, cur) => acc + cur.total, 0);
};

export const findFilteredItems = (
  existCoffeeItems: productProps[],
  checkedMenu: filterItemProps
) => {
  const { espresso, coldbrew, frappuccino, blended } = checkedMenu;
  return existCoffeeItems.filter(
    (coffeeItem) =>
      (espresso && coffeeItem.type === "espresso") ||
      (coldbrew && coffeeItem.type === "coldbrew") ||
      (frappuccino && coffeeItem.type === "frappuccino") ||
      (blended && coffeeItem.type === "blended")
  );
};

export const findPaymentOrderUser = (
  paymentItems: cartItemProps[],
  authUser: authProps
) => {
  return paymentItems.filter(
    (item: cartItemProps) => item.orderUser === authUser.userId
  );
};

export const removeCartItem = (cartItems: cartItemProps[], id: string) => {
  return cartItems.filter((item: cartItemProps) => item.id !== id);
};

export const removeLikeItem = (likeItems: productProps[], id: number) => {
  return likeItems.filter((item: productProps) => item.id !== id);
};

export const showPaymentLists = (
  paymentDetail: cartItemProps[],
  authUser: authProps
) => {
  return paymentDetail.filter(
    (item: cartItemProps) => item.orderUser === authUser.userId
  );
};

export const selectProductSize = (
  product: itemOptionProps[],
  selectedSize: number
) => {
  const priceLists = product.map((x: itemOptionProps) => x.price);
  const itemIndex = priceLists.findIndex((price) => price === selectedSize);
  return itemIndex;
};

export const findCorrectSize = (
  product: itemOptionProps[],
  selectedSize: number
) => {
  return product.find((p: itemOptionProps) => p.price === selectedSize);
};

export const findSameProduct = (coffeeItem: productProps[], id: number) => {
  return coffeeItem.find((item) => item.id === id);
};

export const addLikeProduct = (
  likeItem: productProps[],
  targetItems: productProps | undefined
) => {
  return likeItem?.find((item) => item.id === targetItems?.id);
};

export const randomDates = (min: number, max: number) => {
  const randomYears = Math.floor(Math.random() * (max - min)) + min;
  const randomMonths = Math.floor(Math.random() * 12) + 1;
  const randomDays = Math.floor(Math.random() * 30) + 1;

  return { randomYears, randomMonths, randomDays };
};

export const generatePaymentId = () => {
  return "FE" + Math.floor(Math.random() * 10000) + "DEV";
};

export const addCartItems = (
  product: itemOptionProps[],
  image: string,
  title: string,
  quantity: number,
  totalPrice: number,
  authUser: authProps,
  selectedSize: number
) => {
  const { randomYears, randomMonths, randomDays } = randomDates(2020, 2023);
  const productOption = findCorrectSize(product, selectedSize);
  let total = 0;

  return {
    id: generatePaymentId(),
    size: productOption?.size,
    price: productOption?.price,
    image,
    title,
    recordedQty: quantity,
    total: (total = totalPrice * quantity),
    orderDate: formattedDates(randomYears, randomMonths, randomDays),
    orderUser: authUser?.userId,
  };
};
