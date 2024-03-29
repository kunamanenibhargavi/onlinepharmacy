const medications = [
    { name: "Aspirin", price: 5.99 },
    { name: "Ibuprofen", price: 7.99 },
    { name: "Paracetamol", price: 4.99 },
    { name: "Amoxicillin", price: 12.99 },
    { name: "Omeprazole", price: 9.99 }
];

// Function to display medications
function displayMedications() {
    const medicationsContainer = document.getElementById("medications-container");
    medicationsContainer.innerHTML = ""; // Clear previous content
    
    medications.forEach(medication => {
        const medicationElement = document.createElement("div");
        medicationElement.innerHTML = `<p>${medication.name} - $${medication.price}</p>`;
        medicationsContainer.appendChild(medicationElement);
        
        // Add click event listener to add medication to cart
        medicationElement.addEventListener("click", () => addToCart(medication));
    });
}

// Function to add medication to cart
function addToCart(medication) {
    const cartItems = document.getElementById("cart-items");
    const cartItemElement = document.createElement("div");
    cartItemElement.textContent = `${medication.name} - $${medication.price}`;
    cartItems.appendChild(cartItemElement);
}

// Function to handle checkout
function checkout() {
    // Implement checkout functionality (e.g., redirect to payment page)
    alert("Checkout functionality will be implemented soon!");
}

// Display medications when the page loads
window.onload = displayMedications;

// Event listener for checkout button click
document.getElementById("checkout-button").addEventListener("click", checkout);
