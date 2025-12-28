const categories = [];
const products = [];

// Helper to add product
const addProduct = (id, name, price, mrp, category) => {
    products.push({
        id,
        name,
        image: `/img/${id}.png`,
        price,
        mrp,
        discount: Math.floor(((mrp - price) / mrp) * 100),
        rating: (4 + Math.random()).toFixed(1),
        reviews: Math.floor(Math.random() * 200) + 10,
        category
    });
};

/* 
  Corrected Categories based on image range:
  1-10: Electronic Timers / School Bell Systems
  11-35: CCTV Cameras & Security
  36-50: Smart Door Locks
  51-82: Door Accessories & Hardware / General Electronics
*/

// 1. Electronic Timers & Bells (1-10)
for (let i = 1; i <= 10; i++) {
    addProduct(i, `Automatic School Voice Bell Timer Model-${i}`, 3500, 5500, "Electronics");
}

// 2. CCTV Cameras (11-35)
// Assuming mix of Bullet, Dome, and WiFi cameras
for (let i = 11; i <= 35; i++) {
    const isWifi = i % 3 === 0;
    const type = i % 2 === 0 ? "Dome" : "Bullet";
    addProduct(i,
        `CP Plus ${isWifi ? 'Wireless Smart' : 'HD Analog'} ${type} Camera (Model ${i})`,
        isWifi ? 2450 : 1650,
        isWifi ? 4200 : 2800,
        "CCTV"
    );
}

// 3. Smart Door Locks (36-50)
for (let i = 36; i <= 50; i++) {
    addProduct(i, `Digital Smart Door Lock - Fingerprint & Keypad Access (Model ${i})`, 6500 + (i * 10), 12000, "Door Lock");
}

// 4. Door Hardware & Mixed Electronics (51-82)
for (let i = 51; i <= 82; i++) {
    // Some of these might be handles or other hardware
    addProduct(i, `Premium Stainless Steel Door Kit / Hardware Item-${i}`, 850 + (i * 5), 1800, "Hardware");
}

export default products;
