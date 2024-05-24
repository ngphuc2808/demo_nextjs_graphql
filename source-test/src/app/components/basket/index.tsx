"use client";

import { Button, Col, Layout, Row } from "antd";

import { useHasMounted } from "@/app/utils/hooks";
import BasketCard from "./basket.card";

import "./style.css";

const { Content } = Layout;

const BasketContent = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return <></>;

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
              <p className="text-center">Amount</p>
            </Col>
            <Col span={2}>
              <p className="text-center">Action</p>
            </Col>
          </Row>
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />
        </div>
        <div className="flex items-center justify-between mt-5">
          <p>Total payment (2 products): VND 1,723,000</p>
          <Button className="min-w-[100px]" type="primary">
            Buy
          </Button>
        </div>
      </Content>
    </div>
  );
};

export default BasketContent;
