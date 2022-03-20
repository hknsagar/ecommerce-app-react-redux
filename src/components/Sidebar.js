import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  excludeOutOfStock,
  fastDelivery,
  rating,
  reset,
  sort,
} from "../redux/actions/filterActions";
import Rating from "./Rating";

const Sidebar = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <>
      <h5>Filter Products</h5>
      <div style={{ fontSize: "12px" }}>
        <Form.Check
          type="radio"
          name="sort_products"
          checked={filters.sort === "SORT_BY_ASC" ? true : false}
          onClick={() => dispatch(sort("SORT_BY_ASC"))}
          label="Low to High"
        />
        <Form.Check
          type="radio"
          name="sort_products"
          checked={filters.sort === "SORT_BY_DESC" ? true : false}
          onClick={() => dispatch(sort("SORT_BY_DESC"))}
          label="High to Low"
        />
        <Form.Check
          type="checkbox"
          label="Fast Delivery"
          checked={filters.fastDelivery}
          onClick={(e) => dispatch(fastDelivery(e.target.checked))}
        />
        <Form.Check
          type="checkbox"
          label="Exclude Out Of Stock"
          checked={filters.excludeOutOfStock}
          onClick={(e) => dispatch(excludeOutOfStock(e.target.checked))}
        />
        Rating: <Rating rating={filters.rating} onClick={(i) => dispatch(rating(i))} />
      </div>

      <div className="d-grid gap-2 mt-2">
        <Button variant="light" size="sm" onClick={() => dispatch(reset())}>
          Clear Filter
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
