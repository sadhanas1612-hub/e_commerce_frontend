import { useNavigate } from "react-router-dom";

function Products() {
const navigate = useNavigate();

const products = [
    {
    id: 1,
    name: "Men's Shirt",
    price: 999,
    image: "https://via.placeholder.com/200",
    },
    {
    id: 2,
    name: "Women's Kurti",
    price: 1299,
    image: "https://via.placeholder.com/200",
    },
    {
    id: 3,
    name: "Denim Jacket",
    price: 1999,
    image: "https://via.placeholder.com/200",
    },
    {
    id: 4,
    name: "Cotton Saree",
    price: 1499,
    image: "https://via.placeholder.com/200",
    },
];

const addToCart = (product) => {
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {
    alert("Please login first");
    navigate("/login");
    return;
}

const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

const existingItem = currentCart.find(
    (item) => item.id === product.id
);

const updatedCart = existingItem
    ? currentCart.map((item) =>
        item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    : [...currentCart, { ...product, quantity: 1 }];

localStorage.setItem("cart", JSON.stringify(updatedCart));

navigate("/cart");

const isLoggedIn = localStorage.getItem("isLoggedIn");
{
!isLoggedIn && (
    <button onClick={() => navigate("/login")}>
    Login
    </button>
);
}
};
const isLoggedIn = localStorage.getItem("isLoggedIn");
{
!isLoggedIn && (
    <button onClick={() => navigate("/login")}>
    Login
    </button>
);
}

return (
    <div style={{ padding: "20px" }}>
    <h1>Products</h1>

    <div
        style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        }}
    >
        {products.map((product) => (
        <div
            key={product.id}
            style={{
            border: "1px solid gray",
            padding: "10px",
            borderRadius: "10px",
            }}
        >
            <img
            src={product.image}
            alt={product.name}
            width="100%"
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button
            onClick={() => addToCart(product)}
            >
            Add to Cart
            </button>
        </div>
        ))}
    </div>
    </div>
);
}

export default Products;