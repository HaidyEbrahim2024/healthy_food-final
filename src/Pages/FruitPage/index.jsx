import { useEffect, useState } from "react";
import "./index.scss";
import ProductsComp from "../../Components/productsComp/ProductsComp";
import axios from "axios";
import y from "./fruits.png";
import { FaSearch } from 'react-icons/fa';

export default function LunchPage({ handelCount, increment }) {
  const [FruitItem, setFruitItem] = useState([]);
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchLunchItem = async () => {
      try {
        const response = await axios.get("/data.json");
        setFruitItem(response.data.Fruits);
      } catch (error) {
        console.error("Error fetching lunch items:", error);
      }
    };
    fetchLunchItem();
  }, []);

  const sortItems = (order) => {
    const sortedItems = [...FruitItem].sort((a, b) => 
      order === 'lowToHigh' ? a.price - b.price : b.price - a.price
    );
    setFruitItem(sortedItems);
  };

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortItems(selectedOrder);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredItems = FruitItem.filter(item => {
    const matchesName = item.title.toLowerCase().includes(searchQuery);
    const itemPrice = parseFloat(item.price);
    const matchesPrice = (
      (minPrice === '' || itemPrice >= parseFloat(minPrice)) &&
      (maxPrice === '' || itemPrice <= parseFloat(maxPrice))
    );
    return matchesName && matchesPrice;
  });

  return (
    <>
      <div className="mealfruit">
        <div className="image col-12">
          <div className="picture">
            <img src={y} className="rotate-animation img col-8" alt="Fruits" />
          </div>
          <div className="text">
            <h1>Fruits OF</h1>
            <h3>oberin food</h3>
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
                  h6={product.type}
                  h5={product.important}
                  handelCount={() => handelCount(product)}
                  increment={() => increment(product)}
                  img={product.img}
                  h1={product.title}
                  p={product.price}
                  stars={product.stars}
                  Categuary={product.Categuary}
                  Gradions={product.Gradions}
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
