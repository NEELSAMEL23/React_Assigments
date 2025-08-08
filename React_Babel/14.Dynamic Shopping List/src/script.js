const { useState } = React;

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState("");

    const addItem = () => {
        if (!name.trim() || !quantity || quantity < 1) {
            setError("Please enter a valid item and quantity (min: 1)");
            return;
        }
        setItems([...items, { id: Date.now(), name, quantity }]);
        setName("");
        setQuantity("");
        setError("");
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const clearAll = () => {
        setItems([]);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Shopping List</h2>
            <div className="flex gap-2 mb-2">
                <input
                    type="text"
                    className="border p-2 w-full rounded"
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="border p-2 w-24 rounded"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={addItem}
                >
                    Add
                </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="space-y-2 mt-4">
                {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                        <span>{item.name} - {item.quantity}</span>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            onClick={() => removeItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {items.length > 0 && (
                <button
                    className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                    onClick={clearAll}
                >
                    Clear All
                </button>
            )}
        </div>
    );
}

function App() {
    return <ShoppingList />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);