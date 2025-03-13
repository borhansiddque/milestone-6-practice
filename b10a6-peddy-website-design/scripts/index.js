const loadCategoryBtn = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  showCategory(data.categories);
};

loadCategoryBtn();

const showCategory = (category) => {
  const categoryBtnContainer = document.getElementById("category-btn");
  category.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button
      class="flex gap-4 items-center text-2xl font-bold primary-color py-6 px-20 border border-transparent hover:border-[#0E7A81] bg-[#0E7A8110] rounded-full cursor-pointer"
    >
      <img src="${element.category_icon}" alt="">
      ${element.category}
    </button>
    `;
    categoryBtnContainer.append(div);
  });
};
