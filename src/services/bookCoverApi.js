export const findCoverImg = (isbn) => {
  let coverImg = undefined;
  for(let i = 0; i < isbn.length; i++) {
    if(`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` === true) {
      coverImg = `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    }
    return coverImg;
  }
};
