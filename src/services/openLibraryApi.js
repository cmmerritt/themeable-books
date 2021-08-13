/* eslint-disable max-len */

export const fetchBooks = async () => {
  const res = await fetch('https://openlibrary.org/search.json?author=abraham%20merritt');
  const json = await res.json();
  const arrayOfObj = json.docs;
  const mappedArray = arrayOfObj.map(obj => ({
    title: obj.title,
    year: obj.first_publish_year,
    coverId: obj.cover_i
  })
  );
  return mappedArray;
};

