const axios = require('axios');

const fetchCollegeWiki = async (slug) => {
  try {
    const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`);
    return {
      description: res.data.extract,
      image: res.data.thumbnail?.source,
      url: res.data.content_urls.desktop.page
    };
  } catch (error) {
    return null;
  }
};

module.exports = { fetchCollegeWiki };