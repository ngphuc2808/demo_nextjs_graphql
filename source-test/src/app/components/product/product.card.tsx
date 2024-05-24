import { Avatar, Button, Card, Col, Input, Rate, Row, message } from "antd";
import { HeartTwoTone, HeartOutlined } from "@ant-design/icons";

import "./style.css";
import { useState } from "react";
import Image from "next/image";
import { useAddProductToBasket } from "@/app/utils/hooks/api.hook";

const { Meta } = Card;

interface IProps {
  item: IItems;
  basket: string;
}

const CardItem = ({ item, basket }: IProps) => {
  const addProductToBasketApi = useAddProductToBasket();

  const [initValue, setInitValue] = useState<number>(1);
  const [like, setLike] = useState<boolean>(false);

  const ratingSummary = item.rating_summary_start;
  const totalStars =
    ratingSummary.star_1 * 1 +
    ratingSummary.star_2 * 2 +
    ratingSummary.star_3 * 3 +
    ratingSummary.star_4 * 4 +
    ratingSummary.star_5 * 5;
  const totalRatings =
    ratingSummary.star_1 +
    ratingSummary.star_2 +
    ratingSummary.star_3 +
    ratingSummary.star_4 +
    ratingSummary.star_5;
  const averageRating = totalRatings > 0 ? totalStars / totalRatings : 0;

  const handleAddToBasket = () => {
    addProductToBasketApi.mutate(
      {
        cartId: basket,
        cartItems: [
          {
            sku: item.sku,
            quantity: initValue,
          },
        ],
      },
      {
        onSuccess() {
          message.success("Add product to basket successfully!");
          // queryClient.invalidateQueries({ queryKey: ['UserInfo'] })
        },
        onError() {
          message.error("Add product to basket failed!");
        },
      }
    );
  };

  return (
    <Card
      style={{ width: 300, position: "relative" }}
      cover={
        <div className="w-full h-[180px] top-1 relative">
          <Image
            fill
            style={{
              objectFit: "contain",
            }}
            alt="thumb"
            src={item.thumbnail.url}
          />
        </div>
      }
      actions={[
        <div className="flex items-center justify-around">
          <Row className="flex items-center gap-3 mx-4">
            <Col span={8}>
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
            <Col span={12}>
              <Button onClick={handleAddToBasket}>Add to basket</Button>
            </Col>
          </Row>
          <span className="cursor-pointer px-4" onClick={() => setLike(!like)}>
            {like ? (
              <span className="text-xl">
                <HeartTwoTone twoToneColor="#eb2f96" />
              </span>
            ) : (
              <span className="text-xl">
                <HeartOutlined />
              </span>
            )}
          </span>
        </div>,
      ]}
    >
      <Meta
        title={
          <div className="flex justify-between items-center">
            <p>{item.name}</p>
            <p className="font-thin">
              {item.stock_status === "IN_STOCK" ? "In stock" : "Out of stock"}
            </p>
          </div>
        }
        description={`Price: ${item.price_range.maximum_price.final_price.value} $`}
      />
      <p className="text-[#00000073]">Rating summary: {item.rating_summary}</p>
      <p className="text-[#00000073]">View summary: {item.review_count}</p>

      <div className="mt-2">
        <Rate disabled defaultValue={averageRating} />
      </div>

      <div className="region-tag w-[47px] h-[17px] text-xs top-[3px]">
        {item.sku}
      </div>
      <div className="tag top-[25px]" />
    </Card>
  );
};

export default CardItem;
