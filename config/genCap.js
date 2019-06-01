const browsers = ['chrome'];
const languages = ['english', 'spanish'];

module.exports = function () {
  let res = [];
  browsers.forEach(br => {
    languages.forEach(lg => {
      res.push({
        maxInstances: 1,
        browserName: br,
        'goog:chromeOptions': {
          // args: ['--headless'],
          prefs: {
            languages: lg
          }
        }
      });
    })
  });
  return res;
};
