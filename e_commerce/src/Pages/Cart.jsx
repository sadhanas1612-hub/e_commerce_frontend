import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {

  const [cartItems, setCartItems] =
    useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const items =
      JSON.parse(localStorage.getItem("cart"))
      || [];

    setCartItems(items);
  };

  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {

    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartItems(updatedCart);
  };

  const removeItem = (id) => {

    const updatedCart =
      cartItems.filter(
        (item) => item.id !== id
      );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <>
          <h4>Cart is Empty</h4>

          <Link
            className="btn btn-primary"
            to="/products"
          >
            Browse Products
          </Link>
        </>
      ) : (
        <>
          {cartItems.map((item) => (

            <div
              className="card mb-3"
              key={item.id}
            >
              <div className="card-body">

                <div className="row align-items-center">

                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-4">
                    <h5>{item.name}</h5>

                    <p>
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="col-md-3">

                    <button
                      className="btn btn-danger me-2"
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                    >
                      -
                    </button>

                    {item.quantity}

                    <button
                      className="btn btn-success ms-2"
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  <div className="col-md-2">

                    <button
                      className="btn btn-dark"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            </div>

          ))}

          <div className="card p-3 shadow">

            <h3>
              Total Amount :
              ₹{totalPrice}
            </h3>

            <div className="mt-3">

              <Link
                to="/products"
                className="btn btn-secondary me-2"
              >
                Continue Shopping
              </Link>
              <br></br>
              <br></br>

              <Link
                to="/payment"
                className="btn btn-success"
              >
                Proceed To PlaceOrder
              </Link>

            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;