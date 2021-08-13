/* eslint-disable max-len */
export const fetchLocBooks = async () => {
  const res = await fetch('https://www.loc.gov/books/?fo=json&all=true&q=horror&sb=date_desc');
  const json = await res.json();
  const bookArray = json.content.results;
  const map = bookArray.map(book => ({
    title: book.title,
    author: book.item.contributors[0],
    description: book.description.toString().split
  }));
  return map;
};
