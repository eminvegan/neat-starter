const pluginBookshop = require("@bookshop/eleventy-bookshop");
const { DateTime } = require("luxon");
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
const { wordCountCallback } = require("./site/js/wordCount");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt({
    html: true,
  });

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("length", (input) => {
    return input.length;
  });
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addPlugin(emojiReadTime, {
    showEmoji: false,
  });
  eleventyConfig.addFilter("wordCount", wordCountCallback);
  eleventyConfig.addFilter("markdownify", (markdown) => md.render(markdown));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPlugin(pluginWebc, {
		transform: false,
    components: [
      "./_components/**/*.webc",
      "npm:@11ty/eleventy-img/*.webc",
    ],
  });
  eleventyConfig.addPlugin(
    pluginBookshop({
      bookshopLocations: ["component-library"],
      pathPrefix: "",
    })
  );
  eleventyConfig.ignores.add("site/schemas");

  // eleventyConfig.addPassthroughCopy("site/css");
  eleventyConfig.addWatchTarget("site/css");

  eleventyConfig.addPassthroughCopy("site/fonts");
  eleventyConfig.addPassthroughCopy("site/images");

  eleventyConfig.addPassthroughCopy("site/js");
  eleventyConfig.addWatchTarget("site/js");
  eleventyConfig.addPassthroughCopy("is-land-autoinit.js");
  eleventyConfig.addPassthroughCopy("is-land.js");

  eleventyConfig.addPassthroughCopy("site/vendor");
  return {
    templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "site",
      pages: "pages",
    },
    pathPrefix: "/",
  };
};
