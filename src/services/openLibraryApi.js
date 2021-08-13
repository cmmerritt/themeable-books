/* eslint-disable max-len */
// import { findCoverImg } from './bookCoverApi';

export const fetchBooks = async () => {
  // return await fetch('https://openlibrary.org/search.json?author=abraham%20merritt')
  //   .then(res => res.json())
  //   .then(res => Object.entries(res))
  //   .then(books => books.map(book => ({
  //     title: book.title,
  //     cover: book.isbn
  //   })));

  const res = await fetch('https://openlibrary.org/search.json?author=abraham%20merritt');
  const json = await res.json();
  console.log(json);
  const array = Object.entries(json.docs);
  console.log('entries', array);
  const newOne = [];
  for(let i of array) {
    let keyvalues = i[1];
    newOne.push(Object.entries(keyvalues));
  }
  const newNew = (newOne.map(item => Object.values(item)));
  console.log(newNew.map(book => ({
    title: book[4][1],
    image: book[18][1][0]
  })));
  return newNew.map(book => ({
    title: book[4][1],
    image: book[18][1][0]
  }));

  // return json.map(({ title, isbn }) => ({
  //   title,
  //   cover: isbn
  // }));
};

