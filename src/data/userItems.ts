import avartar from "../assets/avarta.jpg";
import avartar2 from "../assets/avarta8.jpg";
import avartar3 from "../assets/avarta4.jpg";

export const accounts = [
  {
    name: "게스트1",
    userId: "guest1",
    password: 1111,
    avartar: avartar,
    address: "서울특별시 송파구",
    likeLists: [],
    cartLists: [],
    paymentLists: [],
    bankInfo: [
      {
        id: 1,
        bankName: "국민은행",
        accNumber: "487602-04-2539440",
        money: 30000,
      },
      {
        id: 2,
        bankName: "기업은행",
        accNumber: "245620-13-1325350",
        money: 50000,
      },
      {
        id: 3,
        bankName: "신한은행",
        accNumber: "402321-11-2769440",
        money: 70000,
      },
    ],
  },
  {
    name: "게스트2",
    userId: "guest2",
    password: 2222,
    avartar: avartar2,
    address: "대전광역시 동구",
    likeLists: [],
    cartLists: [],
    bankInfo: [
      {
        id: 1,
        bankName: "신한은행",
        accNumber: "555428-24-9441010",
        money: 30000,
      },
      {
        id: 2,
        bankName: "농협은행",
        accNumber: "112035-04-8751220",
        money: 35000,
      },
      {
        id: 3,
        bankName: "하나은행",
        accNumber: "498550-52-1104425",
        money: 40000,
      },
    ],
  },
  {
    name: "게스트3",
    userId: "guest3",
    password: 3333,
    avartar: avartar3,
    address: "인천광역시 계양구",
    likeLists: [],
    cartLists: [],
    bankInfo: [
      {
        id: 1,
        bankName: "우리은행",
        accNumber: "955232-10-9932259",
        money: 30000,
      },
      {
        id: 2,
        bankName: "수협은행",
        accNumber: "391828-15-1010550",
        money: 40000,
      },
      {
        id: 3,
        bankName: "산업은행",
        accNumber: "192900-01-2984012",
        money: 50000,
      },
    ],
  },
];
