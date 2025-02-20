document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    
    const products = [
        { id: "idea1", name: "Electric Light Bulb" },
        { id: "idea2", name: "Internet" },
        { id: "idea3", name: "Smartphone" },
        { id: "idea4", name: "Printing Press" }
    ];

    if (productSelect) { 
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    
    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", "0");
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function () {
            let reviewCount = parseInt(localStorage.getItem("reviewCount"), 10);
            localStorage.setItem("reviewCount", reviewCount + 1);
        });
    }
});
