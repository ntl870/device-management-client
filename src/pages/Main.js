import { Row, Col, Card, Spin } from "antd";
import { useState, useEffect } from "react";
import { getListProduct } from "../api/product";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getListProduct()
      .then(({ data }) => {
        setProducts(data.products);
      })
      .finally(() => setLoading(false));
  }, []);

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
    <div style={{ padding: "2rem" }}>
      <Row gutter={[32, 32]}>
        {products?.map((product) => (
          <Col span={8}>
            <Card
              hoverable
              cover={
                <img
                  alt="cover"
                  src={product.image}
                  onClick={() => navigate(`/detail/${product.id}`)}
                />
              }
            >
              <Card.Meta
                title={product.name}
                description={
                  <div style={{ display: "flex" }}>
                    <strong
                      style={{ marginRight: "1rem", fontSize: "1.5rem" }}
                    >{`Price: $${product.price}`}</strong>
                    <strong
                      style={{ marginRight: "1rem" }}
                    >{`Stock: ${product.stock}`}</strong>
                    <strong
                      style={{ marginRight: "1rem" }}
                    >{`Qty: ${product.soldQuantity}`}</strong>
                    <strong>{`Type: ${product.category.name}`}</strong>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
