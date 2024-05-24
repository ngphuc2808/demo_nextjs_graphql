"use server";

import { CREATE_EMPTY_BASKET, graphQLClient } from "@/app/api/query";

export const handleCreateEmptyBasket = async () => {
  const response: IEmptyBasketRes = await graphQLClient.request(
    CREATE_EMPTY_BASKET
  );

  return response;
};
