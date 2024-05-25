//IProductRes
interface IItems {
  __typename: string;
  sku: string;
  uid: string;
  name: string;
  url_key: string;
  url_suffix: string;
  canonical_url: null | string;
  stock_status: string;
  meta_description: null | string;
  meta_keyword: null | string;
  meta_title: null | string;
  new_from_date: null | string;
  new_to_date: null | string;
  description: {
    html: string;
  };
  rating_summary: number;
  review_count: number;
  short_description: {
    html: string;
  };
  thumbnail: {
    url: string;
    position: null | string;
  };
  image: {
    url: string;
  };
  price_range: {
    __typename: string;
    maximum_price: {
      discount: {
        amount_off: number;
        percent_off: number;
      };
      final_price: {
        currency: string;
        value: number;
      };
      regular_price: {
        currency: string;
        value: number;
      };
    };
  };
  color: null | string;
  size: null | string;
  rating_summary_start: {
    star_1: number;
    star_2: number;
    star_3: number;
    star_4: number;
    star_5: number;
  };
  attributes: {
    attribute_code: string;
    label: string;
    value: string;
  }[];
}

interface IProductRes {
  products: {
    sort_fields: {
      default: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    items: IItems[];
    total_count: number;
    page_info: {
      current_page: number;
      page_size: number;
      total_pages: number;
    };
  };
}

interface IEmptyBasketRes {
  createEmptyCart: string;
}

interface IAddProductToBasketRes {
  addProductsToCart: {
    cart: {
      email: null | string;
      id: string;
      is_virtual: boolean;
      total_quantity: number;
    };
    user_errors:
      | {
          code: string;
          message: string;
        }[]
      | any[];
  };
}

interface IGetBasketRes {
  cart: {
    id: string;
    is_virtual: boolean;
    total_quantity: number;
    prices: {
      discounts: any[];
      grand_total: {
        currency: string;
        value: number;
      };
      subtotal_excluding_tax: {
        currency: string;
        value: number;
      };
    };
    items: any[];
  };
}
