const fs = require('fs');
const util = require('util');

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching speakers information
 */
class TutorialService {
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
    return data.map((tutorial) => ({ title: tutorial.articleTitle, shortTitle: tutorial.shortTitle }));
  }

  /**
   * Get tutorial provided a shortTitle
   * @param {*} shortTitle
   */
  async getTutorial(shortTitle) {
    const data = await this.getData();
    const tutorial = data.find((elm) => elm.shortTitle === shortTitle);
    if (!tutorial) return null;
    return {
      title: tutorial.articleTitle,
      shortTitle: tutorial.shortTitle,
      article: tutorial.articleContent,
    };
  }

  /**
   * Returns a list of tutorials with only the basic information
   */
  async getListShort() {
    const data = await this.getData();
    return data.map((tutorial) => ({
      title: tutorial.articleTitle,
      shortTitle: tutorial.shortTitle,
      article: tutorial.articleContent,
    }));
  }

  /**
   * Get a list of tutorials
   */
  async getList() {
    const data = await this.getData();
    return data.map((tutorial) => ({
      title: tutorial.articleTitle,
      shortTitle: tutorial.shortTitle,
      article: tutorial.articleContent,
    }));
  }

  /**
   * Fetches tutorial data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).tutorials;
  }
}

module.exports = TutorialService;
