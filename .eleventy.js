module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Create a 'post' collection for blog posts
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
