import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";

const Sidebar = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <h5>Filter Products</h5>
      <div style={{ fontSize: "12px" }}>
        <Form.Check type="radio" name="sort_products" label="Low to High" />
        <Form.Check type="radio" name="sort_products" label="High to Low" />
        <Form.Check type="checkbox" label="Fast Delivery" />
        <Form.Check type="checkbox" label="Include Out Of Stock" />
        Rating: <Rating rating={rating} onClick={(i) => setRating(i)} />
      </div>

      <div className="d-grid gap-2 mt-2">
        <Button variant="light" size="sm">
          Clear Filter
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
