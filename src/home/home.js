// ProductList.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentSlides, setCurrentSlides] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then((json) => {
        const slides = json.products.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setCurrentSlides(slides);
        setProducts(json.products);
      });
  }, []);

  const nextSlide = (e, productId, totalImages) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % totalImages
    }));
  };

  const prevSlide = (e, productId, totalImages) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: (prev[productId] - 1 + totalImages) % totalImages
    }));
  };

  const goToSlide = (e, productId, index) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: index
    }));
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-list-container">
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="slider-container">
              <div className="slider-images" style={{
                transform: `translateX(-${currentSlides[product.id] * 100}%)`
              }}>
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`Product ${index + 1}`} />
                ))}
              </div>
              <button 
                className="slider-button prev-button"
                onClick={(e) => prevSlide(e, product.id, product.images.length)}
              >
                ←
              </button>
              <button 
                className="slider-button next-button"
                onClick={(e) => nextSlide(e, product.id, product.images.length)}
              >
                →
              </button>
              <div className="slider-dots">
                {product.images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentSlides[product.id] === index ? 'active' : ''}`}
                    onClick={(e) => goToSlide(e, product.id, index)}
                  />
                ))}
              </div>
            </div>
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="price">{product.price}</p>
              <div className={`stock-status ${
                product.stock > 50 ? 'in-stock' : 
                product.stock > 10 ? 'low-stock' : 
                'out-of-stock'
              }`}>
                {product.stock > 50 ? 'In Stock' :
                 product.stock > 10 ? 'Low Stock' :
                 'Out of Stock'}
              </div>
              <p className="rating">Discount: {product.discountPercentage}%</p>
              <p className="stock">Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;