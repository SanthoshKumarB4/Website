import React from "react";
import "./home.css";
class ProductList extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            DataisLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((json) => {
                this.setState({
                    products: json.products,  // assuming the products are in the "products" field
                    DataisLoaded: true,
                });
            });
    }

    render() {
        const { DataisLoaded, products } = this.state;
        
        if (!DataisLoaded) {
            return <h1 className="loading-message">Loading...</h1>;
        }

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Product List</h1>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="product-card"> {product.id} 
                        <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p className="price">Price: ${product.price}</p>
                            <p>Rating:{product.rating}</p>
                        
                        </div>
                        
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductList;
