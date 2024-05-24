"use client";

import { Col, Layout, Row } from "antd";
import Image from "next/image";

import { image } from "@/app/assets/img";

const { Header, Content } = Layout;

const SubHeader = () => {
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
          <Col span={24}>
            <div className="flex h-full items-center justify-center">
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
        </Row>
      </Content>
    </Header>
  );
};

export default SubHeader;
