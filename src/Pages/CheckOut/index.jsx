// // import React, { useState, useEffect } from 'react';
// // import './index.scss'; // تأكد من صحة المسار إلى ملف SCSS الخاص بك
// // import toast from "react-hot-toast";

// // import axios from 'axios';
// // import ProductsComp from '../../Components/productsComp/ProductsComp';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// // import { Link } from 'react-router-dom';

// // import visa from './visa.png';
// // import mastercard from './Mastercard.png';
// // import other from './other.png';

// // export default function ProductSearch() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [products, setProducts] = useState(null);
// //   const [address, setAddress] = useState('');
// //   const [showAddressInput, setShowAddressInput] = useState(false);
// //   const [cartitems, setCartitems] = useState([]); // Example cart items
// //   const [totalItems, setTotalItems] = useState(0);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [shippingCost, setShippingCost] = useState(0);
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await axios.get('/data.json');
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   useEffect(() => {
// //     if (products && searchTerm) {
// //       const results = [];
// //       for (const key in products) {
// //         const category = products[key];
// //         const filteredProducts = category.filter((product) =>
// //           product.title.toLowerCase().includes(searchTerm.toLowerCase())
// //         );
// //         results.push(...filteredProducts);
// //       }
// //       setSearchResults(results);
// //     } else {
// //       setSearchResults([]);
// //     }
// //   }, [searchTerm, products]);

// //   const handleChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleCloseSearch = () => {
// //     setSearchTerm('');
// //     setSearchResults([]);
// //   };

// //   const handleCityChange = (e) => {
// //     if (e.target.value) {
// //       setShowAddressInput(true);
// //     } else {
// //       setShowAddressInput(false);
// //     }
// //   };

// //   const handlePaymentMethodChange = (e) => {
// //     setSelectedPaymentMethod(e.target.value);
// //   };

// //   const handleSend = () => {
// //     toast.success("Your information has been sent successfully!");
// //     position: "top-center"
    


// //   };
// //   // <i class="fa-solid fa-arrow-right-from-bracket"></i>

// //   return (
// //     <div className="container">
// //       <h1 className="text-center my-5">Check OUT</h1>
// //       <div className="row">
// //         <div className="col-md-6 products-table">
// //           <h5 className="text-success mb-3">Products chosen to be purchased through the site:</h5>
// //           <table className="table table-bordered">
// //             <thead className="thead-dark">
// //               <tr>
// //                 <th scope="col" className="fs-5">Title</th>
// //                 <th scope="col" className="fs-5">Price</th>
// //                 <th scope="col" className="fs-5">Quantity</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {cartitems.map((item, index) => (
// //                 <tr key={index}>
// //                   <td>{item.title}</td>
// //                   <td>{item.price} EGP</td>
// //                   <td>{item.count}</td>
// //                 </tr>
// //               ))}
// //               {/* Total Items and Total Price row */}
// //               <tr>
// //                 <td colSpan="2" className="text-start fs-6 fw-bold">Total Items:</td>
// //                 <td>{totalItems} Items</td>
// //               </tr>
// //               <tr>
// //                 <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (excluding shipping):</td>
// //                 <td>{(totalPrice - shippingCost).toFixed(2)} EGP</td>
// //               </tr>
// //               {/* Shipping Cost row */}
// //               <tr>
// //                 <td colSpan="2" className="text-start fs-6 fw-bold">Shipping Cost:</td>
// //                 <td>{shippingCost} EGP</td>
// //               </tr>
// //               {/* Total Price with Shipping row */}
// //               <tr>
// //                 <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (including shipping):</td>
// //                 <td>{totalPrice.toFixed(2)} EGP</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="col-md-6 input-section">
// //           <h5 className="text-success mb-3">Enter Your Information:</h5>
// //           <div className="CheckOut d-flex flex-column gap-3 mb-5">
// //             {/* <label htmlFor="name" className="label">Name</label> */}
// //             <input
// //               id="name"
// //               className="form-control"
// //               placeholder='Enter Your Name'

// //               required

// //             />
// //             <input
// //               id="name"
// //               className="form-control"
// //               placeholder='Enter Your Phone'
// //               required
// //             />
// //             {/* City dropdown */}
// //             <select className="form-select p-1" onChange={handleCityChange}>
// //               <option value="">Choose your city</option>
// //               <option value="1">Alexandria</option>
// //               <option value="2">Asyut</option>
// //               <option value="3">Sohag</option>
// //               <option value="4">Qena</option>
// //               <option value="5">Banha</option>
// //               <option value="6">The Red Sea</option>
// //             </select>
// //             {showAddressInput && (
// //               <input
// //                 type="text"
// //                 className="form-control address"
// //                 placeholder="Enter your address in detail"
// //                 required
// //               />
// //             )}
// //             {/* Payment method selection */}
// //             <div className="payment-method-selection ">
// //               <h5 className="text-success mb-3">Select Payment Method:</h5>
// //               <div className="radio-group d-flex">
// //                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
// //                   <input
// //                     type="radio"
// //                     id="payment-visa"
// //                     name="payment-method"
// //                     value="visa"
// //                     checked={selectedPaymentMethod === 'visa'}
// //                     onChange={handlePaymentMethodChange}
// //                     required
// //                   />
// //                   <label htmlFor="payment-visa">
// //                     <img src={visa} alt="Visa" className='col-10' />
// //                   </label>
// //                 </div>

// //                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
// //                   <input
// //                     type="radio"
// //                     id="payment-other"
// //                     name="payment-method"
// //                     value="other"
// //                     checked={selectedPaymentMethod === 'other'}
// //                     onChange={handlePaymentMethodChange}
// //                   />
// //                   <label htmlFor="payment-other">
// //                     <img src={other} alt="Other" className='col-10' />
// //                   </label>
// //                 </div>







// //                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
// //                   <input
// //                     type="radio"
// //                     id="payment-mastercard"
// //                     name="payment-method"
// //                     value="mastercard"
// //                     checked={selectedPaymentMethod === 'mastercard'}
// //                     onChange={handlePaymentMethodChange}
// //                     required
// //                   />
// //                   <label htmlFor="payment-mastercard">
// //                     <img src={mastercard} alt="Mastercard" className='col-2' />
// //                   </label>
              
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="d-flex flex-column  justify-content-end gap-3 mt-3">
// //       <Link className="btn btn-success" onClick={handleSend}>Send</Link>
// //       </div>
// //           </div>
      
// //         </div>
// //       </div>
    
    
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import "./index.scss";

// // قم بإضافة المسارات الصحيحة للصور
// import visa from './visa.png';
// import mastercard from './Mastercard.png';
// import other from './other.png';

// export default function CheckOut() {
//   const [cartitems, setCartItems] = useState([]);
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [shippingCost] = useState(100); // تعريف قيمة مصاريف الشحن الثابتة
//   const [selectedCity, setSelectedCity] = useState("");
//   const [showAddressInput, setShowAddressInput] = useState(false);
//   const [address, setAddress] = useState("");
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cards")) || [];
//     setCartItems(storedCart);

//     // حساب إجمالي العناصر وسعرها
//     const itemsCount = storedCart.reduce((total, item) => total + item.count, 0);
//     const itemsTotalPrice = storedCart.reduce(
//       (total, item) => total + item.price * item.count,
//       0
//     );

//     // إضافة تكلفة الشحن إلى السعر الإجمالي
//     const totalWithShipping = itemsTotalPrice + shippingCost;

//     setTotalItems(itemsCount);
//     setTotalPrice(totalWithShipping); // تعيين السعر الإجمالي بما في ذلك الشحن
//   }, [shippingCost]);

//   // وظيفة للتعامل مع تغيير المدينة
//   const handleCityChange = (e) => {
//     const city = e.target.value;
//     setSelectedCity(city);
//     setShowAddressInput(city !== "");
//   };

//   // وظيفة للتعامل مع تغيير وسيلة الدفع
//   const handlePaymentMethodChange = (e) => {
//     setSelectedPaymentMethod(e.target.value);
//   };

//   // وظيفة لإرسال الطلب
//   const handleSend = () => {
//     toast.success("Order sent successfully!", {
//       position: "top-right",
//     });
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center my-5">Check OUT</h1>
//       <div className="row">
//         <div className="col-md-6 products-table">
//           <h5 className="text-success mb-3">Products chosen to be purchased through the site:</h5>
//           <table className="table table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col" className="fs-5">Title</th>
//                 <th scope="col" className="fs-5">Price</th>
//                 <th scope="col" className="fs-5">Quantity</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartitems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.title}</td>
//                   <td>{item.price} EGP</td>
//                   <td>{item.count}</td>
//                 </tr>
//               ))}
//               {/* إجمالي العناصر والسعر الإجمالي */}
//               <tr>
//                 <td colSpan="2" className="text-start fs-6 fw-bold">Total Items:</td>
//                 <td>{totalItems} Items</td>
//               </tr>
//               <tr>
//                 <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (excluding shipping):</td>
//                 <td>{(totalPrice - shippingCost).toFixed(2)} EGP</td>
//               </tr>
//               {/* تكلفة الشحن */}
//               <tr>
//                 <td colSpan="2" className="text-start fs-6 fw-bold">Shipping Cost:</td>
//                 <td>{shippingCost} EGP</td>
//               </tr>
//               {/* السعر الإجمالي مع الشحن */}
//               <tr>
//                 <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (including shipping):</td>
//                 <td>{totalPrice.toFixed(2)} EGP</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="col-md-6 input-section">
//           <h5 className="text-success mb-3">Enter Your Information:</h5>
//           <div className="CheckOut d-flex flex-column gap-3 mb-5">
//             {/* إدخال الاسم */}
//             <input
//               id="name"
//               className="form-control"
//               placeholder='Enter Your Name'
//               required
//             />
//             {/* إدخال الهاتف */}
//             <input
//               id="phone"
//               className="form-control"
//               placeholder='Enter Your Phone'
//               required
//             />
//             {/* قائمة اختيار المدينة */}
//             <select className="form-select p-1" onChange={handleCityChange}>
//               <option value="">Choose your city</option>
//               <option value="1">Alexandria</option>
//               <option value="2">Asyut</option>
//               <option value="3">Sohag</option>
//               <option value="4">Qena</option>
//               <option value="5">Banha</option>
//               <option value="6">The Red Sea</option>
//             </select>
//             {/* إدخال العنوان إذا تم اختيار مدينة */}
//             {showAddressInput && (
//               <input
//                 type="text"
//                 className="form-control address"
//                 placeholder="Enter your address in detail"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             )}
//             {/* اختيار وسيلة الدفع */}
//             <div className="payment-method-selection">
//               <h5 className="text-success mb-3">Select Payment Method:</h5>
//               <div className="radio-group d-flex">
//                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
//                   <input
//                     type="radio"
//                     id="payment-visa"
//                     name="payment-method"
//                     value="visa"
//                     checked={selectedPaymentMethod === 'visa'}
//                     onChange={handlePaymentMethodChange}
//                     required
//                   />
//                   <label htmlFor="payment-visa">
//                     <img src={visa} alt="Visa" className='col-10' />
//                   </label>
//                 </div>
//                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
//                   <input
//                     type="radio"
//                     id="payment-mastercard"
//                     name="payment-method"
//                     value="mastercard"
//                     checked={selectedPaymentMethod === 'mastercard'}
//                     onChange={handlePaymentMethodChange}
//                     required
//                   />
//                   <label htmlFor="payment-mastercard">
//                     <img src={mastercard} alt="Mastercard" className='col-2' />
//                   </label>
//                 </div>
//                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
//                   <input
//                     type="radio"
//                     id="payment-other"
//                     name="payment-method"
//                     value="other"
//                     checked={selectedPaymentMethod === 'other'}
//                     onChange={handlePaymentMethodChange}
//                   />
//                   <label htmlFor="payment-other">
//                     <img src={other} alt="Other" className='col-10' />
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex flex-column justify-content-end gap-3 mt-3">
//               <Link className="btn btn-success" onClick={handleSend}>Send</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import "./index.scss";

// // قم بإضافة المسارات الصحيحة للصور
// import visa from './visa.png';
// import mastercard from './Mastercard.png';
// import other from './other.png';

// export default function CheckOut() {
//   const [cartitems, setCartItems] = useState([]);
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [shippingCost] = useState(100); // تعريف قيمة مصاريف الشحن الثابتة
//   const [selectedCity, setSelectedCity] = useState("");
//   const [showAddressInput, setShowAddressInput] = useState(false);
//   const [address, setAddress] = useState("");
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cards")) || [];
//     setCartItems(storedCart);

//     // حساب إجمالي العناصر وسعرها
//     const itemsCount = storedCart.reduce((total, item) => total + item.count, 0);
//     const itemsTotalPrice = storedCart.reduce(
//       (total, item) => total + item.price * item.count,
//       0
//     );

//     // إضافة تكلفة الشحن إلى السعر الإجمالي
//     const totalWithShipping = itemsTotalPrice + shippingCost;

//     setTotalItems(itemsCount);
//     setTotalPrice(totalWithShipping); // تعيين السعر الإجمالي بما في ذلك الشحن
//   }, [shippingCost]);

//   // وظيفة للتعامل مع تغيير المدينة
//   const handleCityChange = (e) => {
//     const city = e.target.value;
//     setSelectedCity(city);
//     setShowAddressInput(city !== "");
//   };

//   // وظيفة للتعامل مع تغيير وسيلة الدفع
//   const handlePaymentMethodChange = (e) => {
//     setSelectedPaymentMethod(e.target.value);
//   };

//   // وظيفة لإرسال الطلب
//   const handleSend = () => {
//     toast.success("Order sent successfully!", {
//       position: "top-right",
//     });
//   };

//   return (
//     <div className="container ">
//       <h1 className="text-center my-5">Check OUT</h1>
//       <div className="row justify-content-between">
//         <div className="col-md-6 products-table">
//           <h5 className="text-success mb-3">Products chosen to be purchased through the site:</h5>
//           <table className="table table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col" className="fs-5">Title</th>
//                 <th scope="col" className="fs-5">Price</th>
//                 <th scope="col" className="fs-5">Quantity</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartitems.length === 0 ? (
//                 <tr>
//                   <td colSpan="3" className="text-center">No Products Available</td>
//                 </tr>
//               ) : (
//                 cartitems.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.title}</td>
//                     <td>{item.price} EGP</td>
//                     <td>{item.count}</td>
//                   </tr>
//                 ))
//               )}
//               {/* إجمالي العناصر والسعر الإجمالي */}
//               {cartitems.length > 0 && (
//                 <>
//                   <tr>
//                     <td colSpan="2" className="text-start fs-6 fw-bold">Total Items:</td>
//                     <td>{totalItems} Items</td>
//                   </tr>
//                   <tr>
//                     <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (excluding shipping):</td>
//                     <td>{(totalPrice - shippingCost).toFixed(2)} EGP</td>
//                   </tr>
//                   {/* تكلفة الشحن */}
//                   <tr>
//                     <td colSpan="2" className="text-start fs-6 fw-bold">Shipping Cost:</td>
//                     <td>{shippingCost} EGP</td>
//                   </tr>
//                   {/* السعر الإجمالي مع الشحن */}
//                   <tr>
//                     <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (including shipping):</td>
//                     <td>{totalPrice.toFixed(2)} EGP</td>
//                   </tr>
//                 </>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <div className="col-md-6 input-section">
//           <h5 className="text-success mb-3">Enter Your Information:</h5>
//           <div className="CheckOut d-flex flex-column gap-3 mb-5">
//             {/* إدخال الاسم */}
//             <input
//               id="name"
//               className="form-control"
//               placeholder='Enter Your Name'
//               required
//             />

//             {/* إدخال الهاتف */}
//             <input
//               id="phone"
//               className="form-control"
//               placeholder='Enter Your Phone'
//               required
//             />
//             {/* قائمة اختيار المدينة */}
//             <select className="form-select p-1" onChange={handleCityChange}>
//               <option value="">Choose your city</option>
//               <option value="1">Alexandria</option>
//               <option value="2">Asyut</option>
//               <option value="3">Sohag</option>
//               <option value="4">Qena</option>
//               <option value="5">Banha</option>
//               <option value="6">The Red Sea</option>
//             </select>
//             {/* إدخال العنوان إذا تم اختيار مدينة */}
//             {showAddressInput && (
//               <input
//                 type="text"
//                 className="form-control address"
//                 placeholder="Enter your address in detail"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             )}
//             {/* اختيار وسيلة الدفع */}
//             <div className="payment-method-selection">
//               <h5 className="text-success mb-3">Select Payment Method:</h5>
//               <div className="radio-group d-flex">
//                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
//                   <input
//                     type="radio"
//                     id="payment-visa"
//                     name="payment-method"
//                     value="visa"
//                     checked={selectedPaymentMethod === 'visa'}
//                     onChange={handlePaymentMethodChange}
//                     required
//                   />
//                   <label htmlFor="payment-visa">
//                     <img src={visa} alt="Visa" className='col-10' />
//                   </label>
//                 </div>
               
//                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
//                   <input
//                     type="radio"
//                     id="payment-other"
//                     name="payment-method"
//                     value="other"
//                     checked={selectedPaymentMethod === 'other'}
//                     onChange={handlePaymentMethodChange}
//                   />
//                   <label htmlFor="payment-other">
//                     <img src={other} alt="Other" className='col-10' />
//                   </label>
//                 </div>
//                 <div className="radio-button d-flex justify-content-center align-items-center gap-1">
//                   <input
//                     type="radio"
//                     id="payment-mastercard"
//                     name="payment-method"
//                     value="mastercard"
//                     checked={selectedPaymentMethod === 'mastercard'}
//                     onChange={handlePaymentMethodChange}
//                     required
//                   />
//                   <label htmlFor="payment-mastercard">
//                     <img src={mastercard} alt="Mastercard" className='col-2' />
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex flex-column justify-content-end gap-3 mt-3">
//               <Link className="btn btn-success" onClick={handleSend}>Send</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./index.scss";

// قم بإضافة المسارات الصحيحة للصور
import visa from './visa.png';
import mastercard from './Mastercard.png';
import other from './other.png';

export default function CheckOut() {
  const [cartitems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost] = useState(100); // تعريف قيمة مصاريف الشحن الثابتة
  const [selectedCity, setSelectedCity] = useState("");
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [address, setAddress] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cards")) || [];
    setCartItems(storedCart);

    // حساب إجمالي العناصر وسعرها
    const itemsCount = storedCart.reduce((total, item) => total + item.count, 0);
    const itemsTotalPrice = storedCart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );

    // إضافة تكلفة الشحن إلى السعر الإجمالي
    const totalWithShipping = itemsTotalPrice + shippingCost;

    setTotalItems(itemsCount);
    setTotalPrice(totalWithShipping); // تعيين السعر الإجمالي بما في ذلك الشحن
  }, [shippingCost]);

  // وظيفة للتعامل مع تغيير المدينة
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setShowAddressInput(city !== "");
  };

  // وظيفة للتعامل مع تغيير وسيلة الدفع
  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  // وظيفة لإرسال الطلب
  const handleSend = (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const form = e.target; // الحصول على النموذج

    if (form.checkValidity()) {
      toast.success("Order sent successfully!", {
        position: "top-right",
      });
      // يمكنك إضافة المزيد من المنطق هنا إذا لزم الأمر، مثل إرسال الطلب إلى الخادم
    } else {
      toast.error("Please fill in all required fields correctly.", {
        position: "top-right",
      });
      form.reportValidity(); // عرض رسائل التحقق من الصحة
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Check OUT</h1>
      <div className="row justify-content-between">
        <div className="col-md-6 products-table">
          <h5 className="text-success mb-3">Products chosen to be purchased through the site:</h5>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col" className="fs-5">Title</th>
                <th scope="col" className="fs-5">Price</th>
                <th scope="col" className="fs-5">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartitems.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center">No Products Available</td>
                </tr>
              ) : (
                cartitems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price} EGP</td>
                    <td>{item.count}</td>
                  </tr>
                ))
              )}
              {/* إجمالي العناصر والسعر الإجمالي */}
              {cartitems.length > 0 && (
                <>
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Total Items:</td>
                    <td>{totalItems} Items</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (excluding shipping):</td>
                    <td>{(totalPrice - shippingCost).toFixed(2)} EGP</td>
                  </tr>
                  {/* تكلفة الشحن */}
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Shipping Cost:</td>
                    <td>{shippingCost} EGP</td>
                  </tr>
                  {/* السعر الإجمالي مع الشحن */}
                  <tr>
                    <td colSpan="2" className="text-start fs-6 fw-bold">Total Price (including shipping):</td>
                    <td>{totalPrice.toFixed(2)} EGP</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6 input-section">
          <h5 className="text-success mb-3">Enter Your Information:</h5>
          <form className="CheckOut d-flex flex-column gap-3 mb-5" onSubmit={handleSend}>
            {/* إدخال الاسم */}
            <input
              id="name"
              className="form-control"
              placeholder='Enter Your Name'
              required
            />
            
            {/* إدخال الهاتف */}
            <input
              id="phone"
              className="form-control"
              placeholder='Enter Your Phone'
              required
            />
            {/* قائمة اختيار المدينة */}
            <select className="form-select p-1" onChange={handleCityChange} required>
              <option value="">Choose your city</option>
              <option value="1">Alexandria</option>
              <option value="2">Asyut</option>
              <option value="3">Sohag</option>
              <option value="4">Qena</option>
              <option value="5">Banha</option>
              <option value="6">The Red Sea</option>
            </select>
            {/* إدخال العنوان إذا تم اختيار مدينة */}
            {showAddressInput && (
              <input
                type="text"
                className="form-control address"
                placeholder="Enter your address in detail"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            )}
            {/* اختيار وسيلة الدفع */}
            <div className="payment-method-selection">
              <h5 className="text-success mb-3">Select Payment Method:</h5>
              <div className="radio-group d-flex">
                <div className="radio-button d-flex justify-content-center align-items-center gap-1">
                  <input
                    type="radio"
                    id="payment-visa"
                    name="payment-method"
                    value="visa"
                    checked={selectedPaymentMethod === 'visa'}
                    onChange={handlePaymentMethodChange}
                    required
                  />
                  <label htmlFor="payment-visa">
                    <img src={visa} alt="Visa" className='col-10' />
                  </label>
                </div>
               
                <div className="radio-button d-flex justify-content-center align-items-center gap-1">
                  <input
                    type="radio"
                    id="payment-other"
                    name="payment-method"
                    value="other"
                    checked={selectedPaymentMethod === 'other'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="payment-other">
                    <img src={other} alt="Other" className='col-10' />
                  </label>
                </div>
                <div className="radio-button d-flex justify-content-center align-items-center gap-1">
                  <input
                    type="radio"
                    id="payment-mastercard"
                    name="payment-method"
                    value="mastercard"
                    checked={selectedPaymentMethod === 'mastercard'}
                    onChange={handlePaymentMethodChange}
                    required
                  />
                  <label htmlFor="payment-mastercard">
                    <img src={mastercard} alt="Mastercard" className='col-2' />
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-end gap-3 mt-3">
              <button type="submit" className="btn btn-success">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
