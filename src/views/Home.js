import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="2" id="colSidebar">
          <Sidebar />
        </Col>
        <Col md={{ offset: 2 }}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
