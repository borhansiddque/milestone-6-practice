const button = document.createElement('button');
button.innerText = 'click me for change title';
button.addEventListener('click', () => {
  document.querySelector('head').childNodes[5].innerText = "Title Change By JavaScript";
  
})
document.querySelector('body').append(button);
