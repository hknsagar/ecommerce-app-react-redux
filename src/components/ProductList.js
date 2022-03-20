import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart.cart);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  let filteredProducts = [...products];
  const getFilteredProducts = () => {
    if (filters.sort === "SORT_BY_ASC") {
      filteredProducts = [
        ...filteredProducts.sort((product1, product2) => product1.price - product2.price),
      ];
    }

    if (filters.sort === "SORT_BY_DESC") {
      filteredProducts = [
        ...filteredProducts.sort((product1, product2) => product2.price - product1.price),
      ];
    }

    if (filters.fastDelivery) {
      filteredProducts = filteredProducts.filter((product) => product.deliverySpeed === 1);
    }

    if (filters.excludeOutOfStock) {
      filteredProducts = filteredProducts.filter((product) => product.inStock !== 0);
    }

    if (filters.rating !== 0) {
      filteredProducts = filteredProducts.filter((product) => product.rating === filters.rating);
    }

    return filteredProducts;
  };

  console.log("state change");

  return (
    <Row xs={1} md={3} className="mt-3">
      {getFilteredProducts().map((product) => (
        <Col className="mb-3" key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Badge bg="success">
                {Array.from({ length: product.rating }).map((_, idx) => (
                  <BsStarFill key={idx} />
                ))}
              </Badge>
              <div>
                <strong>
                  <FaRupeeSign size="14px" />
                  {product.price}
                </strong>
              </div>
              <div style={{ fontSize: "12px" }}>
                {product.deliverySpeed === 1
                  ? "Fast Delivery"
                  : `${product.deliverySpeed} day Delivery`}
              </div>
              <div className="d-grid gap-2">
                {cart.some((item) => item.id === product.id) ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      dispatch(removeFromCart(product));
                    }}
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                    disabled={!product.inStock}
                  >
                    {!product.inStock ? "Out Of Stock" : "Add to Cart"}
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
