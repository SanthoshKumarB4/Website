import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentSlides, setCurrentSlides] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((json) => {
        const slides = json.products.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setCurrentSlides(slides);
        setProducts(json.products);
      });
  }, []);

  return (
    <div className="product-list-container">
      <h1 style={{ textAlign: "center" }}>Laptop Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className="slider-container">
              <div
                className="slider-images"
                style={{ transform: `translateX(-${currentSlides[product.id] * 100}%)` }}
              >
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`Laptop ${index + 1}`} />
                ))}
              </div>
              <button
                className="slider-button prev-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentSlides((prev) => ({
                    ...prev,
                    [product.id]: (prev[product.id] - 1 + product.images.length) % product.images.length,
                  }));
                }}
              >
                ←
              </button>
              <button
                className="slider-button next-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentSlides((prev) => ({
                    ...prev,
                    [product.id]: (prev[product.id] + 1) % product.images.length,
                  }));
                }}
              >
                →
              </button>
              <div className="slider-dots">
                {product.images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentSlides[product.id] === index ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentSlides((prev) => ({
                        ...prev,
                        [product.id]: index,
                      }));
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <div
                className={`stock-status ${
                  product.stock > 50
                    ? "in-stock"
                    : product.stock > 10
                    ? "low-stock"
                    : "out-of-stock"
                }`}
              >
                {product.stock > 50 ? "In Stock" : product.stock > 10 ? "Low Stock" : "Out of Stock"}
              </div>
              <p className="rating">Discount: {product.discountPercentage}%</p>
              <p className="stock">Stock: {product.stock}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
