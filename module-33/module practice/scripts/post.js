const handlePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    showPost(data);
    
  })
  
}

const showPost = (posts) => {
  const postContainer = document.getElementById('postContainer');
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
      <div style="display:flex; justify-content: space-between;">
        <h5>User ID: ${post.userId}</h5>
        <h5>Post ID: ${post.id}</h5>
      </div>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <button onclick="details()">Details</button>
    `;
    postContainer.append(div);
  }
}
handlePost();

const details = () => {
  alert("Sorry! Button Not Work")
}