"use client";

import { Button, Col, Divider, Layout, Popover, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

import AppSearch from "./app.search";
import { image } from "@/app/assets/img";
import { BasketIcon } from "@/app/assets/icon";
import { useGlobalContext } from "@/app/lib/context.wrapper";
import { useGetListItemBasket } from "@/app/utils/hooks/api.hook";

const { Header, Content } = Layout;

const AppHeader = () => {
  const { basket } = useGlobalContext() as IGlobalContext;

  const dataBasket = useGetListItemBasket({ cart_id: basket }, !!basket);

  if (dataBasket.error) return <h1>Something went wrong!</h1>;

  const basketItems = () => {
    return (
      <div>
        <div className="max-h-[200px] overflow-y-auto">
          {dataBasket.isSuccess &&
            dataBasket.data?.cart?.items?.length > 0 &&
            dataBasket.data?.cart?.items?.map((item) => (
              <div key={item.uid}>
                <Row align="middle" gutter={16}>
                  <Col span={4}>
                    <Image
                      width={50}
                      height={50}
                      src={item.product.thumbnail.url}
                      alt={"product"}
                      style={{ objectFit: "cover" }}
                    />
                  </Col>
                  <Col span={10}>
                    <h4>{item.product.name}</h4>
                  </Col>
                  <Col span={5}>
                    <p>{item.prices.row_total.value}$</p>
                  </Col>
                  <Col span={5}>
                    <p>Total: {item.quantity}</p>
                  </Col>
                </Row>
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
              </div>
            ))}
        </div>
        <div className="flex justify-end">
          <Link
            href={
              dataBasket.isSuccess && dataBasket.data?.cart?.total_quantity > 0
                ? "/basket"
                : "#"
            }
          >
            <Button className="mt-5" type="primary">
              View basket
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Header
      style={{
        height: "fit-content",
        display: "flex",
        background: "#fff",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        marginBottom: "28px",
      }}
    >
      <Content className="max-w-screen-xl m-auto">
        <Row>
          <Col xl={2} lg={2} md={4} sm={4} xs={4}>
            <div className="flex h-full items-center">
              <Image
                src={image.logo}
                alt="user-avatar"
                width={55}
                height={55}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </Col>
          <Col xl={14} lg={14} md={12} sm={16} xs={16}>
            <div className="flex h-full items-center">
              <AppSearch />
            </div>
          </Col>
          <Col xl={8} lg={8} md={8} sm={4} xs={4}>
            <Popover
              placement="bottomRight"
              title={"List of products"}
              content={basketItems()}
              arrow={true}
              overlayStyle={{
                width: "390px",
                maxWidth: "75%",
              }}
            >
              <div className="flex h-full items-center justify-end">
                <span className="cursor-pointer relative">
                  {dataBasket.isSuccess &&
                    dataBasket.data?.cart?.total_quantity > 0 && (
                      <span className="flex items-center justify-center text-xs text-white absolute -right-2 border-2 border-white w-5 h-5 bg-red-500 rounded-full">
                        {dataBasket.data?.cart?.items.length}
                      </span>
                    )}
                  <BasketIcon width={35} height={35} />
                </span>
              </div>
            </Popover>
          </Col>
        </Row>
      </Content>
    </Header>
  );
};

export default AppHeader;
