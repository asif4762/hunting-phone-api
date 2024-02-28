const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = " ";

  const showAll = document.getElementById('show-all-btn');

  if (phones.length > 12 && !isShowAll) {
    showAll.classList.remove('hidden');
  }
  else {
    showAll.classList.add('hidden');
  }
  // console.log('Is Show All', isShowAll);
  if (!isShowAll) {
    phones = phones.splice(0, 12);
  }
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}');show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
              </div>
            </div>
        `;
    phoneContainer.appendChild(phoneCard)
  });
    toggleLoadingSpinner(false);
}

const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll);
}

// const handleSearch2 = () => {
//   toggleLoadingSpinner(true);
//   const searchField = document.getElementById('search-field2');
//   const searchText = searchField.value;
//   console.log('Ik');
//   loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (isLoading) {
  loadingSpinner.classList.remove('hidden');
  }
  else {
    loadingSpinner.classList.add('hidden');
  }
  
}

const handleShowAll = () => {
  handleSearch(true);
}

const handleShowDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  // console.log(data);

  const phone = data.data;

  showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
 
}
