const loadServices1 = () => {
    fetch("http://127.0.0.1:8000/product_list/")
        .then((res) => res.json())
        .then((data) => displayService(data));
};

const displayService = (services) => {
    console.log(services);
    const parent = document.getElementById("card-container");

    services.forEach((service) => {
        const div = document.createElement("div");
        div.className = "col"; // Bootstrap column
        div.innerHTML = `
            <div class="card">
                <img src="${service.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                </div>
            </div>
        `;
        parent.appendChild(div);
    });
};



loadServices1();
