"use client";

import { Button, Col, Divider, Layout, Popover, Row } from "antd";
import Image from "next/image";

import AppSearch from "./app.search";
import { image } from "@/app/assets/img";
import { BasketIcon } from "@/app/assets/icon";
import Link from "next/link";

const { Header, Content } = Layout;

const AppHeader = () => {
  const basketItems = () => {
    return (
      <div>
        <div className="max-h-[200px] overflow-y-auto">
          <Row align="middle" gutter={16}>
            <Col span={4}>
              <img
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              {/* <Image
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                width={50}
                height={50}
                objectFit="cover"
              /> */}
            </Col>
            <Col span={14}>
              <h4>123</h4>
            </Col>
            <Col span={6}>
              <p>456</p>
            </Col>
          </Row>
          <Divider
            style={{
              margin: "8px 0",
            }}
          />
          <Row align="middle" gutter={16}>
            <Col span={6}>
              <img
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              {/* <Image
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                width={50}
                height={50}
                objectFit="cover"
              /> */}
            </Col>
            <Col span={12}>
              <h4>123</h4>
            </Col>
            <Col span={6}>
              <p>456</p>
            </Col>
          </Row>
          <Divider
            style={{
              margin: "8px 0",
            }}
          />
          <Row align="middle" gutter={16}>
            <Col span={6}>
              <img
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              {/* <Image
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                width={50}
                height={50}
                objectFit="cover"
              /> */}
            </Col>
            <Col span={12}>
              <h4>123</h4>
            </Col>
            <Col span={6}>
              <p>456</p>
            </Col>
          </Row>
          <Row align="middle" gutter={16}>
            <Col span={6}>
              <img
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              {/* <Image
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                width={50}
                height={50}
                objectFit="cover"
              /> */}
            </Col>
            <Col span={12}>
              <h4>123</h4>
            </Col>
            <Col span={6}>
              <p>456</p>
            </Col>
          </Row>
          <Row align="middle" gutter={16}>
            <Col span={6}>
              <img
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              {/* <Image
                src={
                  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                alt={"product"}
                width={50}
                height={50}
                objectFit="cover"
              /> */}
            </Col>
            <Col span={12}>
              <h4>123</h4>
            </Col>
            <Col span={6}>
              <p>456</p>
            </Col>
          </Row>
        </div>
        <div className="flex justify-end">
          <Link href={"/basket"}>
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
                  <span className="flex items-center justify-center text-xs text-white absolute -right-2 border-2 border-white w-5 h-5 bg-red-500 rounded-full">
                    12
                  </span>
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
