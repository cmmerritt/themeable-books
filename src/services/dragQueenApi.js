export const fetchQueens = async () => {
  return await fetch('https://www.nokeynoshade.party/api/queens?limit=10')
    .then(res => res.json())
    .then(queens => queens.map(queen => ({ 
      name: queen.name,
      image: queen.image_url,
      quote: queen.quote,
      id: queen.id
    })));
};
