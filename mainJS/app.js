
const apiCheck2 = async(searchInput) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchInput}`);
    const data = await response.json();
    const phones = data.data;
    showPhone(phones )
    
}

const showPhone = (phones) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = ''

    phones = phones.slice(0, 12);

    for(const phone of phones){
        phoneDivText(phone);
    }
    loaderSpinner()

    const showMoreBtn = document.getElementById('show-more-btn');
    if(phones.length < 6){
        showMoreBtn.classList.add('hidden');
    }
    else{
        showMoreBtn.classList.remove('hidden')
    }
}

const getSearchText = () =>{
    const search = document.getElementById('search-text');
    const searchText = search.value;
    apiCheck2(searchText);
    loaderSpinner(true)
    document.getElementById('search-text').value = ''
}

const loaderSpinner = (loader) =>{
    const loaderSpinner = document.getElementById('loading');
    if(loader){
        loaderSpinner.classList.remove('hidden')
    }
    else{
        loaderSpinner.classList.add('hidden')
    }
}

// phone div
const phoneDivText = (phone) =>{
    const phonesContainer = document.getElementById('phones-container');
    const phoneDiv = document.createElement('div');
        phoneDiv.classList = 'card bg-base-200 shadow-xl mb-8';
        phoneDiv.innerHTML = `<figure class="p-6">
        <img class="rounded-3xl" src='${phone.image}' alt="${phone.phone_name}" />
    </figure>
    <div class="space-y-4 px-3 text-center">
      <h2 class="card-title flex justify-center font-bold text-2xl text-[#403F3F]">${phone.phone_name}</h2>
      <p class="font-normal text-lg">There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-actions justify-center pb-6">
        <button onClick = "showDetails('${phone.slug}') , phone_model.showModal()" class="btn btn-primary text-base">show details</button>
      </div>
    </div>`;
    phonesContainer.appendChild(phoneDiv);
}


const showDetails = async(id) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await response.json();
    console.log(data.data);

    const phone_modal = document.getElementById('phone_model');
    phone_modal.innerHTML = `<div class="modal-box">
    <figure class="p-6 flex justify-center">
        <img class="rounded-3xl" src='${data?.data?.image}' alt="${data.name}" />
    </figure>
    <h2 class="card-title flex justify-start font-bold text-2xl text-[#403F3F]">${data?.data?.name}</h2>
    <p class="font-normal text-lg">There are many variations of passages of available, but the majority have suffered</p>
    <div class="mt-4 space-y-3">
        <h3><span class="font-semibold text-xl text-[#403F3F]">storage:</span> ${data?.data?.
            mainFeatures?.storage}</h3>
        <h3><span class="font-semibold text-xl text-[#403F3F]">displaySize:</span>${data?.data?.
            mainFeatures?.displaySize}</h3>
        <h3><span class="font-semibold text-xl text-[#403F3F]">chipSet:</span> ${data?.data?.
            mainFeatures?.chipSet}</h3>
        <h3><span class="font-semibold text-xl text-[#403F3F]">memory:</span> ${data?.data?.
            mainFeatures?.memory}</h3>
        <h3><span class="font-semibold text-xl text-[#403F3F]">releaseDate:</span> ${data?.data?.releaseDate}</h3>
        <h3><span class="font-semibold text-xl text-[#403F3F]">brand:</span>${data?.data?.brand}</h3>
    </div>
    <div class="modal-action">
    <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
    </form>
    </div>
</div>`
}

// getSearchText()
apiCheck2(searchInput = 'iphone')