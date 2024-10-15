//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ulElement = document.createElement('ul');
  ulElement.classList.add('book-list');

  books.forEach((book) => {
    const liElement = document.createElement('li');
    liElement.classList.add('book');

    const h2Element = document.createElement('h2');
    h2Element.textContent = book.title;
    liElement.appendChild(h2Element);

    const pElement = document.createElement('p');
    pElement.textContent = `Author: ${book.author}`;
    liElement.appendChild(pElement);

    const imgElement = document.createElement('img');
    const imageName = book.title.toLowerCase().split(' ').join('_');
    imgElement.src = `/assets/${imageName}.jpg`;
    imgElement.alt = `Cover of ${book.title}`;
    liElement.appendChild(imgElement);

    if (book.alreadyRead) {
      liElement.style.backgroundColor = 'green';
    } else {
      liElement.style.backgroundColor = 'red';
    }

    ulElement.appendChild(liElement);
  });

  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
