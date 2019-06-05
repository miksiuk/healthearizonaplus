class Helpers {

  openEng() {
    browser.setWindowSize(1366, 768);
    browser.url('/');
    $('#lnk_Spanish').waitForDisplayed(2000);
  }

  openSpan() {
    browser.setWindowSize(1366, 768);
    browser.url('/');
    $('#lnk_Spanish').waitForDisplayed(2000);
    $('#lnk_Spanish').click();
    $('#lnk_Spanish').waitForDisplayed(2000);
  }

  isEng(){
    return browser.options.capabilities['goog:chromeOptions'].prefs.languages === 'english';
  }

}

export default new Helpers()
