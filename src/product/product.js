
// ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./product.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
      <div className="product-details">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[currentImageIndex]} alt={product.title} />
          </div>
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={currentImageIndex === index ? 'active' : ''}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-info-detailed">
          <h1>{product.title}</h1>
          <div className="brand">Brand: {product.brand}</div>
          <div className="price-section">
            <div className="main-price">${product.price}</div>
            <div className="discount">-{product.discountPercentage}%</div>
          </div>
          <p className="description">{product.description}</p>
          <div className="additional-info">
            <div className="info-item">
              <span>Category:</span> {product.category}
            </div>
            <div className="info-item">
              <span>Rating:</span> {product.rating} / 5
            </div>
            <div className={`stock-status ${
              product.stock > 50 ? 'in-stock' : 
              product.stock > 10 ? 'low-stock' : 
              'out-of-stock'
            }`}>
              {product.stock > 50 ? 'In Stock' :
               product.stock > 10 ? 'Low Stock' :
               'Out of Stock'} ({product.stock} units)
            </div>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;