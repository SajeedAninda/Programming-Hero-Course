let loadData = async (searchText, showAllClicked) => {
    let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    let res = await fetch(url);
    let data = await res.json();
    let phones = data.data;
    displayPhones(phones, showAllClicked);
}

let displayPhones = (phones, showAllClicked) => {
    let phoneContainer = document.querySelector(".phone-container");
    phoneContainer.textContent = "";
    let showAllBtn = document.querySelector("#showAllBtn");
    if (!showAllClicked) {
        phones = phones.slice(0, 6);
    }
    if (phones.length >= 6 && !showAllClicked) {
        showAllBtn.classList.remove("hidden");
    }
    else {
        showAllBtn.classList.add("hidden");
    }
    for (let phone of phones) {
        let phoneCard = document.createElement("div");
        phoneCard.innerHTML = `
        <img src="${phone.image}" alt="">
            <h2 class="font-bold">${phone.brand}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <p class="font-bold">${phone.phone_name}</p>
            <button onclick="loadPhoneDetails('${phone.slug}');"; class="bg-blue-600 text-white font-bold rounded-xl w-1/2 py-1">Show Details</button>
        `
        phoneCard.classList = "card py-6 px-3 text-center space-y-3 flex flex-col justify-center items-center border border-gray-500";
        phoneContainer.appendChild(phoneCard);
    }
    loadingSpinner(false);

}

let handleSearchBtn = (showAllClicked) => {
    let searchField = document.querySelector("#searchField");
    let searchText = searchField.value;
    // searchField.value = "";
    loadData(searchText, showAllClicked);
    loadingSpinner(true);
}

let loadingSpinner = (isLoading) => {
    let loading = document.querySelector("#loading");
    if (isLoading) {
        loading.classList.remove("hidden");
    }
    else {
        loading.classList.add("hidden");
    }
}

let handleShowAllBtn = () => {
    handleSearchBtn(true);
}


let loadPhoneDetails = async (id) => {
    let url = `https://openapi.programming-hero.com/api/phone/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    let phone = data.data;
    showPhoneDetails(phone);
}
let showPhoneDetails = (phone) => {
    let phoneName = document.querySelector('#phone-name');
    phoneName.innerText = phone.name;

    let phoneDetailContainer = document.querySelector('.phone-details-container');

    phoneDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p><span class="font-bold">Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span class="font-bold">Display:</span>${phone.mainFeatures?.displaySize || 'No GPS available'}</p>
        <p><span class="font-bold">Processor:</span>${phone.mainFeatures?.chipSet || 'No GPS available'}</p>
        <p><span class="font-bold">Memory:</span>${phone.mainFeatures?.memory || 'No GPS available'}</p>
`
    phoneDetailsModal.showModal();
}

loadData();