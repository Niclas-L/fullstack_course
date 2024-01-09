const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  const result = blogs.reduce(
    (currentFavorite, blog) =>
      currentFavorite.likes > blog.likes ? currentFavorite : blog,
    blogs[0]
  );
  return result;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
