"use client";

import { useRouter } from "next/navigation";
import { Button, Col, Layout, Row } from "antd";
import { useHasMounted } from "@/app/utils/hooks";
import BasketCard from "./basket.card";

import "./style.css";
import { useGlobalContext } from "@/app/lib/context.wrapper";
import { useGetListItemBasket } from "@/app/utils/hooks/api.hook";

const { Content } = Layout;

const BasketContent = () => {
  const hasMounted = useHasMounted();

  const { basket } = useGlobalContext() as IGlobalContext;

  const dataBasket = useGetListItemBasket({ cart_id: basket }, !!basket);

  if (dataBasket.error) return <h1>Something went wrong!</h1>;

  if (!hasMounted) return <></>;

  if (!basket) {
    useRouter().push("/product");
  }

  return (
    <div className="px-[50px]">
      <Content className="max-w-screen-xl m-auto">
        <header>
          <h1 className="my-6 text-xl">
            List of products in the shopping cart
          </h1>
        </header>
        <div className="max-h-[550px] overflow-y-auto border-[1px] border-gray-200 p-4 rounded-lg">
          <Row align="middle" gutter={16}>
            <Col span={1}></Col>
            <Col span={3}>
              <p>Product</p>
            </Col>
            <Col span={5}></Col>
            <Col span={5}>
              <p className="text-center">Unit price</p>
            </Col>
            <Col span={3}></Col>
            <Col span={5}>
              <p className="text-center">Total price</p>
            </Col>
            <Col span={2}>
              <p className="text-center">Action</p>
            </Col>
          </Row>
          {dataBasket.isSuccess &&
            dataBasket.data?.cart?.items?.length > 0 &&
            dataBasket.data?.cart?.items?.map((item, index) => (
              <BasketCard
                basket={basket}
                item={item}
                lastItem={index === dataBasket.data.cart.items.length - 1}
                key={item.uid}
              />
            ))}
        </div>
        <div className="flex items-center justify-between mt-5">
          <p>
            Total payment ({dataBasket.data?.cart.total_quantity} products):{" "}
            {dataBasket.data?.cart.prices.grand_total.value}$
          </p>
          <Button className="min-w-[100px]" type="primary">
            Buy
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default BasketContent;
