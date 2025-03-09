const getPhoto = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((data) => {
      showImage(data);
    });
};

const showImage = (posts) => {
  const postsContainer = document.getElementById("postsContainer");
  for (const post of posts) {
    const postId = post.id;
    
    const div = document.createElement("div");
    div.classList.add("text-center");
    div.innerHTML = `
      <h3 class="text-3xl font-semibold">${post.title}</h3>
      <p class="text-xl text-gray-500">${post.body}</p>
      <button class="btn" onclick="document.getElementById('${postId}').showModal()">Details</button>
      <dialog id="${postId}" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${post.title}</h3>
          <p class="py-4">${post.body}</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    `;
    postsContainer.append(div);
  }
};

getPhoto();
