export interface imageProps {
  open?: boolean;
  loginImg?: string;
  src?: string;
  img?: string;
}

export interface landingImg {
  image?: string;
}

export interface itemProps {
  items: cartItemProps[];
}

export interface itemLengthProps {
  items: number;
}

export interface openProps {
  open?: boolean;
}

export interface image {
  image?: boolean;
}

export interface openBookProps {
  handleBookPage: () => void;
  openBook: boolean;
}

export interface svgProps {
  fill?: string;
  stroke?: string;
}

export interface paymentProps {
  orderUser: string;
  userId: string;
}

export interface bankProps {
  id: number;
  bankName: string;
  accNumber: string;
  money: number;
  find?: any;
  map?: any;
}

export interface bankNameProps {
  bankName: string;
  bankOption: string;
}

export interface authProps {
  name: string;
  userId: string;
  password: number;
  avartar: string;
  address: string;
  likeLists: any;
  cartLists: any;
  paymentLists?: any;
  bankInfo: bankProps[] | bankProps;
  findIndex?: any;
}

export interface userProps {
  target: { name: string; value: string };
}

export interface inputProps {
  userId: string;
  password: string | number;
}

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  target?: any;
  active?: boolean;
  disabled?: boolean | undefined;
}

export interface productProps {
  id?: number;
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  stars?: number[];
  likes: boolean;
  filter?: any;
  product?: {
    id: number;
    size: string;
    price: number;
    active?: boolean;
  }[];
}

export interface itemOptionProps {
  id?: number;
  size?: string;
  price?: number;
  active: boolean | undefined;
  map?: any;
}

export interface cartItemProps {
  id?: number | string;
  image?: string;
  orderDate?: string;
  orderUser?: string;
  price?: number;
  recordedQty?: number;
  size?: string;
  title?: string;
  total: number;
  filter?: any;
}

export interface filterItemProps {
  espresso: boolean;
  coldbrew: boolean;
  frappuccino: boolean;
  blended: boolean;
}
