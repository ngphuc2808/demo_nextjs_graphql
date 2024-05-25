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

interface IUpdateProductFromBasketReq {
  input: {
    cart_id: string;
    cart_items: {
      cart_item_uid: string;
      quantity: number;
    }[];
  };
}

interface IRemoveProductFromBasketReq {
  removeItemFromCartInput: {
    cart_id: string;
    cart_item_uid: string;
  };
}

interface IBasketReq {
  cart_id: string;
}
