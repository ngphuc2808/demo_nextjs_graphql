"use client";

import { useState } from "react";
import { Col, Layout, Pagination, Row, Spin } from "antd";
import type { PaginationProps } from "antd";

import { useHasMounted } from "@/app/utils/hooks";
import { useGetListProducts } from "@/app/utils/hooks/api.hook";

import CardItem from "./product.card";
import { useGlobalContext } from "@/app/lib/context.wrapper";

const { Content } = Layout;

interface IProps {
  basket: string;
}

const ProductContent = ({ basket }: IProps) => {
  const { dataSearch } = useGlobalContext() as IGlobalContext;

  const [current, setCurrent] = useState<number>(1);

  const { data, error, isLoading, isSuccess } = useGetListProducts({
    search: dataSearch,
    pageSize: 10,
    currentPage: current,
  });

  const hasMounted = useHasMounted();

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  if (error) return <h1>Something went wrong!</h1>;
  if (!hasMounted) return <></>;

  return (
    <div className="px-[50px]">
      <Content className="max-w-screen-xl m-auto">
        <header>
          <h1 className="my-6 text-xl">List of products</h1>
        </header>
        {isLoading ? (
          <div className="w-full flex justify-center">
            <Spin />
          </div>
        ) : (
          <Row gutter={[16, 16]} className="max-h-[750px] overflow-y-auto">
            {isSuccess &&
              data?.products?.items.map((item) => (
                <Col
                  key={item.uid}
                  xl={6}
                  lg={8}
                  md={8}
                  sm={12}
                  xs={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CardItem item={item} basket={basket} />
                </Col>
              ))}
          </Row>
        )}
      </Content>
      {isSuccess && data.products.total_count > 0 && (
        <Pagination
          style={{
            marginTop: "24px",
          }}
          className="flex items-center justify-center"
          current={current}
          onChange={onChange}
          total={data.products.total_count}
          showSizeChanger={false}
        />
      )}
    </div>
  );
};

export default ProductContent;
