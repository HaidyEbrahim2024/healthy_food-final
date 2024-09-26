
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsComp from "../../Components/productsComp/ProductsComp";
import ProductSearch from "../../Components/ProductSearch/ProductSearch";
import { FaSearch } from "react-icons/fa"; // Import FaSearch icon
import "./index.scss";
import bre from "./break.png";

export default function BreakfastPage({ handelCount, increment }) {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchBreakfastItems = async () => {
      try {
        const response = await axios.get("/data.json");
        console.log(response.data.breakfast);
        setBreakfastItems(response.data.breakfast);
      } catch (error) {
        console.error("Error fetching breakfast items:", error);
      }
    };
    fetchBreakfastItems();
  }, []);

  const sortItems = (order) => {
    const sortedItems = [...breakfastItems].sort((a, b) => {
      if (order === 'lowToHigh') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setBreakfastItems(sortedItems);
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortItems(selectedOrder);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Handle price range input change
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Filter items based on search query and price range
  const filteredItems = breakfastItems.filter(item => {
    const matchesName = item.title.toLowerCase().includes(searchQuery);
    const matchesPrice = (
      (minPrice === '' || item.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || item.price <= parseFloat(maxPrice))
    );
    return matchesName && matchesPrice;
  });

  return (
    <>
      <div className="mealbreakfat">
        <div className="image col-12">
          <img src={bre} alt="" className="rotate-animation img col-3" />
          <div className="text">
            <h1>Breakfast OF</h1>
            <h3>Oberin Food</h3>
          </div>
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
                  <FaSearch className="search-icon z-10" style={{ top: "12px", right: "10px", zIndex: "10" }} />
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
          <div className="cards-section">
            <div className="row">
              {filteredItems.map((product, index) => (
                <ProductsComp
                  key={index}
                  handelCount={() => handelCount(product)}
                  increment={() => increment(product)}
                  img={product.img}
                  h1={product.title}
                  h6={product.type}
                  p={product.price}
                  stars={product.stars}
                  Categuary={product.Categuary}
                  Gradions={product.Gradions}
                  h5={product.important}
                  nm={product.nm}
                  sold={product.sold}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
