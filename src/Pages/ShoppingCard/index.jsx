
import { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

export default function ShoppingCard({
  bascet,
  handleDeleteAllItems,
  handleDeleteItem,
}) {
  const [cartitems, setcartitems] = useState([]);

  useEffect(() => {
    setcartitems(bascet);
  }, [bascet]);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cards", JSON.stringify(items));
  };

  const increment = (index) => {
    const newCartItems = [...cartitems];
    newCartItems[index].count += 1;
    updateLocalStorage(newCartItems);
    setcartitems(newCartItems);
  };

  const decrement = (index) => {
    const newCartItems = [...cartitems];
    if (newCartItems[index].count > 1) {
      newCartItems[index].count -= 1;
      updateLocalStorage(newCartItems);
      setcartitems(newCartItems);
    } else {
      toast.error("Item count cannot be less than 1.");
    }
  };

  const deleteItem = (index) => {
    const newCartItems = [...cartitems];
    const itemToDelete = newCartItems[index];
    newCartItems.splice(index, 1);
    updateLocalStorage(newCartItems);
    setcartitems(newCartItems);
    handleDeleteItem(itemToDelete);
  };

  const deleteAllItems = () => {
    localStorage.removeItem("cards");
    setcartitems([]);
    handleDeleteAllItems();
  };

  // Calculate total items and total price
  const totalItems = cartitems.reduce((total, item) => total + item.count, 0);
  const totalPrice = cartitems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="ShoppingCard mb-7">
      <h1 className="text-center my-3">Shopping Cart</h1>
      <div className="container">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Img
              </th>
              <th scope="col" className="text-center">
                Title
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Count
              </th>
              <th scope="col" className="text-center">
                Delete Item
              </th>
            </tr>
          </thead>
          <tbody>
            {cartitems.map((el, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td>
                  <img src={el.img} alt={el.title} />
                </td>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td>
                  <button
                    className="btn btn-success m-1"
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                  <span className="fs-7">{el.count}</span>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => decrement(index)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <FontAwesomeIcon
                    className="text-danger delet"
                    icon={faTrash}
                    onClick={() => deleteItem(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="summary d-flex justify-content-between col-12 table table-bordered">
          <h4 className="text-success">
            Total Items:{" "}
            <span className="fs-5 text-black">{totalItems} Items</span>
          </h4>
          <h4 className="text-success">
            Total Price:{" "}
            <span className="fs-5 text-black">{totalPrice.toFixed(2)} EGP</span>
          </h4>
        </div>
        <div className="checkout d-flex justify-content-end col-12">
          <Link className="link_orders" to="/login">
            Checkout
          </Link>
          <button className="link_orders" onClick={deleteAllItems}>
            Delete All Items
          </button>
        </div>
      </div>
    </div>
  );
}
