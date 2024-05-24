import ProductContent from "@/app/components/product";
import { handleCreateEmptyBasket } from "@/app/server/actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Product with Next.Js",
};

const ProductPage = async () => {
  const basket = await handleCreateEmptyBasket();

  return <ProductContent basket={basket.createEmptyCart} />;
};

export default ProductPage;
