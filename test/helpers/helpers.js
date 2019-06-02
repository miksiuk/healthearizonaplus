class Helpers {

  openEng() {
    browser.url('/');
    $('#lnk_Spanish').waitForDisplayed(2000);
  }

  openSpan() {
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
