import type { Metadata } from "next";
import { Button } from "antd";
import BasketContent from "@/app/components/basket";

export const metadata: Metadata = {
  title: "Product",
  description: "Product with Next.Js",
};

const BasketPage = () => {
  return <BasketContent />;
};

export default BasketPage;
