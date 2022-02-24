const fs = require('fs');
const util = require('util');

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching speakers information
 */
class BlogService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSOn file that contains the speakers data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Returns a list of titles and short titles
   */
  async getTitle() {
    const data = await this.getData();

    // We are using map() to transform the array we get into another one
    return data.map((blog) => ({ title: blog.articleTitle, shortTitle: blog.shortTitle }));
  }

  /**
   * Get blog provided a shortTitle
   * @param {*} shortTitle
   */
  async getBlog(shortTitle) {
    const data = await this.getData();
    const blog = data.find((elm) => elm.shortTitle === shortTitle);
    if (!blog) return null;
    return {
      title: blog.articleTitle,
      shortTitle: blog.shortTitle,
      article: blog.articleContent,
    };
  }

  /**
   * Returns a list of blogs with only the basic information
   */
  async getListShort() {
    const data = await this.getData();
    return data.map((blog) => ({
      title: blog.articleTitle,
      shortTitle: blog.shortTitle,
      article: blog.articleContent,
    }));
  }

  /**
   * Get a list of blogs
   */
  async getList() {
    const data = await this.getData();
    return data.map((blog) => ({
      title: blog.articleTitle,
      shortTitle: blog.shortTitle,
      article: blog.articleContent,
    }));
  }

  /**
   * Fetches blog data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).blogs;
  }
}

module.exports = BlogService;
