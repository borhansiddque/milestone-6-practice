const getPhoto = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(Response => Response.json())
  .then(data => {
    showImage(data)
    
  })
}

const showImage = (posts) => {
  const postsContainer = document.getElementById('postsContainer');
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('text-center')
    div.innerHTML = `
      <h3 class="text-3xl font-semibold">${post.title}</h3>
      <p class="text-xl text-gray-500">${post.body}</p>
      <button class="btn">Details</button>
    `
    postsContainer.append(div);
  }
}

getPhoto()