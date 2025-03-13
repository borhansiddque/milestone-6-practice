const loadCategoryBtn = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  showCategory(data.categories);
};

const showCategory = (category) => {
  const categoryBtnContainer = document.getElementById("category-btn");
  category.forEach((cat) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button onclick="showCard('${cat.category}')"
      class="flex gap-4 items-center text-2xl font-bold primary-color py-6 px-20 border border-transparent hover:border-[#0E7A81] bg-[#0E7A8110] rounded-full cursor-pointer"
    >
      <img src="${cat.category_icon}" alt="">
      ${cat.category}
    </button>
    `;
    categoryBtnContainer.append(div);
  });
};

const showCard = async (catName) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${catName}`
  );
  const data = await response.json();
  showPetCard(data.data);
  showImage(data.data);
};

const showPetCard = (pets) => {
  const petCardContainer = document.getElementById("cardContainer");

  petCardContainer.innerHTML = "";
  console.log(pets.length);
  if (pets.length == 0) {
    document.getElementById('noData').classList.remove('hidden');
    document.getElementById('petImageCon').classList.add('hidden')
  } else {
    document.getElementById('noData').classList.add('hidden');
    document.getElementById('petImageCon').classList.remove('hidden');
  }
  pets.forEach((pet) => {
    
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="border border-[#0E7A8130] p-5 rounded-xl">
        <img src="${pet.image}" alt="" class=" w-full h-[180px] object-cover rounded-xl">
        <div class="mt-5 space-y-2">
          <h2 class="text-xl font-bold primary-color">Mister Tartosh</h2>
          <p class="flex gap-1"><img src="./images/frame.svg" alt="">Breed: ${pet.breed}</p>
          <p class="flex gap-1"><img src="./images/frame2.svg" alt="">Birth: ${pet.date_of_birth}</p>
          <p class="flex gap-1"><img src="./images/frame3.svg" alt="">Gender: ${pet.gender}</p>
          <p class="flex gap-1"><img src="./images/frame4.svg" alt="">Price : ${pet.price} $</p>
        </div>
        <hr class="my-5 opacity-30">
        <div class="flex justify-around">
          <button class="btn text-[#0E7A81]"><i class="fa-regular fa-thumbs-up"></i></button>
          <button class="btn text-[#0E7A81]">Adopt</button>
          <button class="btn text-[#0E7A81]">Details</button>
        </div>
      </div>
    `;
    petCardContainer.append(card);


  });
};



const showImage = (petImage) => {
  const petImageContainer = document.getElementById("petImageContainer");
  petImageContainer.innerHTML = "";
  for (const element of petImage) {
    const imageDiv = document.createElement("div");
    imageDiv.innerHTML = `
      <img src="${element.image}" alt="" class="rounded-xl">
    `;
    petImageContainer.append(imageDiv)
  }

  
};

loadCategoryBtn();


// cloudflared tunnel --url http://127.0.0.1:5500