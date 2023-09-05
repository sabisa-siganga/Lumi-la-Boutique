import React from "react";
import Dress from "../../images/dress.jpg";
import Trouser from "../../images/trouser.jpg";
import Shorts from "../../images/shorts.jpg";
import Jumpsuit from "../../images/jumpsuit.jpg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Product from "../product/product";

function Products() {
  // products array
  const products = [
    {
      name: "Dress",
      image: Dress,
      price: "R449,99",
    },
    {
      name: "Jumpsuit",
      image: Jumpsuit,
      price: "R549,99",
    },
    {
      name: "Shorts",
      image: Shorts,
      price: "R649,99",
    },
    {
      name: "Pants",
      image: Trouser,
      price: "R749,99",
    },
  ];

  // iterating through the products array to display each product using the map function
  const productList = products.map((product, index) => {
    // passing the props to Product component
    return (
      <Product
        name={product.name}
        image={product.image}
        price={product.price}
        key={index}
      />
    );
  });

  return (
    <Container className="itemList">
      <h4 className="mb-5 text-center">
        Elevate Your Style, Elevate Your Savings – Shop with Us Today!
      </h4>
      {/* rendering productList variable in the Row component to display products in rows */}
      <Row className="itemRow ">{productList}</Row>
    </Container>
  );
}

export default Products;
