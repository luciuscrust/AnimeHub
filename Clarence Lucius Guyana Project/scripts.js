document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const packageType = document.getElementById("package").value;

    const locationPrices = {"north-america": 150, "europe": 200, "asia": 100};
    const packagePrices = {
      "anniversary-commic": 400,
      "commic": 800,
      "anniversary-anime": 1500,
      "deluxe": 3000,
      "mystery": 1000
    };

    const total = locationPrices[location] + packagePrices[packageType];
    document.getElementById("totalPrice").innerText = `Total: ${total} GYD`;

    const data = { name, location, package: packageType, price: total };

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      alert("Order placed successfully!");
      document.getElementById("orderForm").reset();
    })
    .catch(err => console.error('Error:', err));
  });