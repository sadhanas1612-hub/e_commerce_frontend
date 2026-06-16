import React, { useState, useEffect } from "react";

function Payment() {
const [cartItems, setCartItems] = useState([]);
const [paymentMethod, setPaymentMethod] = useState("");

useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
}, []);

const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
);

const handlePayment = () => {
    if (!paymentMethod) {
    alert("Please select a payment method");
    return;
    }

    alert(`Order placed successfully using ${paymentMethod}!`);

    // Clear cart after successful order
    localStorage.removeItem("cart");
};

return (
    <div style={{ padding: "20px" }}>
    <h2>Payment Page</h2>

    <h3>Total Amount: ₹{totalPrice}</h3>

    <div style={{ marginTop: "20px" }}>
        <h4>Select Payment Method</h4>

        <label>
        <input
            type="radio"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) => setPaymentMethod(e.target.value)}
        />
        UPI
        </label>

        <br />

        <label>
        <input
            type="radio"
            value="Card"
            checked={paymentMethod === "Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Credit/Debit Card
        </label>

        <br />

        <label>
        <input
            type="radio"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Cash on Delivery
        </label>
    </div>

      {/* UPI Section */}
    {paymentMethod === "UPI" && (
        <div style={{ marginTop: "20px" }}>
        <input
            type="text"
            placeholder="Enter UPI ID"
            style={{ padding: "8px", width: "250px" }}
        />
        </div>
    )}

      {/* Card Section */}
    {paymentMethod === "Card" && (
        <div style={{ marginTop: "20px" }}>
        <input
            type="text"
            placeholder="Card Number"
            style={{ display: "block", marginBottom: "10px" }}
        />

        <input
            type="text"
            placeholder="Card Holder Name"
            style={{ display: "block", marginBottom: "10px" }}
        />

        <input
            type="text"
            placeholder="CVV"
            style={{ display: "block", marginBottom: "10px" }}
        />
        </div>
    )}

    <button
        onClick={handlePayment}
        style={{
        marginTop: "20px",
        padding: "10px 20px",
        cursor: "pointer",
        }}
    >
        Place Order
    </button>
    </div>
);
}

export default Payment;