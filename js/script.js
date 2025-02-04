
const content = document.querySelector("#content .row");
const inputs = document.querySelectorAll("input");
const select = document.getElementById("select");

let key = 0;

function allCat() {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("response status " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            if (data == []) {
                throw new Error("Array is empty");
            }


            content.innerHTML = '';

            data.forEach(function (card) {
                let ca = `
                    <div class="col-3 card-style">
                        <div class="card bg-body-tertiary">
                            <img src="${card.image}" class="card-img-top" alt="${card.title}">
                            <div class="card-body">
                                <h5 class="card-title">${card.category}</h5>
                                <p class="card-text">${card.title}</p>
                                <p class="card-text price-text">$${card.price}</p>
                            </div>
                        </div>
                    </div>`;
                content.innerHTML += ca;
            });

        })
        .catch(function (error) {
            console.error("error message:", error.message);
        });
}


function displayCards(cardType) {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("response status " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            if (data == []) {
                throw new Error("Array is empty");
            }


            content.innerHTML = '';

            data.forEach(function (card) {
                if (card.category == cardType) {
                    let ca = `
                        <div class="col-3 card-style">
                            <div class="card bg-body-tertiary">
                                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${card.category}</h5>
                                    <p class="card-text">${card.title}</p>
                                    <p class="card-text price-text">$${card.price}</p>
                                </div>
                            </div>
                        </div>`;
                    content.innerHTML += ca;
                }
            });

        })
        .catch(function (error) {
            console.error("error message:", error.message);
        });
}


//// All categories
window.addEventListener("load", function () {
    allCat();
    key = 1;
})

inputs[0].addEventListener("click", function () {
    allCat();
    key = 1;
})


//// men categories
inputs[1].addEventListener("click", function () {
    displayCards("men's clothing");
    key = 2;
})

//// Jewelry categories
inputs[2].addEventListener("click", function () {
    displayCards("jewelery");
    key = 3;
})


//// electronics categories
inputs[3].addEventListener("click", function () {
    displayCards("electronics");
    key = 4;
})


//// women's clothing categories
inputs[4].addEventListener("click", function () {
    displayCards("women's clothing");
    key = 5;
})


/////sorting
select.addEventListener("change", function (e) {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("response status " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            if (data == []) {
                throw new Error("Array is empty");
            }


            if (e.target.value == 1) {
                data.sort((a, b) => (a.price - b.price));   //// low to high

            } else {
                data.sort((a, b) => (b.price - a.price));   //// high to low

            }

            let flag = true;
            switch (key) {
                case 1:
                    flag = false;
                    break;
                case 2:
                    cardType = "men's clothing";
                    break;
                case 3:
                    cardType = "jewelery";
                    break;
                case 4:
                    cardType = "electronics";
                    break;
                case 5:
                    cardType = "women's clothing";
                    break;
            }

            content.innerHTML = '';

            data.forEach(function (card) {
                if (flag) {
                    if (card.category == cardType) {
                        let ca = `
                        <div class="col-3 card-style">
                            <div class="card bg-body-tertiary">
                                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${card.category}</h5>
                                    <p class="card-text">${card.title}</p>
                                    <p class="card-text  price-text">$${card.price}</p>
                                </div>
                            </div>
                        </div>`;
                        content.innerHTML += ca;
                    }
                }
                else {
                    let ca = `
                    <div class="col-3 card-style">
                        <div class="card bg-body-tertiary">
                            <img src="${card.image}" class="card-img-top" alt="${card.title}">
                            <div class="card-body">
                                <h5 class="card-title">${card.category}</h5>
                                <p class="card-text">${card.title}</p>
                                <p class="card-text price-text">$${card.price}</p>
                            </div>
                        </div>
                    </div>`;
                    content.innerHTML += ca;
                }
            });
            console.log(data);
            console.log(e.target.value);
            console.log(e.target);
            console.log("appoooooooooooooooo");
        })

        .catch(function (error) {
            console.error("error message:", error.message);
        });
})

