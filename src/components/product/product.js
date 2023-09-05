import React from "react";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Product(props) {
  return (
    // rendering the name, image and price of the product in a column
    <Col xs={12} md={4} lg={4} className="productDisplay text-center">
      <Image src={props.image} />
      <h5 className="pt-3 mb-3">{props.name}</h5>
      <p>{props.price}</p>
    </Col>
  );
}

export default Product;
