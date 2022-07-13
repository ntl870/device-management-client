import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/product";
import { Image, Row, Col, Typography, Spin } from "antd";

export const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(({ data }) => {
        setProduct(data.product);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );

  return (
    <div style={{ margin: "2rem" }}>
      <Row justify="flex-start">
        <Col span={10}>
          <Image src={product.image} />
        </Col>
        <Col span={12} style={{ marginTop: "1rem" }}>
          <Typography.Title level={4}>{product?.name}</Typography.Title>
          <Typography.Title level={5}>
            Type: {product?.category?.name}
          </Typography.Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
              border: "1px solid #e8e8e8",
              padding: "0.5rem",
            }}
          >
            <Typography.Text level={4}>
              {<strong>Price: ${product.price}</strong>}
            </Typography.Text>
            <Typography.Text level={4}>
              {<strong>Stock: {product.stock}</strong>}
            </Typography.Text>
            <Typography.Text level={4}>
              {<strong>Sold Quantity: {product.soldQuantity}</strong>}
            </Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};
