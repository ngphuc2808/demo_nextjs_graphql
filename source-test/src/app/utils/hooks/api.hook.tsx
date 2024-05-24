import {
  UseQueryOptions,
  keepPreviousData,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  ADD_PRODUCT_TO_BASKET,
  GET_PRODUCTS,
  graphQLClient,
} from "@/app/api/query";

//interface

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

// export const useGetListItemBasket = (
//   { search, pageSize, currentPage }: IProductReq,
//   enabled?: boolean,
//   options?: UseQueryOptions<IProductRes>
// ) => {
//   return useQuery({
//     queryKey: ["products", search, pageSize, currentPage],
//     queryFn: () =>
//       handleGetProduct({
//         search,
//         pageSize,
//         currentPage,
//       }),
//     staleTime: 20 * 1000,
//     retry: 2,
//     placeholderData: keepPreviousData,
//     enabled: enabled,
//     ...options,
//   });
// };

export const useAddProductToBasket = () => {
  return useMutation({
    mutationFn: (body: IAddProductToBasketReq) => {
      return graphQLClient.request(ADD_PRODUCT_TO_BASKET, body);
    },
  });
};
