import React, { useState, useEffect } from "react";
import 'animate.css';
import { Link } from "react-router-dom";
import axios from "axios";
import ProductsComp from "../../Components/productsComp/ProductsComp";
import Services from "../../Components/Services/Services";
import { FaSearch } from "react-icons/fa"; // Make sure to import the search icon
import "./index.scss";
import pro from "./pro.jpg";

export default function AllProduct({ handelCount }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);

  const filterAndSortProducts = (products) => {
    return products
      .filter(product => {
        const price = parseFloat(product.price);
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = (minPrice === "" || price >= minPrice) && (maxPrice === "" || price <= maxPrice);
        return matchesSearch && matchesPrice;
      })
      .sort((a, b) => sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price);
  };

  return (
    <>
 <div className="AllProduct">
  <div className="img">
    <img src={pro} alt="" />

  </div>
  <div className="adress text animate__animated animate__fadeInDown">
    <h1>Welcome to All Product</h1> 
  </div>
  <div className="links ">
  <Link className="link_orders" to="/CatAll">
           Category
          </Link>
  </div>
      </div>





      <div className="container">
        <div className="layout">
          <div className="col-md-3">
            <div className="d-flex flex-column gap-3">
              <div className="mb-3">
                <label htmlFor="searchByName" className="form-label">Search by name:</label>
                <div className="input-group relative">
                  <input
                    type="text"
                    className="form-control"
                    id="searchByName"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by name"
                  />
                  <FaSearch className="search-icon" style={{ top: "12px", right: "10px", zIndex: "10" }} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="priceRange" className="form-label">Search by price range:</label>
                <div className="d-flex align-items-center mb-3">
                  <div className="input-group me-2">
                    <span className="input-group-text">Min</span>
                    <input
                      type="number"
                      className="form-control"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <span className="mx-2">-</span>
                  <div className="input-group ms-2">
                    <span className="input-group-text">Max</span>
                    <input
                      type="number"
                      className="form-control"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="sortOrder" className="form-label">Sort by:</label>
                <select className="form-select" id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="cards-section col-md-9">
            {["breakfast", "lunch", "Dinner", "Fruits"].map(category => (
              <div key={category}>
                <div className="row">
                  {data[category] && filterAndSortProducts(data[category]).map((product, index) => (
                    <ProductsComp
                      key={index}
                      img={product.img}
                      h1={product.title}
                      h6={product.type}
                      h5={product.important}
                      nm={product.nm}
                      p={product.price}
                      stars={product.stars}
                      Categuary={product.Categuary}
                      Gradions={product.Gradions}
                      sold={product.sold}
                      handelCount={() => handelCount(product)}
                      className="m-3"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}
