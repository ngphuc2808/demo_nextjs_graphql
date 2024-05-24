import { Checkbox, Col, Divider, Input, Row } from "antd";
import React, { Fragment, useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

const BasketCard = () => {
  const [select, setSelect] = useState<boolean>(false);
  const [initValue, setInitValue] = useState<number>(1);

  return (
    <Fragment>
      <Row align="middle" gutter={16}>
        <Col span={1}>
          <Checkbox
            checked={select}
            onChange={(e) => setSelect(e.target.checked)}
          />
        </Col>
        <Col span={3}>
          <img
            src={
              "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
            alt={"product"}
            style={{ width: "65px", height: "65px", objectFit: "cover" }}
          />
        </Col>
        <Col span={5}>
          <h4>{"123"}</h4>
        </Col>
        <Col span={5}>
          <p className="text-center">{"1000đ"}</p>
        </Col>
        <Col span={3}>
          <Input
            value={initValue}
            min={1}
            type="number"
            onKeyPress={(event) => {
              if (event.charCode < 48) {
                event.preventDefault();
              }
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 40 || e.keyCode === 38) {
                e.preventDefault();
              }
            }}
            prefix={
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (initValue > 0) {
                    setInitValue((prev) => prev - 1);
                  }
                }}
              >
                -
              </span>
            }
            suffix={
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setInitValue((prev) => prev + 1);
                }}
              >
                +
              </span>
            }
            style={{
              borderRadius: "8px",
              fontWeight: "600",
            }}
          />
        </Col>
        <Col span={5}>
          <p className="text-center">{"1000đ"}</p>
        </Col>
        <Col span={2}>
          <span className="cursor-pointer hover:text-red-500 text-center block">
            <CloseCircleOutlined />
          </span>
        </Col>
      </Row>
      <Divider
        style={{
          margin: "10px 0",
        }}
      />
    </Fragment>
  );
};

export default BasketCard;
