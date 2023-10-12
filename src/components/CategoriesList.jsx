import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function CategoriesList({ categories, activeCategory, onCategoryChange }) {
  return (
    <Nav variant="tabs" activeKey={activeCategory} onSelect={onCategoryChange}>
      {categories.map((category) => (
        <Nav.Item key={category}>
          <Nav.Link eventKey={category}>{category}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CategoriesList;
