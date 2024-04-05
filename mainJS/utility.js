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