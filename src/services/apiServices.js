export const mungeIsbn = (array) => {
  if(array !== []) {
    return array[0];
  }
  else return '0';
};
