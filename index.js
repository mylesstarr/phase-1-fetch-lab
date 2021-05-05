
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(bookArr => {
     renderBooks(bookArr)
  }
  )
}


// // helper function 

function renderBooks(bookArr){
  console.log(bookArr) 
  const main = document.querySelector('main');
  console.log(main)
  bookArr.forEach(bookArr => {
    const h2 = document.createElement('h2');
    h2.innerHTML = bookArr.name;
    main.appendChild(h2);
   });
}

document.addEventListener('DOMContentLoaded', fetchBooks)

