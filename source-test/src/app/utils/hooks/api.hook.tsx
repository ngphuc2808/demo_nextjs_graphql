import {
  UseQueryOptions,
  keepPreviousData,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  ADD_PRODUCT_TO_BASKET,
  GET_BASKET,
  GET_PRODUCTS,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_PRODUCT_FROM_BASKET,
  graphQLClient,
} from "@/app/api/query";

const handleGetProduct = async ({
  search,
  pageSize,
  currentPage,
}: IProductReq) => {
  const response: IProductRes = await graphQLClient.request(GET_PRODUCTS, {
    search,
    pageSize,
    currentPage,
  });

  return response;
};

export const useGetListProducts = (
  { search, pageSize, currentPage }: IProductReq,
  enabled?: boolean,
  options?: UseQueryOptions<IProductRes>
) => {
  return useQuery({
    queryKey: ["products", search, pageSize, currentPage],
    queryFn: () =>
      handleGetProduct({
        search,
        pageSize,
        currentPage,
      }),
    staleTime: 20 * 1000,
    retry: 2,
    placeholderData: keepPreviousData,
    enabled: enabled,
    ...options,
  });
};

const handleGetBasket = async ({ cart_id }: IBasketReq) => {
  const response: IBasketRes = await graphQLClient.request(GET_BASKET, {
    cart_id,
  });

  return response;
};

export const useGetListItemBasket = (
  { cart_id }: IBasketReq,
  enabled?: boolean,
  options?: UseQueryOptions<IBasketRes>
) => {
  return useQuery({
    queryKey: ["basket"],
    queryFn: () =>
      handleGetBasket({
        cart_id,
      }),
    staleTime: 20 * 1000,
    retry: 2,
    placeholderData: keepPreviousData,
    enabled: enabled,
    ...options,
  });
};

export const useAddProductToBasket = () => {
  return useMutation({
    mutationFn: (body: IAddProductToBasketReq) => {
      return graphQLClient.request(ADD_PRODUCT_TO_BASKET, body);
    },
  });
};

export const useRemoveProductFromBasket = () => {
  return useMutation({
    mutationFn: (body: IRemoveProductFromBasketReq) => {
      return graphQLClient.request(REMOVE_PRODUCT_FROM_BASKET, body);
    },
  });
};

export const useUpdateProductToBasket = () => {
  return useMutation({
    mutationFn: (body: IUpdateProductFromBasketReq) => {
      return graphQLClient.request(UPDATE_PRODUCT_FROM_BASKET, body);
    },
  });
};
