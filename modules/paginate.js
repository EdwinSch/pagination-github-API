const paginate = (followers) => {
  // calculate number of pages
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  // split followers array to x new arrays
  const splitFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return splitFollowers;
};

export default paginate;
