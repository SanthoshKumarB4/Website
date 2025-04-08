// ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./product.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    quantity: 1,
    paymentMethod: "creditCard"
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order submitted:", { product, formData });
    
    // Simulate successful order placement
    setOrderSuccess(true);
    setTimeout(() => {
      setShowOrderForm(false);
      setOrderSuccess(false);
    }, 3000);
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  // Conversion rate (example: 1 USD = 83 INR)
  const usdToInrRate = 30;
  const priceInr = (product.price * usdToInrRate).toFixed(2);

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
            <div className="main-price"> <span className="inr-price">(₹{priceInr})</span></div>
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
          <button className="add-to-cart" onClick={() => setShowOrderForm(true)}>
            Add to Cart
          </button>
        </div>
      </div>

      {showOrderForm && (
        <div className="order-modal">
          <div className="order-form-container">
            <button 
              className="close-button" 
              onClick={() => {
                setShowOrderForm(false);
                setOrderSuccess(false);
              }}
            >
              ×
            </button>
            
            {orderSuccess ? (
              <div className="order-success">
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for your purchase. Your order has been received.</p>
              </div>
            ) : (
              <>
                <h2>Place Your Order</h2>
                <form onSubmit={handleSubmit}>
  <div className="form-group">
    <input 
      type="text" 
      value={product.title} 
      readOnly 
      className="read-only-input"
    />
  </div>
  
  <div className="form-group">
    <input 
      type="text" 
      value={` (₹${priceInr})`} 
      readOnly 
      className="read-only-input"
    />
  </div>
  
  <div className="form-group">
    <input
      type="number"
      name="quantity"
      min="1"
      max={product.stock}
      value={formData.quantity}
      onChange={handleInputChange}
      required
      placeholder="Quantity"
    />
  </div>
  
  <div className="form-group">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      required
      placeholder="Full Name"
    />
  </div>
  
  <div className="form-group">
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
      placeholder="Email Address"
    />
  </div>
  
  <div className="form-group">
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      required
      placeholder="Phone Number"
    />
  </div>
  
  <div className="form-group">
    <textarea
      name="address"
      value={formData.address}
      onChange={handleInputChange}
      required
      placeholder="Delivery Address"
    />
  </div>
  
  <div className="form-row">
    <div className="form-group">
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        required
        placeholder="City"
      />
    </div>
    
    <div className="form-group">
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        required
        placeholder="State/Province"
      />
    </div>
    
    <div className="form-group">
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}
        required
        placeholder="Zip/Postal Code"
      />
    </div>
  </div>
  
  <div className="form-group">
    <select
      name="paymentMethod"
      value={formData.paymentMethod}
      onChange={handleInputChange}
      required
    >
      <option value="" disabled hidden>Select Payment Method</option>
      <option value="creditCard">Credit Card</option>
      <option value="debitCard">Debit Card</option>
      <option value="paypal">PayPal</option>
      <option value="upi">UPI</option>
      <option value="cashOnDelivery">Cash on Delivery</option>
    </select>
  </div>
  
  <div className="form-actions">
    <button type="submit" className="submit-order">
      Place Order
    </button>
  </div>
</form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;