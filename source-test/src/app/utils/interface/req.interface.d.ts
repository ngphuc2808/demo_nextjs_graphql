interface IProductReq {
  search: string;
  pageSize: number;
  currentPage: number;
}

interface IAddProductToBasketReq {
  cartId: string;
  cartItems: {
    sku: string;
    quantity: number;
  }[];
}
