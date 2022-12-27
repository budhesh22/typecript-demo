export interface errorMessage {
  message: null | string;
}

export interface successMessage {
  status_code: null | number;
  success: boolean;
}

export interface productRating {
  count: string;
  rate: number;
}

export interface productList {
  category: string;
  description: string;
  image: HTMLImageElement | string;
  id: number;
  price: number;
  rating: productRating;
  title: string;
}

export interface mainProduct{
  data: productList[];
}

export interface stateData {
  loading: boolean;
  message: successMessage;
  result: mainProduct;
  error: errorMessage;
}