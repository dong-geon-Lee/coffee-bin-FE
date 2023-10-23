export const coffeeLists = [
  {
    id: 1,
    title: "콜드 브루",
    description:
      "콜드 브루 전용 원두를 차가운 물로 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.",
    type: "coldbrew",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg",
    size: ["S", "M", "L"],
    price: [4900, 5400, 5900],
    stars: [1, 1, 1, 1, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 4900, acitve: false },
      { id: 2, size: "Medium", price: 5400, active: false },
      { id: 3, size: "Large", price: 5900, active: false },
    ],
  },
  {
    id: 2,
    title: "콜드 브루 라떼",
    description:
      "콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼. 식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료",
    type: "coldbrew",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437226.jpg",
    size: ["S", "M", "L"],
    price: [5800, 6300, 6800],
    stars: [1, 1, 1, 0, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 5800, acitve: false },
      { id: 2, size: "Medium", price: 6300, active: false },
      { id: 3, size: "Large", price: 6800, active: false },
    ],
  },
  {
    id: 3,
    title: "민트 콜드 브루",
    description:
      "상쾌한 민트향 시럽과 잘게 갈린 얼음이 어우러져 시원함이 강렬하게 느껴지는 리저브만의 콜드 브루 음료",
    type: "coldbrew",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004312]_20221005145029298.jpg",
    size: ["S", "M", "L"],
    price: [5000, 5600, 6000],
    stars: [1, 1, 1, 1, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 5000, acitve: false },
      { id: 2, size: "Medium", price: 5600, active: false },
      { id: 3, size: "Large", price: 6000, active: false },
    ],
  },
  {
    id: 4,
    title: "카라멜 마키아또",
    description:
      "향긋한 바닐라 시럽과 따뜻한 스팀 밀크 위에 풍성한 우유 거품을 얹고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료",
    type: "espresso",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154610012.jpg",
    size: ["S", "M", "L"],
    price: [5400, 5900, 6400],
    stars: [1, 1, 1, 1, 1],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 5400, acitve: false },
      { id: 2, size: "Medium", price: 5900, active: false },
      { id: 3, size: "Large", price: 6400, active: false },
    ],
  },
  {
    id: 5,
    title: "카푸치노",
    description:
      "풍부하고 진한 에스프레소에 따뜻한 우유와 벨벳 같은 우유 거품이 1:1 비율로 어우러져 마무리된 커피 음료",
    type: "espresso",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[38]_20210415154821991.jpg",
    size: ["S", "M", "L"],
    price: [4500, 5000, 5500],
    stars: [1, 1, 0, 0, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 4500, acitve: false },
      { id: 2, size: "Medium", price: 5000, active: false },
      { id: 3, size: "Large", price: 5500, active: false },
    ],
  },
  {
    id: 6,
    title: "바닐라 빈 라떼",
    description:
      "리저브만을 위한 프리미엄 바닐라 빈 시럽이 부드럽게 어우러진 카페 라떼",
    type: "espresso",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001939]_20210225094313320.jpg",
    size: ["S", "M", "L"],
    price: [5000, 5600, 6100],
    stars: [1, 1, 1, 1, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 5000, acitve: false },
      { id: 2, size: "Medium", price: 5600, active: false },
      { id: 3, size: "Large", price: 6100, active: false },
    ],
  },
  {
    id: 7,
    title: "크림 프라푸치노",
    description:
      "깊고 진한 말차 본연의 맛과 향을 시원하고 부드럽게 즐길 수 있는 프라푸치노",
    type: "frappuccino",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002502]_20210426100408183.jpg",
    size: ["S", "M", "L"],
    price: [6300, 6800, 7300],
    stars: [1, 1, 1, 0, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 6300, acitve: false },
      { id: 2, size: "Medium", price: 6800, active: false },
      { id: 3, size: "Large", price: 7300, active: false },
    ],
  },
  {
    id: 8,
    title: "까망 크림 프라푸치노",
    description:
      "고소한 국내산 흑임자와 쫄깃한 국내산 흑임자 떡, 달콤한 블랙 소보로 토핑으로 제주의 돌 하르방 길을 느낄 수 있는 음료",
    type: "frappuccino",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002088]_20200921171733536.jpg",
    size: ["S", "M", "L"],
    price: [6300, 6800, 7300],
    stars: [1, 1, 1, 1, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 6300, acitve: false },
      { id: 2, size: "Medium", price: 6800, active: false },
      { id: 3, size: "Large", price: 7300, active: false },
    ],
  },
  {
    id: 9,
    title: "바닐라 크림 프라푸치노",
    description: "신선한 우유와 바닐라 시럽이 어우러진 크림 프라푸치노",
    type: "frappuccino",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168054]_20210415135751989.jpg",
    size: ["S", "M", "L"],
    price: [5500, 6000, 6500],
    stars: [1, 1, 1, 0, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 5500, acitve: false },
      { id: 2, size: "Medium", price: 6000, active: false },
      { id: 3, size: "Large", price: 6500, active: false },
    ],
  },
  {
    id: 10,
    title: "딸기 요거트 블렌디드",
    description:
      "유산균이 살아있는 리얼 요거트와 풍성한 딸기 과육이 더욱 상큼하게 어우러진 과일 요거트 블렌디드",
    type: "blended",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001576.jpg",
    size: ["S", "M", "L"],
    price: [6300, 6800, 7300],
    stars: [1, 1, 1, 1, 1],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 6300, acitve: false },
      { id: 2, size: "Medium", price: 6800, active: false },
      { id: 3, size: "Large", price: 7300, active: false },
    ],
  },
  {
    id: 11,
    title: "망고 바나나 블렌디드",
    description:
      "T인기 음료인 망고 패션후르츠 블렌디드에 신선한 바나나 1개가 통째로 들어간 달콤한 프라푸치노",
    type: "blended",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[169001]_20210419130701935.jpg",
    size: ["S", "M", "L"],
    price: [6300, 6800, 7300],
    stars: [1, 1, 1, 0, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 6300, acitve: false },
      { id: 2, size: "Medium", price: 6800, active: false },
      { id: 3, size: "Large", price: 7300, active: false },
    ],
  },
  {
    id: 12,
    title: "감귤 스노잉 블렌디드",
    description:
      "눈 속에 쌓인 당근처럼 특색 있는 비주얼과 함께 제주산 감귤, 당근 등 다양한 과일을 이용하여 누구나 맛있게 즐길 수 있는 요거트 음료",
    type: "blended",
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2022/09/[9200000004295]_20220906080812848.jpg",
    size: ["S", "M", "L"],
    price: [6300, 6800, 7300],
    stars: [1, 1, 1, 1, 0],
    likes: false,
    product: [
      { id: 1, size: "Small", price: 6300, acitve: false },
      { id: 2, size: "Medium", price: 6800, active: false },
      { id: 3, size: "Large", price: 7300, active: false },
    ],
  },
];
