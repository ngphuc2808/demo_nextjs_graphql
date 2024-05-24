import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://retail-api.mona.website/graphql`;

export const graphQLClient = new GraphQLClient(API_URL);

export const GET_PRODUCTS = gql`
  query getProducts(
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
  ) {
    products(
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      sort_fields {
        default
        options {
          label
          value
        }
      }
      items {
        ...ProductInterfaceField
      }

      total_count
      page_info {
        current_page
        page_size
        total_pages
      }
    }
  }
  fragment ProductInterfaceField on ProductInterface {
    __typename
    sku
    uid
    name
    url_key
    url_suffix
    canonical_url
    stock_status
    meta_description
    meta_keyword
    meta_title
    new_from_date
    new_to_date
    description {
      html
    }
    rating_summary
    review_count
    short_description {
      html
    }
    thumbnail {
      url
      position
    }
    image {
      url
    }
    price_range {
      ...PriceRangeField
    }
    ...CustomField
  }
  fragment CustomField on ProductInterface {
    color
    size
    rating_summary_start {
      star_1
      star_2
      star_3
      star_4
      star_5
    }
    attributes {
      attribute_code
      label
      value
    }
  }
  fragment PriceRangeField on PriceRange {
    __typename
    maximum_price {
      ...ProductPriceField
    }
  }
  fragment ProductPriceField on ProductPrice {
    discount {
      amount_off
      percent_off
    }
    final_price {
      currency
      value
    }
    regular_price {
      currency
      value
    }
  }
`;

export const CREATE_EMPTY_BASKET = gql`
  mutation createEmptyCart {
    createEmptyCart
  }
`;

export const ADD_PRODUCT_TO_BASKET = gql`
  mutation addProductToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        email
        id
        is_virtual
        total_quantity
      }
      user_errors {
        code
        message
      }
    }
  }
`;

export const UPDATE_PRODUCT_FROM_BASKET = gql`
  mutation updateCartItem($input: UpdateCartItemsInput) {
    updateCartItems(input: $input) {
      cart {
        email
        id
        is_virtual
        total_quantity
      }
    }
  }
`;

export const REMOVE_PRODUCT_FROM_BASKET = gql`
  mutation removeItemFromCart(
    $removeItemFromCartInput: RemoveItemFromCartInput
  ) {
    removeItemFromCart(input: $removeItemFromCartInput) {
      cart {
        id
        items {
          uid
          errors {
            code
            message
          }
        }
      }
    }
  }
`;

export const GET_BASKET = gql`
  query getCart($cart_id: String!) {
    cart(cart_id: $cart_id) {
      id
      is_virtual
      total_quantity
      prices {
        discounts {
          amount {
            ...MoneyFields
          }
          ...DiscountFields
        }
        grand_total {
          ...MoneyFields
        }
        subtotal_excluding_tax {
          ...MoneyFields
        }
      }
      items {
        errors {
          code
          message
        }
        quantity
        uid
        product {
          ...ProductInterfaceField
        }
        prices {
          discounts {
            amount {
              ...MoneyFields
            }
            ...DiscountFields
          }
          price {
            ...MoneyFields
          }
          row_total {
            ...MoneyFields
          }
          total_item_discount {
            ...MoneyFields
          }
        }
      }
    }
  }

  fragment ProductInterfaceField on ProductInterface {
    __typename
    sku
    uid
    name
    url_key
    url_suffix
    canonical_url
    stock_status
    meta_description
    meta_keyword
    meta_title
    new_from_date
    new_to_date
    rating_summary
    review_count
    thumbnail {
      position
      ...ProductImageFields
    }
    image {
      ...ProductImageFields
    }
    ...CustomField
  }

  fragment CustomField on ProductInterface {
    color
    size
    rating_summary_start {
      star_1
      star_2
      star_3
      star_4
      star_5
    }
    attributes {
      attribute_code
      label
      value
    }
  }

  fragment DiscountFields on Discount {
    label
  }

  fragment MoneyFields on Money {
    currency
    value
  }

  fragment ProductImageFields on ProductImage {
    url
  }
`;
