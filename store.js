function handlesearch() {
    loadingAnimationToggle(true);
    const searchInputElement = document.getElementById("search-input-field");
    const searchInputValue  = searchInputElement.value;
    loadPhone (searchInputValue);
}

function loadingAnimationToggle(isLoading) {
    const loaderAnimation = document.getElementById("loader-animation");
    if (isloading) {
        loaderAnimation.classList.remove("hidden");
    
    } else {
        loaderAnimation.classList.add("hidden");
    }
}

const loadPhone = async (searchText) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
        console.log("Server Response: ", res);
        const searverData = await res.json();
        displayPhone (searverData.data);
};
        
const displayPhone = (data) => {
        console.log("Inside displayPhone function:", data);
        const cardContainer = document.getElementById(`card-section`);

        data.forEach( singlephone  => {
            const productCard = document.createElement(`div`);
            productCard.classList.add(`card`);

            productCard.innerHTML= `
            <div class="card-image">
                <img src=${phone.image} alt="iphone-image" />
            </div>
                <h4 class="card-title">${phone.phone_name}</h4>
                <p class="card-description">
                 There are many variations of passages of available, but the majority have suffered
                 </p>
            <div class="card-price">
                <span>$</span>
                <span id="card-item-price">999</span>
            </div>
            <div class="card-button">
                <button class="btn">Buy now</button>
            </div>
            `;
        cardContainer.appendChild(productCard);
        });
        loadingAnimationToggle(false);
};
