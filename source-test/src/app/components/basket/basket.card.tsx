import { Col, Divider, Input, Row, message } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import {
  useRemoveProductFromBasket,
  useUpdateProductToBasket,
} from "@/app/utils/hooks/api.hook";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  basket: string;
  item: IItemsBasket;
  lastItem?: boolean;
}

const BasketCard = ({ basket, item, lastItem }: IProps) => {
  const queryClient = useQueryClient();

  const updateProductToBasketApi = useUpdateProductToBasket();
  const removeProductToBasketApi = useRemoveProductFromBasket();

  const handleRemoveItemFromBasket = () => {
    if (item.product.__typename === "SimpleProduct") {
      removeProductToBasketApi.mutate(
        {
          removeItemFromCartInput: {
            cart_id: basket,
            cart_item_uid: item.uid,
          },
        },
        {
          onSuccess() {
            message.success("Remove product to basket successfully!");
            queryClient.invalidateQueries({ queryKey: ["basket"] });
          },
          onError() {
            message.error("Remove product to basket failed!");
          },
        }
      );
    } else {
      message.warning(
        "This function is under development and will be updated later!"
      );
    }
  };

  const handleUpdateItemFromBasket = (quantity: number) => {
    if (item.product.__typename === "SimpleProduct") {
      updateProductToBasketApi.mutate(
        {
          input: {
            cart_id: basket,
            cart_items: [
              {
                cart_item_uid: item.uid,
                quantity,
              },
            ],
          },
        },
        {
          onSuccess() {
            message.success("Update product to basket successfully!");
            queryClient.invalidateQueries({ queryKey: ["basket"] });
          },
          onError() {
            message.error("Update product to basket failed!");
          },
        }
      );
    } else {
      message.warning(
        "This function is under development and will be updated later!"
      );
    }
  };

  return (
    <>
      <Row align="middle" gutter={16}>
        <Col span={1}></Col>
        <Col span={3}>
          <Image
            width={65}
            height={65}
            src={item.product.thumbnail.url}
            alt={"product"}
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col span={5}>
          <h4>{item.product.name}</h4>
        </Col>
        <Col span={5}>
          <p className="text-center">{item.prices.price.value}$</p>
        </Col>
        <Col span={3}>
          <Input
            value={item.quantity}
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
                  if (item.quantity > 1) {
                    handleUpdateItemFromBasket(item.quantity - 1);
                  } else {
                    handleRemoveItemFromBasket();
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
                  handleUpdateItemFromBasket(item.quantity + 1);
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
          <p className="text-center">{item.prices.row_total.value}$</p>
        </Col>
        <Col span={2}>
          <span
            className="cursor-pointer hover:text-red-500 text-center block"
            onClick={handleRemoveItemFromBasket}
          >
            <CloseCircleOutlined />
          </span>
        </Col>
      </Row>
      {!lastItem && (
        <Divider
          style={{
            margin: "10px 0",
          }}
        />
      )}
    </>
  );
};

export default BasketCard;
