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
          // args: ["--window-size=1366,768", "-headless"],
          prefs: {
            languages: lg,
            resolution : {
              width: 1366,
              height: 768}
          }
        }
      });
    })
  });
  return res;
};
